import { Browser, chromium, firefox, FrameLocator, Locator, Page } from "playwright";
import configdata from "../../config/configdata.json";
import { AssertUtil } from "./Assertutil";
import { expect } from "@playwright/test";
export class commonutils {
    static browser: Browser;
    static page: Page;
    static frame: FrameLocator;
    //static configdata:configdata;
// start browser
    static async startbrowser(): Promise<void> {
        const browser: string = configdata.browser;
        try {
            switch (browser) {
                case "firefox": this.browser = await firefox.launch({headless: true});
                    break;
                case "chrome": this.browser = await chromium.launch();
                    break;
                default: console.log("no browser value is matched ");

            }
            this.page = await this.browser.newPage();
            await this.page.goto(configdata.url);
        }
        catch (error: any) {
            console.log(error.message);
        }
    }

    // Close browse

    static async closeBrowser():Promise<void>{
                await this.browser.close();
    }
    // findelement
    static async findelement(selector:string):Promise<Locator>{
        let element: Locator= null as any;
        try{
       element= await this.page.locator(selector);
        }catch(error:any){
console.log(error.message);
        }
        return element;
    }

    
    // switch to iframe
    static async switchtoIframe(selector: string):Promise<FrameLocator>{
       this.  frame=null as any;
        try{
               this. frame =await this.page.frameLocator(selector);

        }catch(error: any){
               AssertUtil.assertFail(error.info);
        }
         return this.frame;
    }
    // enter value

    static async entervalue(selector: string, value:string):Promise<void>{
        try{
             let element=await this.findelement(selector);
            await element.fill(value);

        }catch(error: any){
            AssertUtil.assertFail(error.info);
        }
            
    }
    //frame entervalue
    static async frameEntervalue(frame:FrameLocator,selector: string, value:string):Promise<void>{
        try{
           await this.frame.locator(selector).fill(value);
        }
        catch(error: any){
          AssertUtil.assertFail(error.info);

        }
    }

    // click on element
    static async clickonElement(selector: string):Promise<void>{
        try{
 let element=await this.findelement(selector);
              await element.click();
        }
        catch(error: any){
            AssertUtil.assertFail(error.info);
        }
             
    }
    //click on frame element
    static async clickonFrameelement(frame:FrameLocator, selector:string):Promise<void>{
        try{
                let element= await this.frame.locator(selector);
               await element.click();
        }catch(error: any){
            AssertUtil.assertFail(error.info);

        }
    }
     // verify text

     static async verifyText(selector: string):Promise<string>{
        let text: string ="";
        try{
            let element= await this.findelement(selector);
               let pagetext= await element.textContent();
                if(pagetext!== null){
                     text=pagetext;
        }
                
                }catch(error: any){
                    AssertUtil.assertFail(error.info);
                }
                return text;
     }

     // verify text inside frame

        static async verifyframeText(frame:FrameLocator, selector: string):Promise<string>{
        let text: string="";
       try{
             let element :Locator= await frame.locator(selector);
                        let pagetext= await element.textContent();
                        if(pagetext!==null){
                            text=pagetext;
                        }
       }catch(error: any){
           AssertUtil.assertFail(error.info);
        }
        return text;
}

     // mousehover

     static async mouseHover(selector: string):Promise<void>{
        try{
let element =await this.findelement(selector);
            await element.hover();
        }catch(error: any){
           AssertUtil.assertFail(error.info);
        }
            
     }
     // enter emp code

     static async EMP_code(frame:FrameLocator, selector:string, value:string):Promise<void>{
          
        try{
            await this.frame.locator(selector).fill(value);
     }
     catch(error: any){
        AssertUtil.assertFail(error.info);
     }
    }
   static async dropdownIframe(frame:FrameLocator, selector: string, Option :string):Promise<void>{
    try{
        let element: Locator=await frame.locator(selector);
        await element.selectOption({label: Option});
    }catch(error:any){
        AssertUtil.assertFail(error.info);
    }
   }

   static async EmployeesearchResultsIframe(frame: FrameLocator, selector: string):Promise<void>{
    
    
    try{
  let element =  frame.locator(selector);
             await expect(element).toBeVisible();
           let text= await element.innerText();
             console.log(text);
    }   catch(error:any){
      AssertUtil.assertFail(error.info);
    }           
    
   }

}