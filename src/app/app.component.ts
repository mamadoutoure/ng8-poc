import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public wwMode = false;

  switchMode(mode: string) {
    if (mode === 'I') {
      this.wwMode = true;
    } else {
      this.wwMode = false;
    }
  }
}

