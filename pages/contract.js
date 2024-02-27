import { test,expect } from '@playwright/test';
exports.ContractPage = class ContractPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[contains(@name,"title") and (text()="1 My Evatic")]')
        this.contract_dropdown1 = page.locator('//div[contains(@name,"title") and (text()="7 Contract")]')
        this.contract_dropdown2 = page.locator('//div[contains(@name,"title") and (text()="Contract")]')
        this.contract_dropdown3 = page.locator('//div[contains(@name,"title") and (text()="Contract search")]')
        this.customerNo_txtBox = page.locator('//div[@name="cmdHistory"]/following-sibling::div[2]/input')
        this.save_button = page.locator('//div[@name="btnSave"]')
        this.contract_label = page.locator('(//div[@name="MdiChildPage_frmContract"]/div)[1]')
        this.contractSearch_btn = page.locator('//div[@name="btnSearch"]')
        this.userQueriesTxt_name = page.locator('//div[@name="lblUserQueries"]')
        this.contract_txtBox = page.locator('input[name="cmbOperator"]')
        this.ok_button = page.locator('div[name="cmdOk"]')
        this.del_button = page.locator('//div[@name="btnDelete"]')
        this.delPopupYes_button = page.locator('//div[text()="OK"]')
        //this.noResults_popup = page.getByText('No match!')
        this.noResults_popup = page.locator('//div[@name="message"]')
        this.contract_label = page.locator('//div[@name="mdiClient"]/div/div/div/div/div[@name="MdiChildPage_frmContract"]/div[@name="label"]')
        this.closeX1_btn = page.locator('//div[@name="MessageBox"]/div/div[@name="close-button"]')
        this.closeX2_btn = page.locator('//div[@name="frmSearch"]/div/div[@name="close-button"]')
        this.contractWindowCloseX_btn = page.locator('//div[@name="MdiChildPage_frmContract"]/div[@name="close-button"]')
    }
    
    async contractCreation(CustomerNo)
     {
        await test.step("Navigate to the Contract Navigation & enter customerNo", async()=>
          {
            await this.page.waitForTimeout(2000)
            await this.myEvatic_dropdown.click()
            await this.contract_dropdown1.click()
            await this.contract_dropdown2.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.page.waitForTimeout(2000);
            await this.customerNo_txtBox.click()
            //await this.page.pause();
            await this.customerNo_txtBox.type(CustomerNo)
            await this.page.keyboard.press('Control+F3');
            //await this.page.getByText(CustomerNo, { exact: true }).first().click() //Note this step
            await this.page.getByRole('cell', { name: CustomerNo }).getByText(CustomerNo).click()
            //getByText('RajanCust001', { exact: true })
            await this.page.waitForTimeout(2000);
            await this.save_button.click();
            await this.page.waitForTimeout(2000);
            const contract = await this.contract_label.textContent();
            console.log('The new label created is ' + contract);
            const myArray = contract.split(" ");
            this.contractId = myArray[1]
            console.log('The new contractId created is ' + await this.contractId);
            await this.page.waitForTimeout(3000);
            
          })  

      }


      async contractSearch(contractId)
     {
        await test.step("Navigate to the Contracts search Navigation & enter contractId", async()=>
          {
            await this.contract_dropdown3.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.userQueriesTxt_name.waitFor({ state: 'visible' })
            await this.page.waitForTimeout(3000);
            await this.contract_txtBox.click()
            await this.contract_txtBox.fill(contractId)
            await this.ok_button.click()
            await this.page.waitForTimeout(2000);
            await expect(await this.contract_label.textContent(),'Verify the Search contractId').toContain(contractId);
            console.log('The contract No ' + contractId + 'is searched successfully');
            
          })  

      }


      async contractDelete(contractId)
          {
            await test.step("Delete the created contract Id", async()=>
               {
              await this.page.waitForTimeout(2000);
              await this.del_button.click()
              await this.delPopupYes_button.click()
              await this.page.waitForTimeout(3000);
              await expect(await this.contract_label.textContent(),'Verify the Search contractId').toContain('New contract');
              console.log('The contract No '+ contractId + ' is deleted successfully');
              })
          }
    

          async contractReSearch(contractId)
          {
            await test.step("Research the created contractId for no match results", async()=>
               {
                //await this.page.pause();
                await this.contract_dropdown3.click()
                await this.page.waitForLoadState("domcontentloaded");
                await this.userQueriesTxt_name.waitFor({ state: 'visible' })
                await this.page.waitForTimeout(3000);
                await this.contract_txtBox.click()
                await this.contract_txtBox.fill(contractId)
                await this.ok_button.click()
                await this.page.waitForTimeout(3000);
                await expect(this.noResults_popup,'Verify the Search contractId').toHaveText("No match!")
                console.log('The contractNumber ' + contractId + ' cannot be searched & does not exist');
                await this.page.waitForTimeout(2000);
                await this.closeX1_btn.click()
                await this.closeX2_btn.click()
                await this.page.waitForTimeout(2000);
                await this.contract_dropdown1.click()
                await this.contractWindowCloseX_btn.click()
            })
          }


  }

        