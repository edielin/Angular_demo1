import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyWord = '';

  clearKeyWord($event: KeyboardEvent) {
    console.log($event);
      this.keyWord = '';
  }
}
