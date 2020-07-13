import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from '../validators/password-validators';
import { FormValidators } from '../validators/form-validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form;
  constructor(private _fb: FormBuilder) { 
    this.form = _fb.group ({
      oldPassword: _fb.control('', Validators.required, PasswordValidators.checkOldPassword),
      newPassword: _fb.control('', Validators.required),
      confirmPassword: _fb.control('', Validators.required)
    //}, {validators: FormValidators.password.bind(this, this.oldPassword, this.newPassword)}) 
    }, {validators: this.password.bind(this)})
    //});
  };

  get oldPassword() {
    if (this.form && this.form.get('oldPassword')) {
      return this.form.get('oldPassword');
    }

    return '';
  }

  get newPassword()  {
    if (this.form && this.form.get('newPassword')) {
      return this.form.get('newPassword');
    }
  }

  get confirmPassword() {
    if (this.form && this.form.get('confirmPassword')) {
      return this.form.get('confirmPassword');
    }
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword').value === g.get('confirmPassword').value
       ? null : {'mismatch': true};
  }

  checkIfPasswordMatches() {
    if (this.newPassword.value.length > 0 && this.confirmPassword.value.length > 0 && 
        this.newPassword.value !== this.confirmPassword.value) {
      this.confirmPassword.setErrors({'noMatch' : true});
      
    }
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('newPassword');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    console.log('formGroup.get(newPassword)' +formGroup.get('newPassword'))
    console.log('formGroup.get(confirmPassword)' +formGroup.get('confirmPassword'))
    console.log('password: ' + password);
    console.log('confirmPassword :' + confirmPassword)
    if (password && confirmPassword) {
      return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    return null;
  }
  
  
}