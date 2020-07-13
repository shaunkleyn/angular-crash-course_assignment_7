import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
  static passwordsMatch(control: AbstractControl, value: string): ValidationErrors | null {
    console.log(control.value);
    if((control.value as string) != value)
      return {passwordsMatch: true};
    null;
  }

  static checkOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value !== '1234')
          resolve({checkOldPassword: true});
        else resolve(null);
      }, 200);
    })
    
  }
}