import { appVar } from '../appVariables/appVariables'

exports.LoginPage = class LoginPage
{
    constructor(page)
    {
    this.page = page
    this.username_textbox = page.locator('id=username')
    //this.continue_button = page.getByRole('button', { name: 'Continue' })
    this.continue_button = page.locator('//button[@type="submit" and text()="Continue"]')
    this.password_textbox = page.getByPlaceholder('Password')
    this.yes_button = page.getByRole('button', { name: 'Yes' })
    }

    async gotoLoginPage()
    {
        await this.page.goto(appVar.evaticurl); 
    }
    async login()
    {
        const username = "evatic.qa@asolvi.com";
        const password = "PASSWORD";
        
        await this.username_textbox.fill(username)
        //await this.page.pause()
        await this.continue_button.click()
        await this.password_textbox.click()
        await this.password_textbox.fill(password)
        await this.password_textbox.press('Enter')
        await this.yes_button.click()
    
    }
}
