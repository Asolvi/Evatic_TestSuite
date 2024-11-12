import { defineConfig, devices,PlaywrightTestConfig } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
//export default defineConfig({
const config: PlaywrightTestConfig = {
  //globalSetup:"./global-setup",
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  workers: 1,
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'],['line'],['allure-playwright']],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // Viewport used for all pages in the context.
    //viewport: { width: 1920, height: 1080 },
    //storageState:'./LoginAuth.json',
    headless: false,
    
  },

  testMatch: [
    'tests/01.Evatic8GenericModule.spec.js',
    'tests/02.EvaticCustomerWebModule.spec.js',
    'tests/03.EvaticAdminWebModule.spec.js'
  ],

};
export default config;