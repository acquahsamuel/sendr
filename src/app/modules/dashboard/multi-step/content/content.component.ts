import { AfterViewInit, Component, OnInit ,ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

// declare var MediumEditor:any;

export class ContentComponent implements OnInit {
  ondelay = false;
  

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.ondelay = true;
    }, 5000);

  }



}
