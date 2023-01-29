import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loginForm : FormGroup;
  
  
  constructor(
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  logInSubmit(){
    console.log('-----------demo------------');
    this.router.navigateByUrl('/dashboard/setting');
  }

}
