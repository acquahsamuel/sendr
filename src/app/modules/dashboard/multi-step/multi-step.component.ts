import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-multi-step',
  templateUrl: './multi-step.component.html',
  styleUrls: ['./multi-step.component.scss'],
  
})
export class MultiStepComponent implements OnInit {

  constructor(
    public router : Router,
    private activatedRoute : ActivatedRoute

    ) { }

  ngOnInit(): void {


  }



  next(){
  
  
  }


  previous(){
  
  }



}
