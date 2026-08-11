import { expect } from "playwright/test";

 export class AssertUtil{
   static assertFail(info:string){
console.log(info);
    }

    static async assertEquals(actual: string, expected: string):Promise<void>{
        if(actual === expected){
            console.log(actual+ "is matched with "+ expected);
        }else{
            console.log(actual+"is not matched with"+ expected);
        }
    }
     
 }