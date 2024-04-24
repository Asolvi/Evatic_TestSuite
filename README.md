### This Playwright framework consists of the following folders,

* allure-Report - This is a readymade Reporting framework that displays the results in more clear, colorful, stylized HTML format which can be easily understood by business users

* appVariables - This folder consists of a file which contains the environment's application URL either SIT, UAT , DEV

* Downloaded files - This folder contains the files(PDF,GIF,Word) format downloaded in this application

* Node_Modules - This is an automatic created folder when the node.js is installed in your system. This is a pre-requisite file needed to run all the playwright tests

* Pages - This is an important folder that contains the different pages that has been automated in the Evatic application. Since POM(Page Object Model) is implemented in the framework, each & every page is a .js(Java Script file) which has the Object properties & its methods. This is a centralized location as a object repository & different object properties of the pages are present there.

* PlayWright Report - This is a folder that will be automatically created once the playwrights tests has been run successfully. The HTML report(index.html) inside the folder displays the total number of Test cases, Test cases passed, failed, pending, flaky etc.

* Test Data - This is a folder that contains an excel sheet that contains the different Testdata that can be passed to the Test cases. 

* Tests - This is the important folder in the framework where all the Testcases can be written in a .Spec.Js file. This is totally customizable file where one can can write the test cases in a single spec.js file or split across multiple files as per the application functionality design. Different calls will be send to multiple files from these test cases present inside the file.Test case execution begins from these files by Alphabetical order

* utils  - This is the Utitlity folder where that contains the javascript files used that is used to generate random numbers used across as an input to Test data & another .Javascript written for connecting the Test data excel file to the Testcase Spec.Js file.

* gitIgnore - This folder contains the files that wont be used for uploading to GitHub repository. This may be used only for running the scripts in your local desktop environment.

* Package Json - This is an automatic created folder that contains the different dependencies created during the installation of node JS files.

* Playwright.Config.Ts - This is an very important file that contains all the config set up needed for running the playwright tests.Playwright tests wont run without this config file. The place where the test results needed to be stored, format of test results, serial or parallel execution of Test cases, Screenshots attachement needed, video needed, which mobile browsers or Desktop browsers etc can be configured inside this file

### Pre-Requisites for running this Repo
* Make sure that all the folders are present in this Repo with the updated data

* Make sure the user who is going to run the Tests has got the Write/Admin access. Please check with the Admin or check in the settings section of this repo

* Make sure the updated code is present in this repo. Admin of this repo should confirm this before running this tests.

* Make sure the user who is going to run the repo have access to 'Actions' tab in this repo.

* Once the pre-requisites are done,navigate to the Actions tab->Regression->Workflow->Main->Click the Main workflow

* Once the workFlow is completed,check the results from the Summary section.

* Results will be present in the Repo for the 14 days(as per company guidelines)

### Useful links
Playwright documentation - [Playwright] (https://playwright.dev/)
