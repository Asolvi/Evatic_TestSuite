import { test,expect } from '@playwright/test';
exports.CustWebOrderPage = class CustWebOrderPage
{
    constructor(page)
    {
        this.page = page
        this.orders_navigation = page.getByText('Order')
        this.machine_dropdown = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[1]/div/div/div/div[1]/div/div/div/div[2]/div/span/span/span[1]/input')
        this.blkToner_txtBox = page.locator('//html/body/div[1]/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/span/span/input')
        this.cyanToner_txtBox = page.locator('//html/body/div[1]/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[2]/td[5]/span/span/input')
        this.magentaToner_txtBox = page.locator('//html/body/div[1]/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/div[1]/div/div/div/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[3]/td[5]/span/span/input')
        this.addOrderLines_btn = page.getByRole('button', { name: 'Add order lines' })
        this.confirm_btn = page.getByRole('button', { name: 'Confirm' })
        this.deliveryAddress_dropdown = page.locator('//html/body/div[4]/div/div/div[2]/div/div/div[1]/div/div/div[8]/div[1]/div[1]/div/div[2]/div/span/span/span[1]/input')
        this.confirm_btn1 = page.locator('//html/body/div[4]/div/div/div[2]/div/div/div[4]/div/div/div/button')   
        this.order_label = page.locator('(//div/div/div/div/div/div/span)[11]')
        this.logs_navigation = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[1]/ul/li[2]/span')
        this.orderNo_txtBox = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/input')
        this.search_btn = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[1]/div[1]/div/div/button')
        this.total_count = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[3]/div/div/div[2]/span')
        this.ordNum = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/li/span/span[1]')
        this.contentBar = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[1]/div[1]/div/div/button/span')
        this.custNo = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/li/div/div/ul/div/div/div[1]/div[1]/div/div[2]/span')
        this.yourRef = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/li/div/div/ul/div/div/div[3]/div[1]/div/div[2]/span')
        this.invoice_Address = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/li/div/div/ul/div/div/div[4]/div[1]/div/div[2]/span')
        this.cust = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/li/div/div/ul/div/div/div[1]/div[2]/div/div[2]/span')
        this.delivery_Address = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/li/div/div/ul/div/div/div[4]/div[2]/div/div[2]/span')
        this.cyanToner_count = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/li/div/div/ul/div/div/div[5]/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[1]/td[4]')
        this.blackToner_count = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/li/div/div/ul/div/div/div[5]/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[2]/td[4]')
        this.magentaToner_count = page.locator('//html/body/div/div/div[1]/div/div/div[2]/div/div[2]/div/div/div[2]/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/li/div/div/ul/div/div/div[5]/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[3]/td[4]')
    }


    async ordersCreation(MachineNo,Count,VisitName)
    {
        await test.step("Naviagate to Order navigation & enter the machine details", async()=>
        {
            await this.page.waitForTimeout(3000);
            await this.orders_navigation.click()
            await this.machine_dropdown.click()
            await this.machine_dropdown.fill(MachineNo)
            const MachineNum = MachineNo;
            await this.page.getByText(MachineNum, { exact: true }).click();
            await this.page.waitForTimeout(5000);
        })
        
        await test.step("Enter the quantity for the toners & Click the confirm button", async()=>
        {
            await this.blkToner_txtBox.click()
            await this.blkToner_txtBox.fill(Count);
            await this.cyanToner_txtBox.click()
            await this.cyanToner_txtBox.fill(Count);
            await this.magentaToner_txtBox.click()
            await this.magentaToner_txtBox.fill(Count);
            await this.addOrderLines_btn.click();
            await this.confirm_btn.click();
            
        })

        await test.step("Enter the delivery address & Click the confirm button", async()=>
        {
            await this.deliveryAddress_dropdown.click()
            await this.deliveryAddress_dropdown.fill(VisitName)
            //await this.page.pause();
            //const VisitNam = VisitName;
            //await this.getByRole('option', { name: 'RajanCustomer Breidablikkveien 6 1167 Oslo' }).getByText('Breidablikkveien 6').click();
            //await this.page.getByText(VisitNam, { exact: true }).click();
            //await this.page.pause();
            await this.page.waitForTimeout(3000);
            await this.confirm_btn1.click();
            await this.page.waitForTimeout(3000);
            const a = await this.order_label.textContent();
            console.log('The new label created is ' + a);
            const b = a.split("[")
            //console.log(b)
            //console.log(b[0])
            //console.log(b[1])
            const c = b[1].split("]")
            //console.log(c)
            const d = c[0]
            console.log('The order no from the label created is ' + d)
            this.orderNo = d

        })

     
        
        
    }

    async logsCheck(orderNo,CustomerNo,Contact,InvoiceAddress,FirstName,LastName,VisitName,Address1,Count)
    {
        await test.step("Naviagate to Logs navigation & enter the order no details & verify the count", async()=>
        {
            await this.page.waitForTimeout(2000);
            //await this.orders_navigation.click()
            await this.logs_navigation.click();
            await this.orderNo_txtBox.click();
            await this.orderNo_txtBox.fill(orderNo);
            await this.search_btn.click()
            await this.page.waitForTimeout(5000);
            const orderCount = await this.total_count.textContent();
            console.log('The total no of counts is ' + orderCount);
            await expect(orderCount,'Verify the count of orderNumbers').toEqual("1");

        })

        await test.step("Click the correct order no & verify the Order Number, Cust no, Your Reference,Invoice Address, Cust Name, Delivery Address", async()=>
        {
            console.log('The order num is ' + await this.ordNum.textContent());
            await expect(await this.ordNum.textContent(),'Verify the orderNumbers').toContain(orderNo);
            await this.page.waitForTimeout(3000);
            //await this.page.pause();
            await this.contentBar.click();
            await expect(await this.custNo.textContent(),'Verify the customer number').toContain(CustomerNo);
            await expect(await this.yourRef.textContent(),'Verify the your reference').toContain(Contact);
            await expect(await this.invoice_Address.textContent(),'Verify the Invoice address').toContain(VisitName,InvoiceAddress);
            await expect(await this.cust.textContent(),'Verify the Customer Name').toContain(VisitName);
            await expect(await this.cust.textContent(),'Verify the Delivery Address').toContain(VisitName,Address1);
            await expect(await this.cyanToner_count.textContent(),'Verify the Cyan Toner Count').toContain(Count);
            await expect(await this.blackToner_count.textContent(),'Verify the Black Toner Count').toContain(Count);
            await expect(await this.magentaToner_count.textContent(),'Verify the Magenta Toner Count').toContain(Count);
            await this.page.waitForTimeout(5000);
        })
    }    


   
}