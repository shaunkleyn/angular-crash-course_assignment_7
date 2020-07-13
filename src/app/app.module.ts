
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, CoursesComponent, SignupFormComponent, NewCourseFormComponent, ChangePasswordFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }