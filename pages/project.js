import { test,expect } from '@playwright/test';
exports.ProjectPage = class ProjectPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[@id="id_119"]')
        this.project_dropdown1 = page.locator('//div[@id="id_136"]')
        this.project_dropdown2 = page.locator('//div[@id="id_140"]')
        this.project_dropdown3 = page.locator('//div[@id="id_160"]')
        this.machineNo_txtBox = page.locator('input[name="cmbMachineNo_0"]')
        this.close_btn = page.locator('#id_1928')
        this.save_btn = page.locator('//div[@id="id_99"]')
        this.no_btn = page.locator('//div[@name="no"]')
        this.project_label = page.locator('(//div[@name="MdiChildPage_frmProjectDetails"])[1]')
        this.userQueriesTxt_name = page.locator('//div[@name="lblUserQueries"]')
        this.project_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="0" and @style="left:173px;width:156px;z-index:9999"]')                                     
        this.project1_txtBox = page.locator('input[name="cmbOperator"]')
        this.ok_button = page.locator('div[name="cmdOk"]')
        this.del_button = page.locator('#id_101').getByRole('img')
        this.delPopup1Yes_button = page.getByText('OK')
        this.delPopup2Yes_button = page.getByText('OK')
        this.noResults_popup = page.getByText('No match!')
        
    }
    
    async projectCreation(machineNo)
     {
        await test.step("Navigate to the Project Module Navigation & enter Machine no & save button", async()=>
          {
            await this.myEvatic_dropdown.click()
            await this.project_dropdown1.click()
            await this.project_dropdown2.click()
            await this.page.waitForLoadState("domcontentloaded");
            //await this.machineTxt_name.waitFor({ state: 'visible' })
            await this.machineNo_txtBox.click()
            await this.machineNo_txtBox.fill(machineNo)
            await this.page.keyboard.press('Control+F3');
            await this.page.getByText(machineNo).first().click()   
            await this.close_btn.click()
            await this.save_btn.click()
            await this.page.waitForTimeout(2000);
            await this.no_btn.click();
            await this.save_btn.click()
            await this.page.waitForTimeout(3000);
            const projName = await this.project_label.textContent();
            //console.log('The new label created is ' + projName);
            const myArray = projName.split(" ");
            const project = myArray[1].split(":");
            this.projectNo = project[0]
            //console.log('The new projectId1 created is ' + await this.projectNo);
            //await this.page.pause();
            await this.page.waitForTimeout(3000);
                        
           })   
          } 
      async projectSearch(projectNumber)
        {
       await test.step("Navigate to the Project Search Page & enter Project No,Click OK button", async()=>
         {
            await this.project_dropdown3.click()
            //await this.page.locator('//html/body/div[2]/div[6]/div[2]/div[1]/div[1]/div').click(); 
            await this.page.waitForLoadState("domcontentloaded");
            await this.userQueriesTxt_name.waitFor({ state: 'visible' })
            await this.project_txtBox.click()
            await this.project1_txtBox.fill(projectNumber)
            await this.ok_button.click()
            await this.page.waitForTimeout(2000);
            //await expect(this.project_label.textContent(),'Verify the Search ProjectNumber').toContain(projectNumber)
          })            
      }  

      async projectDelete()
          {
            await test.step("Delete the created project no", async()=>
               {
              await this.del_button.click()
              await this.delPopup1Yes_button.click()
              await this.delPopup2Yes_button.click()
              await this.page.waitForTimeout(2000);
              })
          }
          async projectReSearch(projectNumber)
          {
            await test.step("Research the created project no for no match results", async()=>
              {
              await this.project_dropdown3.click()
              await this.page.waitForLoadState("domcontentloaded");
              await this.userQueriesTxt_name.waitFor({ state: 'visible' })
              await this.project_txtBox.click()
              await this.project1_txtBox.fill(projectNumber)
              await this.ok_button.click()
              await this.page.waitForTimeout(2000);
              await expect(this.noResults_popup,'Verify the Search MachineNumber').toHaveText("No match!")
            })
          }     
              
    }

    
          
  
   



