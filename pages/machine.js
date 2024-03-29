import { test,expect } from '@playwright/test';
exports.MachinePage = class MachinePage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[contains(@name,"title") and (text()="1 My Evatic")]')
        this.machine_dropdown1 = page.locator('//div[contains(@name,"title") and contains(text(),"5 Machine")]')
        this.machine_dropdown2 = page.locator('//div[contains(@name,"title") and (text()="Machine")]')
        this.machine_dropdown3 = page.locator('//div[contains(@name,"title") and (text()="Machine search")]')
        this.modelTxt_name = page.getByText('Model:')
        this.machineNo_txtBox = page.locator('input[name="txtMachineNo"]');           
        //this.modelNo_txtBox = page.locator('#id_1315 div').nth(1)
        this.modelNo_txtBox = page.locator('input[name="cmbModel"]')
        this.modelNo_dropDown = page.locator('//div[@name="cmbModel"]/div')
                
        this.customerNo_txtBox = page.locator('input[name="cmbCustomerNo"]')
        this.save_btn = page.locator('//div[@name="btnSave"]')    
        this.userQueriesTxt_name = page.locator('//div[@name="lblUserQueries"]')
        this.machine_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="1" and @style="left:173px;width:156px;z-index:9999"]/div')                                     
        this.machine1_txtBox = page.locator('input[name="cmbOperator"]')
        this.ok_button = page.locator('div[name="cmdOk"]')  
        this.machineNameHeader_txtcheck = page.locator('/html/body/div[2]/div[2]/div/div/div/div[5]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div[17]/input')                 
        this.del_button = page.locator('//div[@name="btnDelete"]')
        this.delPopupYes_button = page.locator('//div[@name="yes"]')
        //this.noResults_popup = page.getByText('No match!')
        this.noResults_popup = page.locator('//div[@name="message"]')
        this.machine_label = page.locator('//div[@name="mdiClient"]/div/div/div/div/div[@name="MdiChildPage_frmMachine"]/div[@name="label"]')
        this.closeX1_btn = page.locator('//div[@name="MessageBox"]/div/div[@name="close-button"]')
        this.closeX2_btn = page.locator('//div[@name="frmSearch"]/div/div[@name="close-button"]')
        this.machineWindowCloseX_btn = page.locator('//div[@name="MdiChildPage_frmMachine"]/div[@name="close-button"]')
    }
    
    async machineCreation(machineNo,modelNo,customerNo)
     {
        await test.step("Navigate to the Machine Module Navigation & enter Machine,Model,Customer no", async()=>
          {
            //await this.myEvatic_dropdown.click()
            await this.machine_dropdown1.click()
            await this.machine_dropdown2.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.modelTxt_name.waitFor({ state: 'visible' })
            await this.machineNo_txtBox.click()
            await this.machineNo_txtBox.fill(machineNo)
            await this.page.waitForTimeout(3000)
            //await this.page.pause()
            await this.modelNo_txtBox.click()
            await this.modelNo_dropDown.click();
            //await this.page.getByText(modelNo).click()
            await this.page.getByRole('cell', { name: modelNo }).getByText(modelNo).click();
            await this.customerNo_txtBox.click()
            await this.customerNo_txtBox.fill(customerNo)   
           })            
            

      await test.step("Click the Save Button & extract the Machine no", async()=>
        {
            await this.page.keyboard.press('Control+F3');
            await this.page.getByText(customerNo).first().click()
            await this.save_btn.click(); 
            await this.page.waitForTimeout(2000);
            this.machineNumber = machineNo;
            console.log('The created machineId is ' + await this.machineNumber);

      })
   
    }

    async machineSearch(machineNumber)
    {
       await test.step("Navigate to the Machine Search Page & enter Machine No,Click OK button", async()=>
         {
            await this.machine_dropdown3.click() 
            await this.page.waitForLoadState("domcontentloaded");
            await this.userQueriesTxt_name.waitFor({ state: 'visible' })
            await this.page.waitForTimeout(4000)
            await this.machine_txtBox.click()
            await this.machine1_txtBox.fill(machineNumber)
            await this.ok_button.click()
            await expect(await this.machine_label.textContent(),'Verify the Search MachineNo').toContain(machineNumber);
            console.log('The machine No ' + machineNumber + 'is searched successfully');
            
          })            
      }  
          async machineDelete(machineNumber)
          {
            await test.step("Delete the created machine no", async()=>
               {
              await this.del_button.click()
              await this.delPopupYes_button.click()
              await this.page.waitForTimeout(3000)
              await expect(await this.machine_label.textContent(),'Verify the Search MachineNo').toContain('New machine');
              console.log('The machineNumber No '+ machineNumber + ' is deleted successfully');
            })
          }
          async machineReSearch(machineNumber)
          {
            await test.step("Research the created machine no for no match results", async()=>
               {
                //await this.page.pause();
                await this.machine_dropdown3.click() 
                await this.page.waitForLoadState("domcontentloaded");
                await this.userQueriesTxt_name.waitFor({ state: 'visible' })
                await this.page.waitForTimeout(2000)
                await this.machine_txtBox.click()
                await this.machine1_txtBox.fill(machineNumber)
                await this.ok_button.click()
                await expect(this.noResults_popup,'Verify the Search MachineNumber').toHaveText("No match!")
                console.log('The machineNumber ' + machineNumber + ' cannot be searched & does not exist');
                await this.closeX1_btn.click()
                await this.closeX2_btn.click()
                await this.page.waitForTimeout(3000)
                await this.machine_dropdown1.click()
                await this.machineWindowCloseX_btn.click()
            })
          }
  
   }



