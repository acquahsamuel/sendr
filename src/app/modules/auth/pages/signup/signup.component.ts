import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loginForm : FormGroup;
  
  
  constructor() { }

  ngOnInit(): void {
  }

  logInSubmit(){
  }

}
