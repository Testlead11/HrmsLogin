

import configdata  from "../../config/configdata.json";
import { commonutils } from "../utils/commonutils";
import  Page  from "@playwright/test";

export class PIMpage{
    PIM:string="//li[@id='pim']";
    AddEmply:string="xpath=//*[@id='pim']/ul/li[2]/a/span";
   switch_to_frame:string="iframe#rightMenu";
   verifypimtext:string = "//h2[text()='PIM : Add Employee']";
     firstname: string= "//input[@id='txtEmpFirstName']";
   lastname: string="//input[@id='txtEmpLastName']";
   save:string="//input[@id='btnEdit']";
     emp_code="//input[@id='txtEmployeeId']";
    edit_emp="//input[@id='btnEditPers']";
     ssnNO:string="//input[@id='txtNICNo']";
Smoker_checkbox="//input[@id='chkSmokeFlag']";
radio_button="//input[@id='gender2']";
save_button="//input[@id='btnEditPers']";
search_by="//select[@id='loc_code']";
search_for="//input[@id='loc_name']";
search_button="//input[@value='Search']";
Employee_name="//a[normalize-space()='EMPLOYEE_NAME']";

    getPIM():string{
        return this.PIM;
    }
    getAddEmp():string
    {
        return this.AddEmply;
    }
    getframe():string
    {
        return this.switch_to_frame;
    }
    getAddemptext():string{
        return this.verifypimtext;
    }
    getFirstname():string{
        return this.firstname;
    }
    getLasttname():string{
        return this.lastname;
    }
    getSavebutton():string{
        return this.save;
    }
    getEmpcode():string{
        return this.emp_code;
    }
    geteditEmp():string{
   return this.edit_emp;
    }
    getssnNo():string{
        return this.ssnNO;
    }
   getsmoker_checkbox():string{
    return this.Smoker_checkbox;
   }
   getradio_button():string{
    return this.radio_button;
   }
   getsave_button():string{
    return this.save_button;
   }
   getsearch_by():string{
    return this.search_by;
   }
   getsearch_for():string{
    return this.search_for;
   }
   getsearch_button():string{
    return this.search_button;
   }
  getEmployee_name(name: string): string {
    return this.Employee_name.replace("EMPLOYEE_NAME", name);
   }
}