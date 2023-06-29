import { Browser,Page, expect,chromium } from '@playwright/test';

const username = process.env.MEETUP_USERNAME ?? '';
const password = process.env.MEETUP_PASSWORD ?? '';

async function globalSetup()
{
    const browser:Browser = await chromium.launch({headless : true});
    const context = await browser.newContext();
    const page:Page = await context.newPage();

    await page.goto('https://qa.evatic.online/evatic');
    await page.locator('id=username').fill(username)
    await page.getByRole('button', { name: 'Continue' }).click()
    await page.getByPlaceholder('Password').fill(password)
    await page.getByPlaceholder('Password').press('Enter')
    await page.getByRole('button', { name: 'Yes' }).click()
    await page.waitForTimeout(3000)

  await page.context().storageState({path: "./LoginAuth.json"});
  await browser.close();
}

export default globalSetup;