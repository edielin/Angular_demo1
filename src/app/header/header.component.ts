import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  imgSrc = '/assets/images/logo.png';
  imgTitle = 'The Will Will Web';
  h1Title = 'The Will Will Will Web';

  h3innerHTML = '記載著 <span style="color: #ff0" class="test">Will</span> 在網路世界的學習心得與技術分享';

  constructor() { }

  ngOnInit() {
  }

}
