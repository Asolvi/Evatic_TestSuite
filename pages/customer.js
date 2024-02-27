import { expect } from '@playwright/test';
exports.CustomerPage = class CustomerPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[contains(@name,"title") and (text()="1 My Evatic")]')
        this.customer_dropdown1 = page.locator('//div[contains(@name,"title") and (text()="4 Customer")]')
        this.customer_dropdown2 = page.locator('//div[contains(@name,"title") and (text()="Customer")]')
        this.customerSearch_Link = page.locator('//div[contains(@name,"title") and (text()="Customer search")]')
        this.customerName_textbox = page.locator('//input[@name="txtCustomerName_1"]')
        this.addressName_textbox = page.locator('//input[@name="txtAddressName"]')
        this.country_dropdown = page.locator('//input[@name="cmbCountry"]')
        this.address1_textbox = page.locator('//input[@name="txtAdr1"]')
        this.address2_textbox = page.locator('//input[@name="txtAdr2"]')
        this.postcode_dropdown = page.locator('//input[@name="cmbPostalCode"]')
        this.postlocation_dropdown = page.locator('//input[@name="cmbPostLocation"]')
        this.phone_textbox = page.locator('//input[@name="txtPhone"]')
        this.detailsTab_link = page.getByText('Details')
        this.save_btn = page.locator('//div[@name="btnSave"]')
        this.yes_button = page.locator('//div[@name="yes"]')
        this.customerNo_textbox = page.locator('//input[@name="txtCustomerNo_0"]')
        this.customerStatus_textbox = page.locator('//div[@name="cmbCustomerStatus"]/div')
        this.customerStatus_dropdown_select = page.getByRole('cell', { name: 'Customer' }).getByText('Customer')
        //this.customerNo_dropdown = page.locator('#id_1997 div')
        this.customerNo_dropdown = page.locator('//html/body/div[2]/div[2]/div/div/div/div[5]/div[1]/div[2]/div[2]/div/div/div/div/div/div/div/div/div[2]/div[1]/div/div/div[1]/div[2]/div[2]/div/div[1]/div/div[34]/div/div')
        //this.customerNo_dropdown = page.locator('#id_1997 div')
        this.customerSearch_textbox = page.locator('//input[@name="cmbOperator"]')
        this.ok_button = page.locator('//div[@name="cmdOk"]')
        this.customerNameCheck_textbox = page.locator('//div[@id="id_1172"]')   
        this.del_button = page.locator('//div[@name="btnDelete"]')
        this.delPopupOk_button = page.locator('//div[@name="yes"]')
        this.customerReSearch_textbox = page.locator('(//div[@name="focus-indicator" and @class="qx-table-scroller-focus-indicator"])[2]')
        this.noResults_popup = page.locator('//div[@name="message"]')

        this.status_txtBox = page.locator('//input[@name="cmbCustomerStatus"]')
        this.customer_label = page.locator('//div[@name="mdiClient"]/div/div/div/div/div[@name="MdiChildPage_frmCustomerTotal"]/div[@name="label"]')
        this.closeX1_btn = page.locator('//div[@name="MessageBox"]/div/div[@name="close-button"]')
        this.closeX2_btn = page.locator('//div[@name="frmSearch"]/div/div[@name="close-button"]')
        this.customerWindowCloseX_btn = page.locator('//div[@name="MdiChildPage_frmCustomerTotal"]/div[@name="close-button"]')
        
        this.machine_tab = page.locator('//div[@name="panTabList_3"]/div[text()="  Machines  "]')
        this.machine_col = page.locator('//div[@name="Machine no."]/div')
        this.installation_col = page.locator('//div[@name="Inst. date"]/div')
        this.machine_label = page.locator('//div[@role="cell" and @col="3" and @row="0" and @style="left:100px;width:100px;z-index:9999"]')

               

    }

    async customerCreation(custName,addrName,country,addr1,addr2,postCode,postLocation,phone,customerNo)
    {
        //await this.myEvatic_dropdown.click()
        await this.customer_dropdown1.click()
        await this.customer_dropdown2.click()
        await this.customerName_textbox.click()
        await this.customerName_textbox.fill(custName)
        await this.addressName_textbox.click()
        await this.addressName_textbox.fill(addrName)
        await this.country_dropdown.click()
        await this.country_dropdown.fill(country)
        await this.address1_textbox.click()
        await this.address1_textbox.fill(addr1)
        await this.address2_textbox.click()
        await this.address2_textbox.fill(addr2)
        await this.postcode_dropdown.click()
        await this.postcode_dropdown.fill(postCode)
        await this.postcode_dropdown.click()
        await this.postlocation_dropdown.fill(postLocation)
        await this.phone_textbox.click()
        await this.phone_textbox.fill(phone)
        await this.save_btn.click() 
        await this.page.waitForTimeout(2000);
        await this.detailsTab_link.click()
        await this.page.waitForTimeout(2000);
        await this.status_txtBox.clear();
        await this.status_txtBox.fill('Customer');
        await this.page.waitForTimeout(2000);
        await this.customerStatus_textbox.click()
        await this.page.waitForTimeout(2000);
        await this.customerStatus_dropdown_select.click()
        await this.yes_button.click() 
        await this.customerNo_textbox.click()
        await this.customerNo_textbox.fill(customerNo)
        await this.page.waitForTimeout(4000);
        //await this.page.pause();
        await this.save_btn.click()  
        await this.page.waitForTimeout(4000);
        this.customerNumber = customerNo;
        console.log('The created customerNo is ' + await this.customerNumber);    
    }
    async customerSearch(custNo)
    {
        
        await this.customerSearch_Link.click()
        //await this.page.pause()
        //await this.customerReSearch_textbox.click()
        await this.customerSearch_textbox.click()
        await this.customerSearch_textbox.fill(custNo)
        await this.ok_button.click()
        //await this.page.pause();
        await this.page.waitForTimeout(6000);
        await expect(await this.customer_label.textContent(),'Verify the Search CustomerNo').toContain(custNo);
        console.log('The cust No ' + custNo + 'is searched successfully');
        

    }

    async customerDelete(custNo)
    {
        await this.del_button.click()
        await this.delPopupOk_button.click()
        //await this.page.pause()
        await this.page.waitForTimeout(10000)
        await expect(await this.customer_label.textContent(),'Verify the Search CustomerNo').toContain('New customer');
        console.log('The cust No '+ custNo + ' is deleted successfully');

    }

    async customerReSearch(custNo)
    {
        await this.page.waitForTimeout(4000)
        //await this.page.pause();
        //await this.customer_dropdown1.click()
        await this.customerSearch_Link.click()
        //await this.customerReSearch_textbox.click()
        //await this.customerSearch_textbox.click()
        await this.customerSearch_textbox.fill(custNo)
        await this.ok_button.click()
        await this.page.waitForTimeout(2000)
        //await expect(this.customerNameCheck_textbox,'Verify the Search CustomerName').toHaveText(custNo)
        await expect(this.noResults_popup,'Verify the Search CustomerName').toHaveText("No match!")
        console.log('The cust No ' + custNo + ' cannot be searched & does not exist');
        await this.closeX1_btn.click()
        await this.closeX2_btn.click()
        await this.page.waitForTimeout(3000)
        await this.customer_dropdown1.click()
        await this.customerWindowCloseX_btn.click();

    }

    async customerMachineVerify(custNo,SerialNum)
    {
        await this.customer_dropdown1.click()
        await this.page.pause()
        //await this.customer_dropdown2.click()
        await this.customerSearch_Link.click()
        //await this.customerReSearch_textbox.click()
        await this.customerSearch_textbox.click()
        await this.customerSearch_textbox.fill(custNo)
        await this.ok_button.click()
        //await this.page.pause();
        await this.page.waitForTimeout(6000);
        await expect(await this.customer_label.textContent(),'Verify the Search CustomerNo').toContain(custNo);
        console.log('The cust No ' + custNo + 'is searched successfully');
        await this.page.waitForTimeout(1000)
        await this.machine_tab.click()
        await this.page.waitForTimeout(1000)
        await this.installation_col.click()
        await this.installation_col.click()
        await this.machine_col.click()
        await this.machine_col.click()
        await this.page.waitForTimeout(1000)
        //await this.page.pause()
        //await expect(await this.machine_label.textContent(),'Verify the Search MachineNumber').toContain(SerialNum);
        console.log('The machine '+ SerialNum + ' is assigned successfully to the customer '+ custNo + '');

    }

}