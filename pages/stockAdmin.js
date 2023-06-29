import { test,expect } from '@playwright/test';
exports.StockAdminPage = class StockAdminPage
{
    constructor(page)
    {
        this.page = page
        this.myEvatic_dropdown = page.locator('//div[@id="id_119"]')
        this.article_dropdown1 = page.locator('//div[@id="id_128"]')
        this.stockAdmin_nav = page.locator('//div[@id="id_132"]')
        this.supplierNo_txtBox = page.locator('#id_1078 div').nth(1)
        this.stockNo_txtBox = page.locator('#id_1098 div').nth(1)
        this.articleNo_txtBox = page.locator('//div[@role="cell" and @col="2" and @row="0" and @style="left:0px;width:86px;z-index:10000"]')
        this.vertical_slider1 = page.locator('(//div[@class="qx-splitpane-splitter-vertical"])[1]')
        this.vertical_slider2 = page.locator('(//div[@class="qx-splitpane-splitter-vertical"])[2]')
        
    }
    
    async supplierOrder(supplierNo,stockNo,articleNumber)
     {
        await test.step("Navigate to the stock Admin Navigation & enter supplierNo,supplierName,Stock no", async()=>
          {
            await this.myEvatic_dropdown.click()
            await this.article_dropdown1.click()
            await this.stockAdmin_nav.click()
            await this.page.waitForLoadState("domcontentloaded");
            await this.supplierNo_txtBox.click()   
            await this.page.getByText(supplierNo).click()
            const src = await this.vertical_slider1.boundingBox();
            console.log('The source co-ordinates is ' + await src.x,await src.y);
            await this.page.mouse.move(await src.x,await src.y);
            await this.page.mouse.down();
            await this.page.mouse.move(await src.x,await src.y+100);
            await this.page.mouse.down();
            await this.page.mouse.click(299,339);
            //await this.page.mouse.click({ position: { x: await src.x, y: await src.y+100} });
            //await this.vertical_slider1.dragTo(this.vertical_slider2);
            await this.page.keyboard.press('Tab');
            await this.page.keyboard.press('Tab');
            await this.stockNo_txtBox.click();
            await this.page.getByText(stockNo).nth(1).click()
           })  
           
           await test.step("Fill the ArticleNo,Stock details", async()=>
          {
            await this.page.pause();
            //await this.vertical_slider1.dragTo(this.vertical_slider2);
            //await this.page.locator('//html/body/div[1]/div[2]/div/div/div/div[5]/div[1]/div[2]/div[2]/div/div/div/div/div/div/div/div/div[2]/div/div/div[1]/div/div/div[4]/div[2]/div/div').click();
            const tgt = await this.vertical_slider2.boundingBox();
            console.log('The source co-ordinates is ' + await tgt.x,await tgt.y);
            await this.page.mouse.click(await tgt.x,await tgt.y);
            await this.page.mouse.move(await tgt.x,await tgt.y);
            await this.page.mouse.up();
            await this.page.mouse.move(await tgt.x,await tgt.y-100);
            await this.page.mouse.up();
            await this.page.mouse.click(299,239);

           })
            

      
   
    }

      
   }



