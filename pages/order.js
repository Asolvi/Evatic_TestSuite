import { test,expect } from '@playwright/test';
exports.OrderPage = class OrderPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[contains(@name,"title") and (text()="1 My Evatic")]')
        this.order_dropdown1 = page.locator('//div[contains(@name,"title") and contains(text(),"8 Order")]')
        this.order_dropdown2 = page.locator('//div[contains(@name,"title") and (text()="Order")]')
        this.order_dropdown3 = page.locator('//div[contains(@name,"title") and (text()="Order search")]')
        this.packSlipOverView_dropdown = page.locator('//div[contains(@name,"title") and (text()="Packing slip overview")]')
        this.completeAndPrint_dropdown = page.locator('//div[contains(@name,"title") and (text()="Complete & Print")]')

        this.customerNo_txtBox = page.locator('input[name="cmbCustomerNo"]')
        this.customerNo_txtBox = page.locator('//div[@tabindex="1" and @name="cmbCustomerNo"]//input[@name="cmbCustomerNo"]')
        this.machineNo_txtBox = page.locator('input[name="cmbMachineNo_0"]')
        this.save_btn = page.locator('//div[@name="btnSave"]')
        this.articleNo_txtBox = page.locator('input[name="drdArticle"]')
        this.order_label = page.locator('(//div[@name="MdiChildPage_frmOrder"])[1]')
        this.userQueriesTxt_name = page.locator('//div[@name="lblUserQueries"]')
        this.order_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="0" and @style="left:173px;width:156px;z-index:9999"]')                                     
        this.order1_txtBox = page.locator('input[name="cmbOperator"]')
        
        this.ok_button = page.locator('div[name="cmdOk"]')
        this.del_button = page.locator('//div[@name="btnDelete"]')
        this.delPopup1Yes_button = page.locator('//div[@name="ok"]')
        //this.delPopup2Yes_button = page.getByText('OK')
        //this.noResults_popup = page.getByText('No match!')
        this.noResults_popup = page.locator('//div[@name="message"]')
        this.closePopUp_btn = page.locator('//div[@name="MessageBox"]/div/div[@name="close-button"]')        
        this.closeX2_btn = page.locator('//div[@name="frmSearch"]/div/div[@name="close-button"]')

        this.closeX1_btn = page.locator('//div[@name="mdiTabView"]/div[1]/div[1]/div/div[2]//div[@name="close-button"]')
        this.closeX3_btn = page.locator('//div[@name="MdiChildPage_frmStockAdmin"]/div[@name="close-button"]')
        this.closeX5_btn = page.locator('.qx-window-captionbar-modal-active > div > div')
        
        this.article_dropDown = page.locator('input[name="drdArticle"]')
        //this.stock_txtBox = page.locator('//div[@role="cell" and @col="10" and @row="0" and @class="qx-cell qx-table-cell-even-borderBoth"]') 
        this.stock_txtBox = page.locator('//div[@name="grdOrderLine"]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[@role="cell" and @col="10" and @row="0"]') 
        this.stock_dropDown = page.locator('input[name="drdStock"]')

        this.stock1_txtBox = page.locator('//div[@name="cmbStockNo_2"]/input')
        this.stock1_dropDown = page.locator('//div[@name="cmbStockNo_2"]/div/div')

        this.serialNum_txtBox = page.locator('//div[@name="grdOrderLine"]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div[@role="cell" and @col="4" and @row="0"]') 
        this.serialNum_dropDown = page.locator('//div[@name="drdSerialNo"]/div[2]/div')

        this.priOrdCon_chkBox = page.locator('//div[@name="chkPrintOrderConfirmation_0"]')

        this.makeSuppOrd_chkBox = page.locator('//div[@name="chkMakeSupplierOrder"]')
        this.ok_button1 = page.locator('//div[@name="cmdOk"]')
        //this.closeX_button = page.locator('.qx-window-captionbar-maximized-modal-active > div > div').first()
        this.closeX_button = page.locator('.qx-window-captionbar-modal-active > div:nth-child(2) > div')
        this.delivery_tab = page.locator('//div[@name="label" and (text()="  Delivery  ")]')
        this.packingSlip_button = page.locator('//div[@name="cmdDeliveryList"]/div[@name="label" and text()="Packing slip"]')
        this.closeOrder_button = page.locator('//div[@name="MdiChildPage_frmOrder"]/div[@name="close-button"]')
        this.completeOrder_chkBox = page.locator('//div[@name="optOrderAction_1"]')
        this.invoices_tab = page.locator('//div[@name="panTabTop_6"]//div[@name="label" and (text()="  Invoices  ")]')
        this.orderStatus = page.locator('//div[@role="cell" and @col="3" and @row="0" and @style="left:200px;width:100px;z-index:9998"]') 
        this.order_label = page.locator('//div[@name="mdiClient"]/div/div/div/div/div[@name="MdiChildPage_frmOrder"]/div[@name="label"]')
        this.orderWindowCloseX_btn = page.locator('//div[@name="MdiChildPage_frmOrder"]/div[@name="close-button"]')

        
        this.supplierNo_txtBox = page.locator('//div[@name="cmbSupplierNo_0"]/input')
        this.supplierNo_dropdown = page.locator('//div[@name="cmbSupplierNo_0"]/div/div')
        this.generateProposal_btn = page.locator('//div[@name="cmdGenerateOrderProp"]//div[text()="Generate order proposal"]')

        this.selectArticle_line = page.locator('//div[@name="grdSupOrderProp"]/div/div/div/div/div/div[1]/div[2]/div/div/div/div[@role="cell" and @col="0" and @row="0" and @style="left:0px;width:20px;z-index:10000"]')
        this.print_icon = page.locator('//div[@name="cmdMakeOrder_1"]')

        this.existingOrders_tab = page.getByText('Existing orders')
        this.from_datePicker = page.locator('input[name="dtpDateFrom"]')
        this.undeliverOrders_checkBox = page.locator('(//div[@name="chkOnlyNotDelivered"]/div)[1]');
        this.retriveData1_btn = page.locator('//div[@name="label" and text()="Retrieve data"]')
        this.order_tabColumn = page.locator('//div[@name="Order no" and @class="qx-table-header-cell-borderBoth-first-sortedAscending"]')
        this.order_tabColumn_sort = page.locator('//div[@name="Order no" and @class="qx-table-header-cell-borderBoth-first-sortedAscending"]')

        this.supplierOrderNum_txt = page.locator('(//div[@role="cell" and @col="1" and @row="0"])[1]')
        this.suppOrderNum_sel = page.locator('//div[@name="fcSplitter1"]/div[2]/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div/div/div[1]/div/div[@class="qx-table-row-header-content"]')
        this.quantityRec_txt = page.locator('(//div[@role="cell" and @col="8" and @row="0"])[3]')
        this.packingSlipNo_txt = page.locator('(//div[@role="cell" and @col="13" and @row="0"])[4]')
        this.costPriceCheck_txtBox = page.locator('(//div[@role="cell" and @col="27" and @row="0"])[2]')
        this.updateQuantity_btn = page.getByText('Update quantity')
        this.OrdNo_txtBox = page.locator('//div[@name="txtOrderNo"]//input[@name="txtOrderNo"]')
        this.retrive_btn = page.locator('//div[@name="cmdGetData"]//div[text()="Retrieve"]')
        this.OrderNumberPresence = page.locator('//div[@role="cell" and @col="8" and @row="0" and @style="left:866px;width:100px;z-index:9993"]/div/div')
        this.selectOrder_line = page.locator('//div[@role="cell" and @row="0" and @col="0"]/div')
        this.setStatusPick_label = page.locator('//div[@class="qx-menu-placementBelow-placementRight"]/div/div[text()="Set status picked"]')

        this.orderFrom_txtBox = page.locator('//div[@name="txtOrderFrom"]/input[@name="txtOrderFrom"]')
        this.orderTo_txtBox = page.locator('//div[@name="txtOrderTo"]/input[@name="txtOrderTo"]')
        this.retrieveOrders_btn = page.locator('//div[@name="cmdGetData"]/div[text()="Retrieve orders"]')
        this.selectOrder1_line = page.locator('//div[@name="splitterTreeHeading"]/div[3]/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div')
        this.completeAndPrint_btn = page.locator('//div[@name="cmdPrintSelected"]/div[text()="Complete & print order(s)"]')
        this.printOrderOk_btn = page.locator('//div[@name="label" and text()="OK"]')

        this.completeAndPrint_CloseBtn = page.locator('//div[@name="MdiChildPage_frmOrderPrint"]/div[@name="close-button"]')
        this.packingSlip_CloseBtn = page.locator('//div[@name="MdiChildPage_frmOrderPackingSlipOverview"]/div[@name="close-button"]')
                
    }
    
    async orderCreation(customerNo,machineNo)
     {
        await test.step("Navigate to the Order Module Navigation & enter Customer No,Machine no & save button", async()=>
          {
            await this.page.waitForTimeout(4000)
            await this.myEvatic_dropdown.click()
            await this.order_dropdown1.click()
            await this.order_dropdown2.click()
            await this.page.waitForLoadState("domcontentloaded");
            //await this.page.pause();
            //await this.machineTxt_name.waitFor({ state: 'visible' })
            await this.customerNo_txtBox.click()
            await this.customerNo_txtBox.fill(customerNo)
            await this.page.keyboard.press('Control+F3');
            await this.page.getByText(customerNo, { exact: true }).click()
            //await this.page.getByText(customerNo).first().click()
            await this.page.keyboard.press('Tab');   
            await this.machineNo_txtBox.click()
            await this.machineNo_txtBox.fill(machineNo)
            await this.page.keyboard.press('Control+F3');
            await this.page.getByText(machineNo).first().click()
            await this.page.keyboard.press('Tab'); 
            await this.save_btn.click()
            await this.page.waitForTimeout(4000);
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
            await this.page.waitForTimeout(2000)
            await this.order_dropdown3.click()
            //await this.page.pause();
            await this.userQueriesTxt_name.waitFor({ state: 'visible' })
            //await this.order_txtBox.click()
            await this.order1_txtBox.fill(orderNumber)
            await this.ok_button.click()
            await this.page.waitForTimeout(5000);
            const ordName = await this.order_label.textContent();
            console.log('The new label created is ' + ordName);
            await this.page.waitForTimeout(2000);
            //const myArray = projName.split(" ");
            const myArray = ordName.split(" ");
            this.orderNo = myArray[1]
            console.log('The new order1 created is ' + await this.orderNo);
            await expect(this.orderNo,'Verify the Search order').toContain(orderNumber)
            await expect(await this.order_label.textContent(),'Verify the Search OrderNo').toContain(orderNumber);
            console.log('The order No ' + orderNumber + 'is searched successfully');
          })            
      }  


      async orderDelete(orderNumber)
          {
            await test.step("Delete the created order no", async()=>
               {
              await this.del_button.click()
              await this.page.waitForTimeout(1000);
              await this.delPopup1Yes_button.click()
              await this.page.waitForTimeout(1000);
              //await this.page.pause()
              await this.page.waitForTimeout(12000);
              await expect(await this.order_label.textContent(),'Verify the Search OrderNo').toContain('New order');
              console.log('The orderNumber No '+ orderNumber + ' is deleted successfully');
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
              console.log('The orderNumber ' + orderNumber + ' cannot be searched & does not exist');
              //await this.closeX_btn.click()
              await this.closePopUp_btn.click()
              await this.closeX2_btn.click()
              await this.page.waitForTimeout(2000);
              //await this.order_dropdown1.click()
              //await this.page.pause();
            })
          }     


          async deliverAndInvoiceArticle(customerNo,machineNo,articleNumber,stockNo,serialNum,serialNumInd)
          {
             await test.step("Navigate to the Order Module Navigation & enter Customer No,Machine no & save button", 
             async()=>
               {
                //await this.page.pause()
                
                await this.page.waitForTimeout(2000);
                await this.order_dropdown1.click()
                await this.page.waitForTimeout(2000);
                await this.myEvatic_dropdown.click()
                await this.orderCreation(customerNo,machineNo)                 
                 await this.page.waitForTimeout(3000);
                 await this.article_dropDown.click()
                 await this.article_dropDown.fill(articleNumber)
                 //await this.page.pause()
                 await this.page.keyboard.press('Control+F3');
                 await this.page.getByRole('cell', { name: articleNumber }).getByText(articleNumber).click();
                 //await this.page.getByText(articleNumber).first().click()
                 await this.page.keyboard.press('Tab'); 
                 //await this.page.pause()
                 await this.stock_txtBox.click()
                 await this.stock_dropDown.click()
                 await this.stock_dropDown.fill(stockNo)
                 await this.page.keyboard.press('Tab'); 
                 //await this.page.pause()
                 //await expect(this.page.locator('//div[@role="cell" and @col="77" and @row="0"]/div')).toContainText('red');
                 await this.page.waitForTimeout(3000);
                 console.log("Checkpoint 0")

                 if(serialNumInd == "S")
                   {
                 
                        await this.serialNum_txtBox.click()
                        await this.serialNum_dropDown.click()
                        await this.page.getByText("RAW003").click()
                    }

                  const ordName = await this.order_label.textContent();
                  console.log('The new label created is ' + ordName);
                  const myArray = ordName.split(" ");
                  this.orderNo1 = myArray[1]
                  console.log('The new order1 created is ' + await this.orderNo);
                  await this.page.waitForTimeout(3000);
                 await this.save_btn.click()
                 await this.page.waitForTimeout(6000)
                 
                  

                 if(serialNumInd == "I")
                   {
                          await this.priOrdCon_chkBox.click()
                          console.log("Checkpoint2")
                   }
              
                   if(serialNumInd == "M")
                   {
                          await this.makeSuppOrd_chkBox.click()
                          console.log("Checkpoint3")
                          //await this.page.pause();
                          
                   }
                  
                 await this.page.waitForTimeout(2000)
                 await this.ok_button1.click()             
                 await this.page.waitForTimeout(8000)

                 
                 if(serialNumInd == "I")
                   {
                      await this.closeX5_btn.click();
                      console.log("Checkpoint4")
                    
                   }
                      
                   if(serialNumInd == "I" || serialNumInd == "S")
                   {
                    await this.delivery_tab.click()
                    const [download] = await Promise.all
                    ([
                      this.page.waitForEvent('download'),
                      this.packingSlip_button.click()
                      
                    ])
                    //const path = download.suggestedFilename();
                    await download.saveAs('C:/Users/OdaAmundsen/OneDrive - Asolvi AS\Automation'+ download.suggestedFilename())
                    await this.page.waitForTimeout(2000);   
                                  
                    await this.page.waitForTimeout(4000)
                    await this.closeOrder_button.click()
                    await this.page.waitForTimeout(2000)
                    await this.orderSearch(this.orderNo)
                    await this.save_btn.click()
                    await this.completeOrder_chkBox.click()
                    await this.page.waitForTimeout(2000)
                    await this.ok_button1.click()
                    //await this.page.pause()
                    await this.page.waitForTimeout(2000)
                    await this.orderSearch(this.orderNo)
                    await this.invoices_tab.click()
                    await this.page.waitForTimeout(2000)
                    await expect(this.orderStatus,'Verify the status of order').toHaveText("F")
                    await this.page.waitForTimeout(2000)
                    //await this.order_dropdown1.click()
                    await this.orderWindowCloseX_btn.click()
                    await this.page.waitForTimeout(2000)
                   }            
                           
                })   
               } 


          async generateOrderProposal(suppNo,stockNo,date)
               {
                 await test.step("Click the Generate Proposal & click the print icon", async()=>
                    {
                      await this.supplierNo_txtBox.click()
                      await this.supplierNo_txtBox.fill(suppNo)
                      await this.supplierNo_dropdown.click()
                      await this.page.keyboard.press('Tab');
                      //await this.page.keyboard.press('Tab');
                      /*await this.supplierNo_dropdown.click()
                      await this.page.getByText(suppNo).click()*/

                      await this.stock1_txtBox.click()
                      await this.stock1_dropDown.type(stockNo)
                      await this.stock1_dropDown.click()
                      await this.page.keyboard.press('Tab');
                      await this.page.waitForTimeout(2000)

                      await this.generateProposal_btn.click();
                      await this.page.waitForTimeout(2000)
                      //await this.page.pause()
                      await this.selectArticle_line.click()
                      await this.page.waitForTimeout(2000)
                      //await this.page.pause()

                      const [download] = await Promise.all
                      ([
                        this.page.waitForEvent('download'),
                        this.print_icon.click()
                        
                      ])
                      //const path = download.suggestedFilename();
                      await download.saveAs('C:/Users/OdaAmundsen/OneDrive - Asolvi AS\Automation'+ download.suggestedFilename())
                      //await testInfo.attach('downloaded',{path:path})
                      await this.page.waitForTimeout(2000);   
                                 
                      
                      //await this.print_icon.click()
                      
                  
                      await this.page.waitForTimeout(2000)

                   })       
           
             


        await test.step("Click the existing orders tab,fill the Supplier ID, put the date & filter the new supplier order", async()=>
            {
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
            await this.page.waitForTimeout(2000);
            
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
          await this.page.waitForTimeout(1000);
          await this.page.keyboard.press('Tab');
          await this.page.waitForTimeout(1000);
          await this.page.keyboard.press('Tab');
          await this.page.waitForTimeout(2000);
          await this.updateQuantity_btn.click()
          await this.page.waitForTimeout(4000);
          //await this.page.pause()
          await this.closeX3_btn.click()
          await this.closeX1_btn.click()
          await this.page.waitForTimeout(2000);
        })
    } 
     
    
    async clickPackingSlip(orderNumber)
    {
      await test.step("Click the Packing Slip no", async()=>
         {
          await this.orderSearch(orderNumber)
          //await this.page.pause()
          await this.delivery_tab.click()
          const [download] = await Promise.all
          ([
            this.page.waitForEvent('download'),
            this.packingSlip_button.click()
            
          ])
          await download.saveAs('C:/Users/OdaAmundsen/OneDrive - Asolvi AS\Automation'+ download.suggestedFilename())
          
          
          await this.page.waitForTimeout(8000)
          await this.closeOrder_button.click()
        })
    }


    async packagingSlipOverView(orderNumber)
    {
      await test.step("Select the Packing Slip no", async()=>
         {
          await this.packSlipOverView_dropdown.click()
          await this.page.waitForTimeout(2000)
          await this.OrdNo_txtBox.click()
          await this.OrdNo_txtBox.fill(orderNumber)
          await this.retrive_btn.click()
          await this.page.waitForTimeout(2000)
          console.log (await this.OrderNumberPresence.textContent())
          await expect(await this.OrderNumberPresence.textContent(),'Verify the presence of Order in table').toContain(orderNumber)
          await this.page.waitForTimeout(2000)
          //await this.page.pause()
          await this.selectOrder_line.click()
          await this.page.waitForTimeout(1000)
          await this.selectOrder_line.click({button:'right'})
          await this.page.keyboard.press('ArrowDown'); 
          await this.setStatusPick_label.click()
          await this.page.waitForTimeout(2000);
          await this.packingSlip_CloseBtn.click();
        })
    }

    async completeAndPrint(orderNumber)
    {
      await test.step("Complete & Print Order and check the status of the order", async()=>
         {
          await this.completeAndPrint_dropdown.click()
          await this.page.waitForTimeout(2000);
          await this.orderFrom_txtBox.click()
          await this.orderFrom_txtBox.fill(orderNumber)
          await this.page.waitForTimeout(1000);
          await this.orderTo_txtBox.click()
          await this.orderTo_txtBox.fill(orderNumber)
          await this.page.waitForTimeout(1000);
          await this.retrieveOrders_btn.click()
          await this.page.waitForTimeout(1000);
          //await this.page.pause()
          await this.selectOrder1_line.click()
          await this.page.waitForTimeout(1000);
          await this.completeAndPrint_btn.click()
          await this.page.waitForTimeout(3000);

          const [download] = await Promise.all
          ([
            this.page.waitForEvent('download'),
            this.printOrderOk_btn.click()
            
          ])
          await download.saveAs('C:/Users/OdaAmundsen/OneDrive - Asolvi AS\Automation'+ download.suggestedFilename())

          
          await this.page.waitForTimeout(2000);
          await this.completeAndPrint_CloseBtn.click();
          await this.orderSearch(orderNumber)
          await this.invoices_tab.click()
          await this.page.waitForTimeout(2000)
          await expect(this.orderStatus,'Verify the status of order').toHaveText("FP")
          await this.page.waitForTimeout(2000)

        })
    }

          
  
  }     
              
  

    
          
  
   



