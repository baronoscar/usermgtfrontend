import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DbCrud';
constructor(private route: Router) {
}
  home(): any {
  this.route.navigate(['login']);

  }
}
