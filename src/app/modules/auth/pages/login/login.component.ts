import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  

  constructor(
    private router : Router
    ) { }

  ngOnInit(): void {
  }


  logInSubmit(){
    console.log('Clicked');
    this.router.navigateByUrl('/dashboard/setting');
  }

}
