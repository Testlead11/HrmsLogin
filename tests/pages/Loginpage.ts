import { commonutils } from "../utils/commonutils";
import configdata from "../../config/configdata.json";
 
  export class LoginPage{

      username: string="//input[@name='txtUserName']";
      password: string="//input[@name='txtPassword']";
     Login: string="//input[@name='Submit']";
     welcometext: string = "//li[text()='Welcome Ajitha']";
    async login(){
    await commonutils.entervalue(this.getUsername(), configdata.username);
    await commonutils.entervalue(this.getPassword(), configdata.password);
await commonutils.clickonElement(this.getLogin());
await commonutils.verifyText(this.getwelcometext());
}
   getUsername(): string{
        return this.username;
}
 getPassword():string{
    return this.password;
}
 getLogin():string{
    return this.Login;
}
getwelcometext():string{
    return this.welcometext;
}
  }