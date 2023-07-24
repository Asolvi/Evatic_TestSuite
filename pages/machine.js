import { test,expect } from '@playwright/test';
exports.MachinePage = class MachinePage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[@id="id_119"]')
        this.machine_dropdown1 = page.locator('//div[@id="id_260"]')
        this.machine_dropdown2 = page.locator('//div[@id="id_264"]')
        this.machine_dropdown3 = page.locator('//div[@id="id_284"]')
        this.modelTxt_name = page.getByText('Model:')
        this.machineNo_txtBox = page.locator('input[name="txtMachineNo"]');           
        this.modelNo_txtBox = page.locator('#id_1314 div').nth(1)
        this.customerNo_txtBox = page.locator('input[name="cmbCustomerNo"]')
        this.save_btn = page.locator('//div[@id="id_99"]')    
        this.userQueriesTxt_name = page.locator('//div[@name="lblUserQueries"]')
        this.machine_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="1" and @style="left:173px;width:156px;z-index:9999"]/div')                                     
        this.machine1_txtBox = page.locator('input[name="cmbOperator"]')
        this.ok_button = page.locator('div[name="cmdOk"]')  
        this.machineNameHeader_txtcheck = page.locator('/html/body/div[2]/div[2]/div/div/div/div[5]/div[1]/div[2]/div/div/div/div/div/div/div[1]/div/div[17]/input')                 
        this.del_button = page.locator('#id_101').getByRole('img')
        this.delPopupYes_button = page.locator('//div[@name="yes"]')
        this.noResults_popup = page.getByText('No match!')
    }
    
    async machineCreation(machineNo,modelNo,customerNo)
     {
        await test.step("Navigate to the Machine Module Navigation & enter Machine,Model,Customer no", async()=>
          {
            await this.myEvatic_dropdown.click()
            await this.machine_dropdown1.click()
            await this.machine_dropdown2.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.modelTxt_name.waitFor({ state: 'visible' })
            await this.machineNo_txtBox.click()
            await this.machineNo_txtBox.fill(machineNo)
            await this.modelNo_txtBox.click()
            await this.page.getByText(modelNo).click()
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
            //await this.page.pause();
          })            
      }  
          async machineDelete()
          {
            await test.step("Delete the created machine no", async()=>
               {
              await this.del_button.click()
              await this.delPopupYes_button.click()
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
            })
          }
  
   }



