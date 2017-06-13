import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  keyWord = '';

  data: any;

  constructor(private http: Http) {
    this.http.get('/api/articles.json').subscribe(res => {
      this.data = res.json();
    });

  }

  updateKeyWord(str: string) {
    this.keyWord = str;
  }
}
