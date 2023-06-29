import { expect } from '@playwright/test';
exports.CustomerPage = class CustomerPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[@id="id_119"]')
        this.customer_dropdown1 = page.locator('//div[@id="id_176"]')
        this.customer_dropdown2 = page.locator('//div[@id="id_180"]')
        this.customerSearch_Link = page.locator('//div[@id="id_184"]')
        this.customerName_textbox = page.locator('//input[@name="txtCustomerName_1"]')
        this.addressName_textbox = page.locator('//input[@name="txtAddressName"]')
        this.country_dropdown = page.locator('//input[@name="cmbCountry"]')
        this.address1_textbox = page.locator('//input[@name="txtAdr1"]')
        this.address2_textbox = page.locator('//input[@name="txtAdr2"]')
        this.postcode_dropdown = page.locator('//input[@name="cmbPostalCode"]')
        this.postlocation_dropdown = page.locator('//input[@name="cmbPostLocation"]')
        this.phone_textbox = page.locator('//input[@name="txtPhone"]')
        this.detailsTab_link = page.getByText('Details')
        this.customerstatus_textbox = page.locator('//html/body/div[1]/div[2]/div/div/div/div[5]/div[1]/div[2]/div[2]/div/div/div/div/div/div/div/div/div[2]/div[1]/div/div/div[1]/div[2]/div[3]/div/div[1]/div/div[34]/div')
        this.save_button = page.locator('#id_99').getByRole('img')
        this.yes_button = page.locator('//div[@name="yes"]')
        this.customerNo_textbox = page.locator('//input[@name="txtCustomerNo_0"]')
        this.customerNo_dropdown = page.locator('#id_1997 div')
        this.customerNo_dropdown_select = page.locator('//html/body/div[1]/div[4]/div/div/div[1]/div/div[2]/div/div/div[1]/div[2]/div/div')
        this.customerSearch_textbox = page.locator('//input[@name="cmbOperator"]')
        this.ok_button = page.locator('//div[@name="cmdOk"]')
        this.customerNameCheck_textbox = page.locator('//div[@id="id_1172"]')   
        this.del_button = page.locator('#id_101').getByRole('img')
        this.delPopupOk_button = page.locator('//div[@name="yes"]')
        this.customerReSearch_textbox = page.locator('//div[@role="cell" and @col="2" and @row="0" and @style="left:173px;width:156px;z-index:9999"]')
        this.noResults_popup = page.locator('//html/body/div[1]/div[7]/div[2]/div[3]')

        this.status_txtBox = page.locator('//html/body/div[1]/div[2]/div/div/div/div[5]/div[1]/div[2]/div[3]/div/div/div/div/div/div/div/div/div[2]/div[1]/div/div/div[1]/div[2]/div[3]/div/div[1]/div/div[34]/input')

               

    }

    async customerCreation(custName,addrName,country,addr1,addr2,postCode,postLocation,phone,customerNo)
    {
        await this.myEvatic_dropdown.click()
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
        await this.save_button.click() 
        await this.page.waitForTimeout(2000);
        await this.detailsTab_link.click()
        //await this.page.pause();
        await this.page.waitForTimeout(2000);
        await this.status_txtBox.clear();
        await this.status_txtBox.fill('Customer');
        await this.customerstatus_textbox.click()
        await this.customerNo_dropdown_select.click()
        await this.yes_button.click() 
        await this.customerNo_textbox.click()
        await this.customerNo_textbox.fill(customerNo)
        await this.save_button.click()  
        await this.page.waitForTimeout(2000);
        this.customerNumber = customerNo;
        console.log('The created customerNo is ' + await this.customerNumber);    
    }
    async customerSearch(custNo)
    {
        await this.myEvatic_dropdown.click()
        await this.customer_dropdown1.click()
        await this.customerSearch_Link.click()
        //await this.customer_re_textbox.click()
        await this.customerReSearch_textbox.click()
        await this.customerSearch_textbox.click()
        await this.customerSearch_textbox.fill(custNo)
        await this.ok_button.click()
        //await this.page.pause();
        //await expect(this.customerNameCheck_textbox,'Verify the Search CustomerName').toHaveText(custNo)

    }

    async customerDelete()
    {
        await this.del_button.click()
        await this.delPopupOk_button.click()

    }

    async customerReSearch(custNo)
    {
        await this.page.waitForTimeout(2000)
        //await this.page.pause();
        //await this.customer_dropdown1.click()
        await this.customerSearch_Link.click()
        await this.page.waitForTimeout(2000);
        await this.customerReSearch_textbox.click()
        //await this.customerSearch_textbox.click()
        await this.customerSearch_textbox.fill(custNo)
        await this.ok_button.click()
        //await this.page.pause();
        //await expect(this.customerNameCheck_textbox,'Verify the Search CustomerName').toHaveText(custNo)
        await expect(this.noResults_popup,'Verify the Search CustomerName').toHaveText("No match!")

    }

}