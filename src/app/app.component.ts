import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* template: *insert HTML* --> Optional way of doing it, inline template */
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}

/* Defined by specifying code and the corresponding template. */