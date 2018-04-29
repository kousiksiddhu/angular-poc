import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "url";
import { reject } from "q";

export class ValidatorInterface{
    static containsSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).indexOf(" ") >=0 )
            return {containsSpace: true};
            
        return null;
    }

    static usernameExists(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value == "siddhu"){
                        resolve({usernameExists: true});
                }
                else{
                    resolve(null);
                }
            },2000);
        });
    }
}