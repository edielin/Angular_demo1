import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  imgSrc = '/assets/images/logo.png';
  imgTitle = 'The Will Will Web';
  h1Title ='The Will Will Will Web';

  constructor() { }

  ngOnInit() {
  }

}
