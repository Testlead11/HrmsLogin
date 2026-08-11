/*import {Given, When, Then, setDefaultTimeout, DataTable, BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep} from "@cucumber/cucumber"

import {Browser, Page, expect, firefox} from "@playwright/test";  

setDefaultTimeout(60000);

 let page: Page;
  let browser : Browser;
BeforeAll( async ()=> {
  
         browser =await firefox.launch({headless: true});
                   page= await browser.newPage();
                    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
});


/*Given('navigate the application url', async ()=> {
             await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
});*/

import { Then, When } from "@cucumber/cucumber";
import { LoginPage } from "../pages/Loginpage";
import { Page } from "@playwright/test";
import { AssertUtil } from "../utils/Assertutil";
import { commonutils } from "../utils/commonutils";

/*When('enter username', async ()=> {
            await page.locator("//input[@name='txtUserName']").fill("Ajitha");
});

When('enter password', async ()=> {
              await page.locator("//input[@name='txtPassword']").fill("Ajitha");
 
});

When('click on Login',async ()=> {
 
    await page.locator("[name='Submit']").click();
});

Then('verify welcome page',async ()=> {
 await expect(page.locator("//li[text()='Welcome Ajitha']")).toHaveText("Welcome Ajitha");
});
BeforeStep(async()=>{
  console.log("Before step")
})
AfterStep(async()=>{
  console.log("After step");
})

After(async()=>{
  await page.locator("//*[@id='option-menu']/li[3]/a").click();
})
/*When('click on logout', async ()=> {
 await page.locator("//*[@id='option-menu']/li[3]/a").click();
});

AfterAll( async ()=> {
  await browser.close();
});

// enter data using scenario outline and examples keyword

/*When('enter username {string}', async (username:string) =>{
            await page.locator("//input[@name='txtUserName']").fill(username);
});

When('enter password {string}', async (password:string)=> {
                await page.locator("//input[@name='txtPassword']").fill(password);

});

// enter data using datatable

When('enter username', async (dataTable:DataTable)=> {
    let data: string[][]= dataTable.raw();
    let username:string = data[0][0];
    console.log(username);
    await page.locator("//input[@name='txtUserName']").fill(username);

});

When('enter password', async (dataTable:DataTable)=> {
  let data: string[][]= dataTable.raw();
    let password:string = data[0][0];
    console.log(password);
    await page.locator("//input[@name='txtPassword']").fill(password);

}); */

let page:Page;
let Login:LoginPage;
When('user login', async ()=> {
   Login = new LoginPage();
  await Login.login();
});

Then('verify welcome', async ()=> {
              await AssertUtil.assertEquals(await commonutils.verifyText(Login.getwelcometext()), "Welcome Ajitha");
});