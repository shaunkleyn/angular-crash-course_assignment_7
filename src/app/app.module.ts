
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ChangePasswordFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }