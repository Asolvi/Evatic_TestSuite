import { test,expect } from '@playwright/test';
exports.SalesProjectPage = class SalesProjectPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[@id="id_119"]')
        this.salesManTools_dropdown1 = page.locator('//div[@id="id_293"]')
        this.salesProject_nav = page.locator('//div[@id="id_305"]')
        this.customerNo_txtBox = page.locator('//input[@name="cmbCustomerNo"]')
        this.save_button = page.locator('#id_99').getByRole('img')
        this.calculations_tab = page.getByText('Calculations')
        this.salesProject_label = page.locator('(//div[@name="MdiChildPage_frmSaleProject"]/div)[1]')
        this.salesProjectSearch_btn = page.locator('//div[@id="id_96"]')
        //this.salesProjectSearchName_header = page.getByText('Name', { exact: true })
        this.salesProjectSearchName_header1 = page.locator('#id_1130').getByText('Name', { exact: true })
        this.salesProjectSearchName_header2 = page.locator('#id_1207').getByText('Name', { exact: true })
        this.salesProject_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="3" and @style="left:173px;width:156px;z-index:9999"]')                                     
        this.salesProject1_txtBox = page.locator('input[name="cmbOperator"]')
        this.ok_button = page.locator('div[name="cmdOk"]')
        this.del_button = page.locator('#id_101').getByRole('img')
        this.delPopupYes_button = page.locator('//div[@name="yes"]')
        this.noResults_popup = page.getByText('No match!')


    }
    
    async salesProjectCreation(CustomerNo)
     {
        await test.step("Navigate to the sales Project Navigation & enter customerNo", async()=>
          {
            await this.myEvatic_dropdown.click()
            await this.salesManTools_dropdown1.click()
            await this.salesProject_nav.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.page.waitForTimeout(2000);
            await this.customerNo_txtBox.click()
            await this.customerNo_txtBox.type(CustomerNo)
            await this.page.keyboard.press('Control+F3');
            await this.page.getByText(CustomerNo).first().click()
            await this.page.waitForTimeout(2000);
            await this.save_button.click();
            await this.page.waitForTimeout(2000);
            await this.calculations_tab.click();
            const salesProjName = await this.salesProject_label.textContent();
            console.log('The new label created is ' + salesProjName);
            const myArray = salesProjName.split(" ");
            this.salesProjectId = myArray[2]
            console.log('The new SalesProjectId created is ' + await this.salesProjectId);
            await this.page.waitForTimeout(3000);
            //await this.page.pause();
          })  

      }


      async salesProjectSearch(salesProjectId)
     {
        await test.step("Navigate to the sales Project search Navigation & enter salesProjectId", async()=>
          {
           /*await this.myEvatic_dropdown.click()
            await this.salesManTools_dropdown1.click()
            await this.salesProject_nav.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.page.waitForTimeout(4000);*/
            await this.salesProjectSearch_btn.click()
            await this.page.waitForTimeout(4000);
            await this.salesProjectSearchName_header1.click();
            await this.salesProjectSearchName_header1.click();
            await this.page.waitForTimeout(3000);
            //await this.page.pause();
            await this.salesProject_txtBox.click()
            await this.salesProject1_txtBox.fill(salesProjectId)
            await this.ok_button.click()
            await this.page.waitForTimeout(4000);
            
          })  

      }


      async salesProjectDelete()
          {
            await test.step("Delete the created salesProject no", async()=>
               {
              //await this.page.pause();
              await this.del_button.click()
              await this.delPopupYes_button.click()
              await this.page.waitForTimeout(2000);
              })
          }
    

          async salesProjectReSearch(salesProjectId)
          {
            await test.step("Research the created salesProjectId for no match results", async()=>
               {
                //await this.page.pause();
                await this.page.waitForTimeout(4000);
                await this.salesProjectSearch_btn.click()
                await this.salesProjectSearchName_header2.click();
                await this.salesProjectSearchName_header2.click();
                await this.page.waitForTimeout(3000);
                //await this.page.pause();
                await this.salesProject_txtBox.click()
                await this.salesProject1_txtBox.fill(salesProjectId)
                await this.ok_button.click()
                await this.page.waitForTimeout(2000);
                await expect(this.noResults_popup,'Verify the Search salesProjectId').toHaveText("No match!")
            })
          }


  }

        