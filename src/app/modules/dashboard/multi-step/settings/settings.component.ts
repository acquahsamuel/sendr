import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingForm : FormGroup;

  submitted = false;
  isLoading = false;
  state = {
    togglePassword: false,
    verifyingCredentials: false,
    emailValid: false,
    passwordValid: false,
    emailFocus: false,
    passwordFocus: false,
    loginError: false
  };

  // loginError;


  constructor(
    
    private formBuilder: FormBuilder,
    private router : Router
    
    ) { }

  ngOnInit(): void {

    this.settingForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }



  /**
   * Get form values from controls
   */
  get formField() {
    return this.settingForm.controls;
  }

  next(){
    this.router.navigateByUrl('/dashboard/content');
  }

}
