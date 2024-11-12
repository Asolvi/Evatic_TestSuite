import { test,expect } from '@playwright/test';
exports.SalesProjectPage = class SalesProjectPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[contains(@name,"title") and (text()="1 My Evatic")]')
        this.salesManTools_dropdown1 = page.locator('//div[contains(@name,"title") and (text()="2 Salesman Tools")]')
        this.salesProject_nav = page.locator('//div[contains(@name,"title") and (text()="Sales project")]')
        this.customerNo_txtBox = page.locator('//div[@name="cboProbability"]/following-sibling::div[1]/input')
        this.save_button = page.locator('//div[@name="btnSave"]')
        this.calculations_tab = page.getByText('Calculations')
        //this.salesProject_label = page.locator('(//div[@name="MdiChildPage_frmSaleProject"]/div)[1]')
        this.salesProjectSearch_btn = page.locator('//div[@name="btnSearch"]')
        //this.salesProjectSearchName_header = page.getByText('Name', { exact: true })
        this.salesProjectSearchName_header1 = page.locator('//div[@name="Sorting"]/preceding-sibling::div[2]/div')
        //this.salesProjectSearchName_header1 = page.locator('#id_1130').getByText('Name', { exact: true })
        //this.salesProjectSearchName_header2 = page.locator('#id_1207').getByText('Name', { exact: true })
        this.salesProject_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="3" and @style="left:173px;width:156px;z-index:9999"]')                                     
        this.salesProject1_txtBox = page.locator('input[name="cmbOperator"]')
        this.ok_button = page.locator('div[name="cmdOk"]')
        this.del_button = page.locator('//div[@name="btnDelete"]')
        this.delPopupYes_button = page.locator('//div[@name="yes"]')
        //this.noResults_popup = page.getByText('No match!')
        this.noResults_popup = page.locator('//div[@name="message"]')
        this.salesProject_label = page.locator('//div[@name="mdiClient"]/div/div/div/div/div[@name="MdiChildPage_frmSaleProject"]/div[@name="label"]')
        this.closeX1_btn = page.locator('//div[@name="MessageBox"]/div/div[@name="close-button"]')
        this.closeX2_btn = page.locator('//div[@name="frmSearch"]/div/div[@name="close-button"]')
        this.salesProjectWindowCloseX_btn = page.locator('//div[@name="MdiChildPage_frmSaleProject"]/div[@name="close-button"]')
        //this.openArea = page.locator('//*[@id="id_785"]')
        this.openArea = page.locator('//div[@name="tabSaleProject"]/div[2]/div[2]/div/div/div/div/div/div/div/div/div/div[2]/div[2]')
        this.newCalc_label = page.locator('//div[@class="qx-menu-placementBelow-placementRight"]/div/div[text()="New calculation"]')
        this.calcType_dropdown = page.locator('//div[@name="cmbCalcType"]/div[@name="button"]')
        this.salesMan_dropdown = page.locator('//div[@name="cmbSalesmanCode"]/div[@name="button"]')
        this.articleNo_txtBox = page.locator('//div[@class="qx-row qx-table-row-focused-selected-even-borderBoth-new"]/div[3]/div')
        this.articleNo1_txtBox = page.locator('input[name="drdArticle"]')
        this.calculations_tab = page.getByText('Calculations')
        this.contract_tab = page.locator('//div[@name="panTab3"]/div[text()="  Contract  "]')
        this.articleRow_select = page.locator('//div[@name="grdOrderLine"]/div/div/div/div/div[1]/div[1]/div[2]/div/div/div[1]/div/div')
        this.articleRow1_select = page.locator('//div[@name="panTab4"]/div/div/div/div/div/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div')
        this.contractTemplate_dropdown = page.locator('//div[@name="cmbTemplateType"]/div/div')
        this.modelNo_select = page.locator('//div[@name="grdContractMachines"]/div[1]/div/div/div/div[1]/div[1]/div[2]/div/div/div/div/div')
        this.ppeuPrice_black = page.locator('//div[@role="cell" and @row="0" and @col="12"]/div')
        this.ppeuPrice_color = page.locator('//div[@role="cell" and @row="1" and @col="12"]/div')
        this.calculationWindowCloseX_btn = page.locator('//div[@name="MdiChildPage_frmSaleProjectCalc"]/div[@name="close-button"]')
        this.approveGenerate_btn = page.locator('//div[@name="cmdFinish"]')
        this.salesProject_status = page.locator('//div[@role="cell" and @col="5" and @row="0"]')
        this.yes_btn = page.getByText('Yes')
        this.details_tab = page.locator('//div[@name="tabCalc"]/div/div/div/div[6]/div[text()="  Data generated  "]')
        this.dataGenerated_txtBox = page.locator('//input[@name="txtDateGenerated"]')
        this.contractNum_txtBox = page.locator('//input[@name="txtContractNo"]')
        this.orderNum_txtBox = page.locator('//input[@name="txtOrderNo"]')
        this.leasingSupplier_dropdown = page.locator('//div[@name="cmbLeasingCompany"]/div/div')
        this.leasingFactor_dropdown = page.locator('//div[@name="cmbSupplierFactor"]/div/div')
        
        

        


    }
    
    async salesProjectCreation(CustomerNo)
     {
        await test.step("Navigate to the sales Project Navigation & enter customerNo", async()=>
          {
            await this.page.waitForTimeout(3000)
            await this.myEvatic_dropdown.click()
            await this.salesManTools_dropdown1.click()
            await this.salesProject_nav.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.page.waitForTimeout(2000);
            //await this.page.pause();
            await this.customerNo_txtBox.click()
            await this.customerNo_txtBox.type(CustomerNo)
            await this.page.keyboard.press('Control+F3');
            await this.page.getByRole('cell', { name: CustomerNo }).getByText(CustomerNo).click()
            //await this.page.getByText(CustomerNo, { exact: true }).first().click() //Note this step
            //getByText('RajanCust001', { exact: true })
            await this.page.waitForTimeout(2000);
            await this.save_button.click();
            await this.page.waitForTimeout(5000);
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
            await this.myEvatic_dropdown.click()
            await this.salesManTools_dropdown1.click()
            await this.salesProject_nav.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.page.waitForTimeout(4000);
            await this.salesProjectSearch_btn.click()
            await this.page.waitForTimeout(4000);
            await this.salesProjectSearchName_header1.click();
            await this.salesProjectSearchName_header1.click();
            await this.page.waitForTimeout(3000);
            await this.salesProject_txtBox.click()
            await this.salesProject1_txtBox.fill(salesProjectId)
            await this.ok_button.click()
            await this.page.waitForTimeout(4000);
            await expect(await this.salesProject_label.textContent(),'Verify the Search salesProjectId').toContain(salesProjectId);
            console.log('The salesProject No ' + salesProjectId + 'is searched successfully');
            
            
          })  

      }


      async salesProjectDelete(salesProjectId)
          {
            await test.step("Delete the created salesProject no", async()=>
               {
              //await this.page.pause();
              await this.del_button.click()
              await this.delPopupYes_button.click()
              await this.page.waitForTimeout(3000);
              await expect(await this.salesProject_label.textContent(),'Verify the Search salesProjectId').toContain('New sales project');
              console.log('The salesProject No '+ salesProjectId + ' is deleted successfully');
              })
          }
    

          async salesProjectReSearch(salesProjectId)
          {
            await test.step("Research the created salesProjectId for no match results", async()=>
               {
                //await this.page.pause();
                await this.page.waitForTimeout(4000);
                await this.salesProjectSearch_btn.click()
                await this.salesProjectSearchName_header1.click();
                await this.salesProjectSearchName_header1.click();
                await this.page.waitForTimeout(3000);
                //await this.page.pause();
                await this.salesProject_txtBox.click()
                await this.salesProject1_txtBox.fill(salesProjectId)
                await this.ok_button.click()
                await this.page.waitForTimeout(2000);
                await expect(this.noResults_popup,'Verify the Search salesProjectId').toHaveText("No match!")
                console.log('The salesProjectNo ' + salesProjectId + ' cannot be searched & does not exist');
                await this.page.waitForTimeout(2000);
                await this.closeX1_btn.click()
                await this.closeX2_btn.click()
                await this.page.waitForTimeout(2000);
                await this.salesProjectWindowCloseX_btn.click()
            })
          }

          async salesProjectGenerateCalc(SalesCalcType,CalculationType,SalesMan,ArticleNo,ContractTemplate,ppeublack,ppeucolor,Supplier,Factor)
          {
            await test.step("Click the calculation tab & generate the sales", async()=>
               {
                await this.page.waitForTimeout(2000);
                await this.openArea.click({button:'right'})
                await this.page.waitForTimeout(2000);
                await this.page.keyboard.press('ArrowDown');  
                await this.page.waitForTimeout(2000);              
                await this.newCalc_label.click()
                await this.page.waitForTimeout(2000);
                await this.calcType_dropdown.click()
                await this.page.getByText(CalculationType).first().click()
                //await this.salesMan_dropdown.click()
                //await this.page.getByText(SalesMan).first().click()
                
                if(SalesCalcType == '002')
                {
                await this.save_button.click()
                await this.page.waitForTimeout(2000);
                await this.leasingSupplier_dropdown.click()
                await this.page.getByText(Supplier).first().click()
                await this.page.waitForTimeout(2000);
                await this.leasingFactor_dropdown.click()
                await this.page.waitForSelector(`text=${Factor}`);
                await this.page.waitForTimeout(2000);             
                await this.page.getByText(Factor).first().click()
                await this.page.waitForTimeout(2000);
                }
                
                await this.save_button.click()
                await this.page.waitForTimeout(5000);
                //await this.page.pause()
                await this.articleNo_txtBox.click();
                await this.articleNo1_txtBox.click();
                await this.articleNo1_txtBox.fill(ArticleNo);
                await this.page.keyboard.press('Control+F3');
                await this.page.keyboard.press('Tab');
                await this.save_button.click()
                //await this.page.pause();
                await this.page.waitForTimeout(5000);
                await this.articleRow_select.click();
                await this.contract_tab.click()
                await this.contractTemplate_dropdown.click()
                await this.page.getByText(ContractTemplate).first().click()
                await this.save_button.click()
                //await this.page.pause();
                await this.page.waitForTimeout(5000);
                await this.modelNo_select.click()
                await this.page.waitForTimeout(2000);
                await this.ppeuPrice_black.click()
                await this.ppeuPrice_black.type(ppeublack)
                await this.page.waitForTimeout(4000);
                await this.ppeuPrice_color.click()
                await this.ppeuPrice_color.type(ppeucolor)
                await this.page.waitForTimeout(2000);
                await this.page.keyboard.press('Tab');
                await this.page.waitForTimeout(2000);
                await this.calculationWindowCloseX_btn.click()
                await this.yes_btn.click();
                await this.page.waitForTimeout(2000);

            })
          

          await test.step("Approve the sales Calculation & check the status", async()=>
          {
           
            await this.page.waitForTimeout(3000);
            await this.articleRow1_select.click();
            await this.page.waitForTimeout(3000);
            await this.approveGenerate_btn.click()
           await this.page.waitForTimeout(5000); 
           await expect(await this.salesProject_status.textContent(),'Verify the Search ArticleName').toContain('A');     
           await this.salesProject_status.dblclick();  

       })

       await test.step("Click the sales Calculation & details tab & check the timestamp", async()=>
          {
           
            await this.page.waitForTimeout(3000);
            await this.details_tab.click();
            await this.page.waitForTimeout(3000);
            //await this.page.pause();  
            await expect(await this.dataGenerated_txtBox.textContent(),'Verify the data generated timestamp').not.toBeNull()
            await expect(await this.contractNum_txtBox.textContent(),'Verify the data generated contract number').not.toBeNull()
            await expect(await this.orderNum_txtBox.textContent(),'Verify the data generated orderNumber').not.toBeNull()
            await this.page.waitForTimeout(2000);
            await this.calculationWindowCloseX_btn.click()
            await this.page.waitForTimeout(2000);
            await this.salesProjectWindowCloseX_btn.click()
            //await this.salesManTools_dropdown1.click()
            await this.myEvatic_dropdown.click()
            
              

       })
     }
    
  }

        