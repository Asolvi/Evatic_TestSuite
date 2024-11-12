import { test,expect } from '@playwright/test';
exports.StockAdminPage = class StockAdminPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[contains(@name,"title") and (text()="1 My Evatic")]')
        this.article_dropdown1 = page.locator('//div[contains(@name,"title") and (text()="3 Article")]')
        //this.stockAdmin_nav = page.locator('//div[@id="id_132"]')
        this.stockAdmin_nav = page.locator('//div[contains(@name,"title") and (text()="Stock Admin")]')

        //this.supplierNo_txtBox = page.locator('#id_1079 div').nth(1)
        //this.supplierNo_txtBox = page.locator('//input[contains(@type,"text") and contains(@name,"cmbSupplierNo_0")]')
        this.supplierNo_dropDown = page.locator('(//div[contains(@name,"button") and (@class="qx-combobox-button-inner")])[12]')


        //this.stockNo_txtBox = page.locator('#id_1099 div').nth(1)
        this.stockNo_txtBox = page.locator('(//div[contains(@name,"button") and (@class="qx-combobox-button-inner")])[3]')

        //this.stockNo1_txtBox = page.locator('#id_1291 div').nth(1)
        this.stockNo1_txtBox = page.locator('(//div[contains(@class,"qx-combobox-button-inner")])[14]')
        this.articleNo_txtBox = page.locator('(//div[@role="cell" and @col="2" and @row="0"])[1]')
        //this.print_btn = page.locator('#id_1142')
        this.print_btn = page.locator('//div[@name="cmdMakeOrder_1"]')

        this.quantityAvail_txtBox = page.locator('(//div[@role="cell" and @col="5" and @row="0"])[1]')
        this.costPrice_txtBox = page.locator('(//div[@role="cell" and @col="25" and @row="0"])[1]')
        this.existingOrders_tab = page.getByText('Existing orders')
        this.from_datePicker = page.locator('input[name="dtpDateFrom"]')
        this.undeliverOrders_checkBox = page.locator('(//div[@name="chkOnlyNotDelivered"]/div)[1]');
        //this.undeliverOrders_checkBox = page.locator('#id_1860 div').first();
        this.retriveData1_btn = page.locator('//div[@name="label" and text()="Retrieve data"]')
        this.order_tabColumn = page.locator('//div[@name="Order no" and @class="qx-table-header-cell-borderBoth-first-sortedAscending"]')
        this.order_tabColumn_sort = page.locator('//div[@name="Order no" and @class="qx-table-header-cell-borderBoth-first-sortedAscending"]')
        this.supplierOrderNum_txt = page.locator('(//div[@role="cell" and @col="1" and @row="0"])[1]')
        this.suppOrderNum_sel = page.locator('//div[@name="fcSplitter1"]/div[2]/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div/div/div[1]/div/div[@class="qx-table-row-header-content"]')
        this.quantityRec_txt = page.locator('(//div[@role="cell" and @col="8" and @row="0"])[3]')
        this.packingSlipNo_txt = page.locator('(//div[@role="cell" and @col="13" and @row="0"])[3]')
        this.costPriceCheck_txtBox = page.locator('(//div[@role="cell" and @col="27" and @row="0"])[2]')
        this.updateQuantity_btn = page.getByText('Update quantity')
        
        this.stockTaking_tab = page.getByText('Stock taking')
        this.stockArticleNo_txtbox = page.locator('input[name="cmbArticleNo_1"]')
        this.toner_checkBox = page.locator('(//div[@name="chkCostGroup_7"]/div)[1]')
        //this.retriveData_btn = page.locator('(//div[@name="label" and text()="Retrieve data"])[2]')
        this.retriveData_btn = page.locator('//div[@name="cmdInventoryList"]/div')
        //this.stockNo_drop = page.locator('(//div[contains(@name,"button") and (@class="qx-combobox-button-inner")])[25]')
        this.stockNo_drop = page.locator('//div[@name="cmbStockNo_0"]/div')
        this.supplier_popUp = page.locator('//div[@name="MessageBox"]')

        this.new_table = page.locator('//div[@name="grdInventoryList"]/div/div/div/div/div/div[2]/div[2]/div/div[@class="qx-row-container"]')

        this.internalMove_tab = page.getByText('Internal move')
        this.moveFrom_dropdown = page.locator('//div[@name="cmbMoveFromStock"]/div')
        this.moveTo_dropdown = page.locator('//div[@name="cmbMoveToStock"]/div')
        this.intMve_articleNo = page.locator('//div[@name="grdMove"]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div/div[@role="cell" and @col="2" and @row="0"]')
        this.intMve_quanToMve = page.locator('//div[@name="grdMove"]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div/div[@role="cell" and @col="7" and @row="0"]')
        this.intMve_moveArticlesBtn = page.locator('//div[@name="label" and text()="Move articles"]')
        this.intMve_articleDropDown = page.locator('//div[@name="drdArticleType"]/div')
        this.stockAdmin_closeBtn = page.locator('//div[@name="MdiChildPage_frmStockAdmin"]/div[@name="close-button"]')

    }
    
    async supplierOrder(supplierNo,stockNo,articleNumber,date)
     {
        await test.step("Navigate to the stock Admin Navigation & enter supplierNo,supplierName,Stock no", async()=>
          {            
            await this.myEvatic_dropdown.click()
            await this.article_dropdown1.click()
            await this.stockAdmin_nav.click()
            await this.page.waitForLoadState("domcontentloaded");
            //await this.supplierNo_txtBox.click()   
            await this.supplierNo_dropDown.click()
            await this.page.getByText(supplierNo).click()
            //await this.page.pause();
            await this.page.waitForTimeout(2000);
            await this.stockNo_txtBox.click();
            await this.page.waitForTimeout(5000);
            //await this.page.getByText(stockNo).first().click();
            await this.page.getByText(stockNo, { exact: true }).click()
          })  
           
          //Will not continue after this
           await test.step("Fill the ArticleNo,Stock details", async()=>
          {
            
            await this.articleNo_txtBox.click()
            await this.articleNo_txtBox.type(articleNumber)
            await this.page.keyboard.press('Control+F3');
            await this.page.getByText(articleNumber).first().click()
            await this.page.waitForTimeout(2000);
            await this.page.keyboard.press('Tab');
            await this.page.keyboard.press('Tab');
            await this.stockNo1_txtBox.click();
            //await this.page.pause();
            //await this.page.getByRole('cell', { name: stockNo }).getByText(stockNo).click()getByText('Main').nth(2)
            await this.page.getByRole('cell', { name: stockNo }).getByText(stockNo).click()
            //await this.page.getByText(stockNo).nth(2).click();
            await this.page.waitForTimeout(2000);

           })

           await test.step("Verify the quantity in stock & Cost price", async()=>
           {
            console.log('The quantity1 available created is ' + await this.quantityAvail_txtBox.textContent());
            const q = await this.quantityAvail_txtBox.textContent()
            var x = Number(q)
            console.log('The quantity2 available created is ' + x);
            
            console.log('The costprice1 available created is ' + await this.costPrice_txtBox.textContent());
            const costPrice = await this.costPrice_txtBox.textContent()
            var y = Number(costPrice)
            console.log('The costprice2 available created is ' + y);

            await expect.soft(x,'Verify the Count of quantity not equal to zero').not.toContainEqual(0);
            await expect.soft(y,'Verify the CostPrice is available').not.toEqual(0);
            await expect.soft(y,'Verify the CostPrice is available').not.toBeNull();
           })

            await test.step("Click the Print button for completing the Supplier order", async()=>
           {
            
            const [download] = await Promise.all
            ([
              this.page.waitForEvent('download'),
              this.print_btn.click()
              
            ])
            await download.saveAs('C:\Users\OdaAmundsen\OneDrive - Asolvi AS\Automation'+ download.suggestedFilename())
            await this.page.waitForTimeout(2000)
 
            })

            await test.step("Click the existing orders tab,fill the Supplier ID, put the date & filter the new supplier order", async()=>
            {
            
            //await this.page.pause();
            /*await this.myEvatic_dropdown.click()
            await this.article_dropdown1.click()
            await this.stockAdmin_nav.click()
            await this.page.waitForLoadState("domcontentloaded");*/
            await this.page.waitForTimeout(1000);
            await this.existingOrders_tab.click()
            await this.from_datePicker.click()
            await this.page.waitForTimeout(1000);
            await this.from_datePicker.clear()
            await this.page.waitForTimeout(3000);
            await this.from_datePicker.fill(date)
            await this.page.waitForTimeout(2000);
            await this.undeliverOrders_checkBox.click();
            await this.page.waitForTimeout(5000);
            await this.retriveData1_btn.click();
            await this.page.waitForTimeout(2000);
            await this.order_tabColumn.click();
            await this.order_tabColumn_sort.click();
            //await this.page.pause();
            await this.page.waitForTimeout(2000);
            console.log('The new supplier Order1 created is ' + await this.supplierOrderNum_txt.textContent());
            
          })     

      
    }

    async receiveSupplierOrder(supplierOrdNum,packingSlipNo)
    {
       await test.step("Select the Supplier Order & enter packing slip no,CostPrice,Quantity&update quantity", async()=>
         {
          await this.page.waitForTimeout(4000);
          //await this.page.pause();
          await this.suppOrderNum_sel.click();
          await this.packingSlipNo_txt.click();
          await this.page.waitForTimeout(2000);
          await this.packingSlipNo_txt.type(packingSlipNo)
          await this.page.keyboard.press('Tab');
          await this.page.keyboard.press('Tab');
          await this.page.waitForTimeout(2000);
          await this.updateQuantity_btn.click()
          await this.page.waitForTimeout(4000);
        })
    } 

    async stockTaking(articleNumber,ArticleDesc,NewQuan,StockNo1)
    {
       await test.step("Click the Stock Taking Tab & select Article no,Article Type,Stock No", async()=>
         {
          await this.page.waitForTimeout(2000);
          //await this.myEvatic_dropdown.click()
          //await this.article_dropdown1.click()
          await this.stockAdmin_nav.click()
          await this.page.waitForLoadState("domcontentloaded");
          await this.stockTaking_tab.click();
          await this.stockArticleNo_txtbox.click()
          //await this.stockArticleNo_txtbox.type(articleNumber)
          await this.stockArticleNo_txtbox.fill(articleNumber)
          //await this.page.locator('input[name="cmbArticleNo_1"]').click();
          //await this.page.locator('input[name="cmbArticleNo_1"]').fill('BLKTONER');

          await this.page.keyboard.press('Control+F3');
          await this.page.waitForTimeout(2000);
          //await this.page.getByText(articleNumber).first().click()
          await this.page.getByRole('cell', { name: articleNumber }).getByText(articleNumber).click();
          
          await this.page.waitForTimeout(2000);
          await this.toner_checkBox.click();
          await this.page.waitForTimeout(1000);
          
          await this.stockNo_drop.click();
          //await this.page.getByText(StockNo1).first().click()
          await this.page.getByRole('cell', { name: StockNo1 }).getByText(StockNo1).click();
          await this.page.waitForTimeout(2000);

          await this.retriveData_btn.click();
          await this.page.waitForTimeout(4000);
          //await this.page.pause();

          
        })


        await test.step("Verify the stock,Article type,Description in the table & update new quantity", async()=>
         {
          await this.page.waitForTimeout(4000);
          await this.custTableVerify(articleNumber,ArticleDesc,NewQuan,StockNo1)
         })
        
        }


        async internalMove(MoveFrm,MoveTo,ArticleNumber,QuanToMve)
        {
           await test.step("Click the Internal Move Tab & select Article no,Article Type,Stock No", async()=>
             {
              await this.page.waitForTimeout(2000);
              await this.internalMove_tab.click();
              //await this.page.pause();
              await this.page.waitForTimeout(4000);
              await this.moveFrom_dropdown.click();
              await this.page.getByRole('cell', { name: MoveFrm }).getByText(MoveFrm).click()
              await this.page.waitForTimeout(2000);
              await this.moveTo_dropdown.click();
              await this.page.getByRole('row', { name: MoveTo }).getByText(MoveTo).nth(1).click();
              await this.intMve_articleNo.click()
              await this.intMve_articleNo.type(ArticleNumber)
              await this.intMve_articleDropDown.click()
              await this.page.getByRole('cell', { name: ArticleNumber }).getByText(ArticleNumber).click();
              await this.page.waitForTimeout(4000);
              await this.intMve_quanToMve.click();
              await this.page.waitForTimeout(2000);
              await this.intMve_quanToMve.type(QuanToMve);
              await this.page.waitForTimeout(1000);
              const [download] = await Promise.all
              ([
                this.page.waitForEvent('download'),
                this.intMve_moveArticlesBtn.click()
                
              ])
              await download.saveAs('C:\Users\OdaAmundsen\OneDrive - Asolvi AS\Automation'+ download.suggestedFilename())
              await this.page.waitForTimeout(4000);
              await this.stockAdmin_closeBtn.click();
              
                 
            })
        }



         async custTableVerify(articleNumber,ArticleDesc,NewQuan,StockNo1)
          {
              const table = this.new_table  // note this everyrelease
                   
              const rows = table.locator("//div[@role='row']");
              //console.log(await rows.count());
              const cols = rows.first().locator("//div[@role='cell']")
              //console.log(await cols.count());
      
          for (let i = 0; i < await rows.count(); i++) 
          {
              const row = rows.nth(i);
              //console.log(row);
              const tds = row.locator("//div[@role='cell']");
              //console.log(tds);
               for (let j = 0; j < await cols.count(); j++) 
               {

                //console.log(await tds.nth(j).textContent());
                  if (await tds.nth(j).textContent() == StockNo1) 
                  {
                      //console.log(await tds.nth(2).textContent())
                      await this.page.waitForTimeout(5000);
                      await expect(tds.nth(0),'Verify the StockNo in the table').toContainText(StockNo1);
                      //await expect(tds.nth(1),'Verify the ArticleNo in the table').toContainText(articleNumber);
                      await expect(tds.nth(2),'Verify the Description in the table').toContainText(ArticleDesc);
                      console.log('The old quantity created is ' + await tds.nth(3).textContent());
                      await this.page.waitForTimeout(2000);
                      await tds.nth(4).click();
                      await tds.nth(4).type(NewQuan);
                      await this.page.waitForTimeout(2000);
                      await this.retriveData_btn.click();
                      await this.page.waitForTimeout(5000);
                      console.log('The new quantity created is ' + await tds.nth(3).textContent());
                      const nQuan = await tds.nth(3).textContent();
                      await this.page.waitForTimeout(2000);
                      await expect(nQuan,'Verify the new Quantity in the table').toEqual(NewQuan);
                      await this.page.waitForTimeout(2000);
                      let i = await rows.count();
                      break;                
                      
                  }
                  
                  
               }
      
          }
        }
          
        
    } 
    
   



