import test from "@playwright/test";
import { commonutils } from "../utils/commonutils";
import { AfterAll, BeforeAll } from "@cucumber/cucumber";
 BeforeAll(async()=>{
   await commonutils.startbrowser();

})

AfterAll(async()=>{
    await commonutils.closeBrowser();
})