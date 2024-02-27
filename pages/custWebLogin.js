import { appVar } from '../appVariables/appVariables'

exports.CustWebLoginPage = class CustWebLoginPage
{
    constructor(page)
    {
    this.page = page
    this.login_btn = page.getByRole('button', { name: 'Log in >' })
    this.username_textbox = page.getByLabel('Email address')
    this.continue_button = page.locator('//html/body/div/main/section/div/div/div/div[1]/div/form/div[2]/button')
    this.password_textbox = page.getByPlaceholder('Password')
    this.signIn_button = page.getByRole('button', { name: 'Sign in' })
    this.yes_button = page.getByRole('button', { name: 'Yes' })
    }

    async gotoLoginPage()
    {
        await this.page.goto(appVar.evaticCustWebUrl); 
        
    }
    async login()
    {
        const username = process.env.USERNAME ?? '';
        const password = process.env.PASSWORD ?? '';
        
        await this.login_btn.click();
        await this.username_textbox.fill(username)
        await this.continue_button.click()
        await this.password_textbox.click()
        await this.password_textbox.fill(password)
        await this.signIn_button.click();
        await this.yes_button.click()
    }
}