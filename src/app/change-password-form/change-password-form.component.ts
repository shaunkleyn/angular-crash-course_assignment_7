import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from '../validators/password-validators';

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
    }, {validators: this.password.bind(this)})
  };

  changePassword() {
    console.log(this.form.value);
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword()  {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('newPassword');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    if (password && confirmPassword) {
      return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    return null;
  }
}