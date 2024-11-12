import { appVar } from '../appVariables/appVariables'

exports.AdminWebLoginPage = class AdminWebLoginPage
{
    constructor(page)
    {
    this.page = page
    this.signIn_btn = page.locator('//html/body/div[1]/div/form/input[2]')
    //this.login_btn = page.getByRole('button', { name: 'Log in >' })
    this.username_textbox = page.getByLabel('Email address')
    this.continue_button = page.locator('//html/body/div/main/section/div/div/div/div[1]/div/form/div[2]/button')
    this.password_textbox = page.getByPlaceholder('Password')
    this.signIn_button = page.getByRole('button', { name: 'Sign in' })
    this.yes_button = page.getByRole('button', { name: 'Yes' })
    }

    async gotoLoginPage()
    {
        await this.page.goto(appVar.evaticAdminWebUrl); 
        
    }
    async login()
    {
        const username = "evatic.qa@asolvi.com";
        const password = "wZ@H%401XEbf";
        
        await this.signIn_btn.click();
        await this.username_textbox.fill(username)
        await this.continue_button.click()
        await this.password_textbox.click()
        await this.password_textbox.fill(password)
        await this.signIn_button.click();
        await this.yes_button.click()
    }
}