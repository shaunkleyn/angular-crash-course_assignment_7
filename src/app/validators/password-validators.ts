import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
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