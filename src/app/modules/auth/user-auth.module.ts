import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent
    
  ],
  imports: [
    CommonModule,
    // MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserAuthRoutingModule,
  ],
  providers: [ ]
})

export class UserAuthModule { }


