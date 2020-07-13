import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0)
      return {cannotContainSpace: true};
    null;
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'shaun')
          resolve({shouldBeUnique: true});
        else resolve(null);
      }, 2000);
    })
    
  }
}