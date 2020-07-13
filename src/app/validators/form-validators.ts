import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

export class FormValidators {
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

  static password(controlA: AbstractControl, controlB: AbstractControl) {
    if (!controlA || !controlB) {
      return null;
    }
     const { value: password } = controlA.value;
     const { value: confirmPassword } = controlB.value;
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}