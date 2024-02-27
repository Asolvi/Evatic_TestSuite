import { test,expect } from '@playwright/test';
exports.ProjectPage = class ProjectPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[contains(@name,"title") and (text()="1 My Evatic")]')
        this.project_dropdown1 = page.locator('//div[contains(@name,"title") and (text()="6 Project")]')
        this.project_dropdown2 = page.locator('//div[contains(@name,"title") and (text()="Project")]')
        this.project_dropdown3 = page.locator('//div[contains(@name,"title") and (text()="Project search")]')
        this.machineNo_txtBox = page.locator('//div[@tabindex="69" and @name="cmbMachineNo_0"]/input[@name="cmbMachineNo_0"]')
        //this.machineNo_txtBox = page.locator('//input[@name="cmbMachineNo_0"]')
        this.close_btn = page.locator('//div[@name="cmdBack"]/div[text()="Close"]')
        this.save_btn = page.locator('//div[@name="btnSave"]')
        this.ok1_btn = page.locator('//div[@name="ok"]')
        this.yes_btn = page.locator('//div[@name="yes"]')
        this.yes1_btn = page.locator('//div[@name="cmdYes"]')
        this.project_label = page.locator('(//div[@name="MdiChildPage_frmProjectDetails"])[1]')
        this.userQueriesTxt_name = page.locator('//div[@name="lblUserQueries"]')
        //this.project_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="0" and @style="left:173px;width:156px;z-index:9999"]')                                     
        this.project_txtBox = page.locator('input[name="cmbOperator"]')
        //this.project_txtBox = page.locator('input[name="cmbOperator"]')
        this.ok_button = page.locator('div[name="cmdOk"]')
        this.del_button = page.locator('//div[@name="btnDelete"]')
        this.delPopup1Yes_button = page.locator('//div[@name="ok"]')
        this.delPopup2Yes_button = page.locator('//div[@name="ok"]')
        //this.noResults_popup = page.getByText('No match!')
        this.noResults_popup = page.locator('//div[@name="message"]')
        this.closeX1_btn = page.locator('//div[@name="MessageBox"]/div/div[@name="close-button"]')
        this.closeX2_btn = page.locator('//div[@name="frmSearch"]/div/div[@name="close-button"]')
        this.custNo_txtBox = page.locator('//div[@name="leftSideFrame"]/div[2]/div[20]/input[@name="cmbCustomerNo"]')
        this.createProject_btn = page.locator('//div[@name="cmdProject"]')
        this.machine_tab = page.locator('//div[@name="tabProject2"]/div[@name="bar"]/div[@name="scrollpane"]/div[@name="content"]/div[@name="panTab2"]/div[@name="label"]')
        this.macNo_txtBox = page.locator('//div[@tabindex="69" and @name="cmbMachineNo_0"]/input[@name="cmbMachineNo_0"]')
        this.solution_tab = page.locator('//div[@name="tabProject2"]/div[@name="bar"]/div[@name="scrollpane"]/div[@name="content"]/div[@name="panTab4"]/div[@name="label"]')
        this.preOrder_tab = page.locator('//div[@name="label" and text()="  Pre-Order  "]')
        this.supplierOrder_tab = page.locator('//div[@name="label" and text()="  Supplier order  "]')
        this.tasks_tab = page.locator('//div[@name="tabProject2"]/div[@name="bar"]/div[@name="scrollpane"]/div[@name="content"]/div[@name="panTab3"]/div[@name="label"]')
        this.tech_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="0" and @style="left:100px;width:46px;z-index:9999"]')                                     
        //this.tech_txtBox = page.locator('input[name="drdTechnician"]')                                     
        this.status_txtBox = page.locator('//div[@role="cell" and @col="5" and @row="0" and @style="left:366px;width:100px;z-index:9996"]') 
        //this.prjct_label = page.locator('//div[@name="mdiClient"]/div/div/div/div/div[@name="MdiChildPage_frmProject"]/div[@name="label"]')
        this.projectWindowCloseX_btn = page.locator('//div[@name="MdiChildPage_frmProjectDetails"]/div[@name="close-button"]')
        this.label = page.locator('//div[@name="lblBottom"]')
        this.yes3_btn = page.locator('//div[@name="label" and text()="Yes"]')
        this.preOrderArticle_dropDown = page.locator('//div[@name="grdPreOrder"]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div/div[2]')
        this.preOrderArticle_txtBox = page.locator('//input[@name="drdArticle"]')
        this.preOrderStockNo_dropDown = page.locator('//div[@name="grdPreOrder"]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div/div[@role="cell" and @col="9" and @row="0"]/div')
        this.preOrderStockNo_txtBox = page.locator('//input[@name="drdStock"]')
        this.preOrderStockNo_comboBox = page.locator('//div[@name="drdStock"]/div/div')
        this.orderLine_select = page.locator('//div[@name="grdPreOrder"]/div/div/div/div/div[1]/div[1]/div[2]/div/div/div/div[@role="cell" and @col="0" and @row="0"]/div')
        this.suppOrderLine_select = page.locator('//div[@name="grdSupplierOrder"]/div/div/div/div/div/div[1]/div[2]/div/div/div/div[@role="cell" and @col="0" and @row="0"]/div')
        this.projectNo_check = page.locator('//div[@name="cmbProjectNo"]/input')
        this.add2Supplier_label = page.locator('//div[@class="qx-menu-placementBelow-placementRight"]/div/div[text()="Add to supplier proposal"]')
        this.openSupplierOrder_label = page.locator('//div[@class="qx-menu-placementBelow-placementRight"]/div/div[text() = "Open supplier order"]')
        //this.preOrderArticle_dropDown1 = page.locator('//div[@owner="grdGrid" and @opener="Article no"]/div')
        this.preOrderArticle_dropDown1 = page.locator('//div[@owner="grdGrid" and @name="drdArticle"]/div')
        this.orderProposal_select = page.locator('//div[@name="grdSupOrderProp"]/div/div/div/div/div/div[1]/div[2]/div/div/div/div/div')
        this.print_btn = page.locator('//div[@name="cmdMakeOrder_1"]')
        this.generateProposal_btn = page.locator('//div[@name="cmdGenerateOrderProp"]//div[text()="Generate order proposal"]')

        this.existingOrders_tab = page.getByText('Existing orders')
        this.from_datePicker = page.locator('input[name="dtpDateFrom"]')
        this.undeliverOrders_checkBox = page.locator('(//div[@name="chkOnlyNotDelivered"]/div)[1]');
        this.retriveData1_btn = page.locator('//div[@name="label" and text()="Retrieve data"]')
        this.order_tabColumn = page.locator('//div[@name="Order no" and @class="qx-table-header-cell-borderBoth-first-sortedAscending"]')
        this.order_tabColumn_sort = page.locator('//div[@name="Order no" and @class="qx-table-header-cell-borderBoth-first-sortedAscending"]')
        this.supplierOrderNum_txt = page.locator('(//div[@role="cell" and @col="1" and @row="0"])[1]')
        this.suppOrderNum_sel = page.locator('//div[@name="fcSplitter1"]/div[2]/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div/div/div[1]/div/div[@class="qx-table-row-header-content"]')
        this.packingSlipNo_txt = page.locator('//div[@name="grdOrderLines"]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div/div[@role="cell" and @col="13"and @row="0"]/div')
        this.costPriceCheck_txtBox = page.locator('(//div[@role="cell" and @col="27" and @row="0"])[2]')
        this.updateQuantity_btn = page.getByText('Update quantity')
        this.stockPage_CloseBtn = page.locator('//div[@name="MdiChildPage_frmStockAdmin"]/div[@name="close-button"]')
        this.projectPage_CloseBtn = page.locator('//div[@name="MdiChildPage_frmProjectDetails"]/div[@name="close-button"]')
        this.customerCall_CloseBtn = page.locator('//div[@name="MdiChildPage_frmCustomerCall"]/div[@name="close-button"]')
        this.dept_Value = page.locator('//div[@name="grdSearch"]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div[@role="row" and @row="2"]/div[@role="cell" and @col="2" and @row="2"]/div')
        this.status_Value = page.locator('//div[@name="grdSearch"]/div/div/div/div/div[1]/div[2]/div[2]/div/div/div[@role="row" and @row="1"]/div[@role="cell" and @col="2"]/div/div')
        this.recordsCount_value = page.locator('//div[@name="lblRecords"]')
        this.recordsCount_CloseBtn = page.locator('//div[@name="MdiChildPage_frmQueryResult"]/div[@name="close-button"]')
    }
    
    async projectCreation(machineNo)
     {
        await test.step("Navigate to the Project Module Navigation & enter Machine no & save button", async()=>
          {
            await this.page.waitForTimeout(3000);
            await this.myEvatic_dropdown.click()
            await this.project_dropdown1.click()
            await this.project_dropdown2.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.page.waitForTimeout(3000);
            //await this.machineTxt_name.waitFor({ state: 'visible' })
            await this.machineNo_txtBox.click()
            await this.machineNo_txtBox.fill(machineNo)
            await this.page.keyboard.press('Control+F3');
            await this.page.getByText(machineNo).first().click()   
            await this.page.waitForTimeout(4000);
            await this.close_btn.click()
            await this.page.waitForTimeout(2000);
            //await this.ok1_btn.click();
            await this.save_btn.click()
            /*await this.yes_btn.click();
            await this.save_btn.click()*/
            await this.page.waitForTimeout(6000);
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
            await this.page.waitForTimeout(3000);
            await this.project_txtBox.click()
            await this.project_txtBox.fill(projectNumber)
            await this.ok_button.click()
            await this.page.waitForTimeout(2000);
            await expect(await this.project_label.textContent(),'Verify the Search ProjectNo').toContain(projectNumber);
            console.log('The project No ' + projectNumber + 'is searched successfully');
            
            
          })            
      }  

      async projectDelete(projectNumber)
          {
            await test.step("Delete the created project no", async()=>
               {
              await this.del_button.click()
              await this.delPopup1Yes_button.click()
              await this.delPopup2Yes_button.click()
              await this.page.waitForTimeout(3000);
              await expect(await this.project_label.textContent(),'Verify the Search ProjectNo').toContain('New project');
              console.log('The project No '+ projectNumber + ' is deleted successfully');
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
              await this.project_txtBox.fill(projectNumber)
              
              //await this.page.pause()
              await this.page.waitForTimeout(2000);
              await this.status_Value.dblclick();
              await this.page.waitForTimeout(2000);
              await this.page.keyboard.press('Delete');
              
              await this.page.waitForTimeout(1000);
              await this.dept_Value.dblclick();
              await this.page.waitForTimeout(1000);
              await this.page.keyboard.press('Delete');
              

              await this.ok_button.click()
              await this.page.waitForTimeout(2000);
              //await this.page.pause()
              const P = await this.noResults_popup.isVisible()
              console.log('The noResults lable visible is ' + P);
                
                  if (P)
                  {
                    await expect(this.noResults_popup,'Verify the Search ProjectNumber').toHaveText("No match!")
                    console.log('The ProjectNumber ' + projectNumber + ' cannot be searched & does not exist');
                    await this.closeX1_btn.click()
                    await this.closeX2_btn.click()
                    await this.projectWindowCloseX_btn.click()
                  } 
                  else
                  {
                      await this.page.waitForTimeout(2000);
                      console.log('The total number of records present is '+await this.recordsCount_value.textContent()); 
                      await expect(await this.recordsCount_value.textContent(),'Verify the Search ProjectNumber').toContain("2")
                      console.log('2 Records are present for the searched project number '+ projectNumber);
                      await this.page.waitForTimeout(2000)
                      await this.recordsCount_CloseBtn.click()
                      await this.page.waitForTimeout(1000)
                      await this.project_dropdown1.click()

                  }
              
              
              

            })
          }     


          async projectCustomerCall(CustNo,machineNo)
          {
            await test.step("click button F6 & enter the details for project creation", async()=>
              {
                //await this.myEvatic_dropdown.click()
                await this.page.keyboard.press('F6');
                await this.page.waitForTimeout(2000)
                //await this.page.pause()  
                await this.custNo_txtBox.click()
                await this.custNo_txtBox.fill(CustNo)
                await this.custNo_txtBox.press('Control+F3');
                //await this.page.getByText(CustNo).first().click()   
                await this.page.getByText(CustNo, { exact: true }).click();
                await this.createProject_btn.click()
                await this.page.waitForTimeout(5000);
                //await this.page.pause()
                await this.machine_tab.click()
                await this.macNo_txtBox.click()
                await this.macNo_txtBox.fill(machineNo)
                await this.page.keyboard.press('Control+F3');
                await this.page.getByText(machineNo).first().click()
                await this.page.waitForTimeout(3000);
                await this.close_btn.click()
                await this.save_btn.click()
                await this.page.waitForTimeout(3000);
                const projName = await this.project_label.textContent();
                //console.log('The new label created is ' + projName);
                const myArray = projName.split(" ");
                const project = myArray[1].split(":");
                this.projectNo = project[0]
                console.log('The new projectId1 created from customer call is ' + await this.projectNo);
                await this.page.waitForTimeout(3000);

                
            })
          }


          async projectAssignTechnician(Technician)
          {
            await test.step("Assign the project to technician", async()=>
              {
                await this.page.waitForTimeout(2000);
                await this.solution_tab.click()
                await this.tech_txtBox.click()
                //await this.page.pause()
                await this.tech_txtBox.type(Technician)
                await this.page.keyboard.press('Control+F3');
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('row', { name: 'RJ Rajan Jeyaraj' }).getByRole('cell', { name: 'RJ' }).locator('div').first().click()
                //await this.tech_txtBox.nth(1).click();
                //await this.page.getByText(Technician, { exact: true }).click();
                await this.page.keyboard.press('Tab');
                await this.page.keyboard.press('Tab');
                await this.page.keyboard.press('Tab');
                await this.page.waitForTimeout(2000);
                await this.save_btn.click()
                await this.page.waitForTimeout(2000);
                //await this.page.pause()
                const P = await this.label.isVisible()
                console.log('The lable visible is ' + P);
                
                  if (P)
                  {
                    await this.yes3_btn.click()
                  } 
                await expect(this.status_txtBox,'Verify the status of project').toHaveText("Assigned")
                await this.page.waitForTimeout(5000);
                //await this.page.pause()
                await this.projectPage_CloseBtn.click()
                await this.customerCall_CloseBtn.click()
                await this.page.waitForTimeout(2000);
                //await this.page.pause()
                await this.project_dropdown1.click()
                await this.myEvatic_dropdown.click()
                await this.page.waitForTimeout(2000);
                
                
                
            })
          }

          async projectDelete(projectNumber)
          {
            await test.step("Delete the created project no", async()=>
               {
              await this.del_button.click()
              await this.delPopup1Yes_button.click()
              await this.delPopup2Yes_button.click()
              await this.page.waitForTimeout(3000);
              await expect(await this.project_label.textContent(),'Verify the Search ProjectNo').toContain('New project');
              console.log('The project No '+ projectNumber + ' is deleted successfully');
              })
          }  


          async generateAPartRequest(machineNo,custNo,technician,articleNo,stock)
          {
            await test.step("Generate a Part request & print order", async()=>
               {
                await this.projectCreation(machineNo)                    
                await this.page.waitForTimeout(2000);
                await this.solution_tab.click()
                await this.tech_txtBox.click()
                //await this.page.pause()
                await this.tech_txtBox.type(technician)
                await this.page.keyboard.press('Control+F3');
                await this.page.waitForTimeout(2000);
                await this.page.getByRole('row', { name: 'RJ Rajan Jeyaraj' }).getByRole('cell', { name: 'RJ' }).locator('div').first().click()
                //await this.tech_txtBox.nth(1).click();
                //await this.page.getByText(Technician, { exact: true }).click();
                await this.page.keyboard.press('Tab');
                await this.page.keyboard.press('Tab');
                await this.page.keyboard.press('Tab');
                await this.page.waitForTimeout(2000);
                await this.save_btn.click()
                await this.page.waitForTimeout(2000);
                //await this.page.pause()
                const P = await this.label.isVisible()
                console.log('The lable visible is ' + P);
                
                  if (P)
                  {
                    await this.yes3_btn.click()
                  } 
                await expect(this.status_txtBox,'Verify the status of project').toHaveText("Assigned")
                await this.page.waitForTimeout(5000);
                //await this.page.pause()
                await this.tasks_tab.click();
                await this.page.waitForTimeout(2000)
                await this.preOrder_tab.click();
                await this.page.waitForTimeout(2000)
                //await this.page.pause()
                await this.preOrderArticle_dropDown.click()
                await this.preOrderArticle_txtBox.click()
                await this.preOrderArticle_txtBox.fill(articleNo)
                await this.preOrderArticle_dropDown1.click()
                await this.page.keyboard.press('Control+F3');
                await this.page.getByText(articleNo, { exact: true }).click()  
                await this.page.waitForTimeout(2000);
                await this.preOrderStockNo_dropDown.click()
                await this.preOrderStockNo_txtBox.click()
                await this.preOrderStockNo_txtBox.fill(stock)
                await this.page.waitForTimeout(2000);
                await this.preOrderStockNo_comboBox.click()
                await this.page.getByRole('cell', { name: stock }).getByText(stock).click()  
                await this.page.waitForTimeout(2000);
                await this.save_btn.click()
                await this.page.waitForTimeout(3000);                              
              })      


          
            await test.step("Click the line & add to supplier order", async()=>
               {
                await this.orderLine_select.click()
                //await this.page.pause()
                await this.page.waitForTimeout(3000)
                await this.orderLine_select.click({button:'right'})
                await this.page.waitForTimeout(3000)
                await this.page.keyboard.press('ArrowDown');  
                await this.page.waitForTimeout(3000) 
                await this.add2Supplier_label.click()
                await this.page.waitForTimeout(5000) 
              })
          

              await test.step("Click the supplier Order & add to order proposal", async()=>
              {
               await this.page.waitForTimeout(2000)
               await this.supplierOrder_tab.click()
               await this.page.waitForTimeout(2000)
               await this.suppOrderLine_select.click()
               await this.page.waitForTimeout(2000) 
               //await this.page.pause()
               await this.suppOrderLine_select.click({button:'right'})
               await this.page.waitForTimeout(2000);
               await this.page.keyboard.press('ArrowDown');  
               await this.page.waitForTimeout(3000) 
               await this.openSupplierOrder_label.click()
               await this.page.waitForTimeout(3000);
               
             })


             await test.step("Click the Order Proposal Line & click the generate proposal & click the print button", async()=>
             {
              //await this.page.pause()
              await this.orderProposal_select.click();        
              await this.page.waitForTimeout(2000);   
              await this.generateProposal_btn.click();
              await this.page.waitForTimeout(2000)
              await this.orderProposal_select.click();  
              await this.page.waitForTimeout(2000);  
              const [download] = await Promise.all
              ([
                this.page.waitForEvent('download'),
                this.print_btn.click()
                                
              ])
              
              await download.saveAs('C:/Users/RajanJeyaraj/OneDrive - Asolvi AS/Rajan/Rajan/Projects/04.EvaticAutomation-Collide/downloadedFiles/Project1'+ download.suggestedFilename())
              await this.page.waitForTimeout(3000);     
              //await this.page.pause()             

              //await expect(await this.projectNo_check,'Verify the Project Number for the order').toContain('4');   
              
            })           
        }

        async addressPartRequest(date,packingSlipNo)
        {
                    await test.step("Click the existing orders tab,select the Supplier Order & enter packing slip no,CostPrice,Quantity&update quantity", async()=>
                    {
                    
                    await this.page.waitForTimeout(2000);
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
                    //await this.page.pause()
                    await this.stockPage_CloseBtn.click()
                    await this.page.waitForTimeout(2000);
                    await this.projectPage_CloseBtn.click()
                    await this.page.waitForTimeout(2000);         
                  })


                  await test.step("Research the project & check 2 rows are present", async()=>
                  {
                    await this.projectReSearch(this.projectNo)
      
                })
                  
      }
    }

    
          
  
   



