import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form;
  constructor(private _fb: FormBuilder) { 
    this.form = _fb.group ({
      oldPassword: _fb.control('', Validators.required),
      newPassword: _fb.control('', Validators.required),
      confirmPassword: _fb.control('', Validators.required)
    }) 
  };

  // form = new FormGroup({
  //   account: new FormGroup({
  //     username: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(3),
  //       UsernameValidators.cannotContainSpace], 
  //       UsernameValidators.shouldBeUnique),
  //     password: new FormControl('', Validators.required)
  //   })
    
  // })

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
