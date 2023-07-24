import { test,expect } from '@playwright/test';
exports.OrderPage = class OrderPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[@id="id_119"]')
        this.order_dropdown1 = page.locator('//div[@id="id_224"]')
        this.order_dropdown2 = page.locator('//div[@id="id_228"]')
        this.order_dropdown3 = page.locator('//div[@id="id_244"]')
        this.customerNo_txtBox = page.locator('input[name="cmbCustomerNo"]')
        this.machineNo_txtBox = page.locator('input[name="cmbMachineNo_0"]')
        this.save_btn = page.locator('//div[@id="id_99"]')
        this.articleNo_txtBox = page.locator('input[name="drdArticle"]')
        this.order_label = page.locator('(//div[@name="MdiChildPage_frmOrder"])[1]')
        this.userQueriesTxt_name = page.locator('//div[@name="lblUserQueries"]')
        this.order_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="0" and @style="left:173px;width:156px;z-index:9999"]')                                     
        this.order1_txtBox = page.locator('input[name="cmbOperator"]')
        
        this.ok_button = page.locator('div[name="cmdOk"]')
        this.del_button = page.locator('#id_101').getByRole('img')
        this.delPopup1Yes_button = page.locator('//div[@name="ok"]')
        //this.delPopup2Yes_button = page.getByText('OK')
        this.noResults_popup = page.getByText('No match!')
        
    }
    
    async orderCreation(customerNo,machineNo)
     {
        await test.step("Navigate to the Order Module Navigation & enter Customer No,Machine no & save button", async()=>
          {
            await this.myEvatic_dropdown.click()
            await this.order_dropdown1.click()
            await this.order_dropdown2.click()
            await this.page.waitForLoadState("domcontentloaded");
            //await this.machineTxt_name.waitFor({ state: 'visible' })
            await this.customerNo_txtBox.click()
            await this.customerNo_txtBox.fill(customerNo)
            await this.page.keyboard.press('Control+F3');
            await this.page.getByText(customerNo).first().click()
            await this.page.keyboard.press('Tab');   
            await this.machineNo_txtBox.click()
            await this.machineNo_txtBox.fill(machineNo)
            await this.page.keyboard.press('Control+F3');
            await this.page.getByText(machineNo).first().click()
            await this.page.keyboard.press('Tab'); 
            await this.save_btn.click()
            await this.page.waitForTimeout(6000);
            //await this.page.pause();
            const ordName = await this.order_label.textContent();
            console.log('The new label created is ' + ordName);
            //const myArray = projName.split(" ");
            const myArray = ordName.split(" ");
            this.orderNo = myArray[1]
            console.log('The new order1 created is ' + await this.orderNo);
            //await this.page.pause();
            await this.page.waitForTimeout(3000);
                        
           })   
          } 


    async orderSearch(orderNumber)
        {
       await test.step("Navigate to the Order Search Page & enter Order No,Click OK button", async()=>
         {
            await this.order_dropdown3.click()
            //await this.page.pause();
            await this.userQueriesTxt_name.waitFor({ state: 'visible' })
            //await this.order_txtBox.click()
            await this.order1_txtBox.fill(orderNumber)
            await this.ok_button.click()
            await this.page.waitForTimeout(5000);
            const ordName = await this.order_label.textContent();
            console.log('The new label created is ' + ordName);
            //const myArray = projName.split(" ");
            const myArray = ordName.split(" ");
            this.orderNo = myArray[1]
            console.log('The new order1 created is ' + await this.orderNo);
            await expect(this.orderNo,'Verify the Search order').toContain(orderNumber)
          })            
      }  


      async orderDelete()
          {
            await test.step("Delete the created order no", async()=>
               {
              await this.del_button.click()
              //await this.page.pause();
              await this.delPopup1Yes_button.click()
              //await this.delPopup2Yes_button.click()
              await this.page.waitForTimeout(2000);
              })
          }

          async orderReSearch(orderNumber)
          {
            await test.step("Research the created order no for no match results", async()=>
              {
              await this.order_dropdown3.click();
              await this.page.waitForTimeout(2000);
              await this.page.waitForLoadState("domcontentloaded");
              await this.userQueriesTxt_name.waitFor({ state: 'visible' })
              //await this.project_txtBox.click()
              await this.order1_txtBox.fill(orderNumber)
              await this.ok_button.click()
              await this.page.waitForTimeout(2000);
              await expect(this.noResults_popup,'Verify the Search OrderNumber').toHaveText("No match!")
            })
          }     

               
          }     
              
  

    
          
  
   



