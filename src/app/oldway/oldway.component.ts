import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oldway',
  templateUrl: './oldway.component.html',
  styleUrls: ['./oldway.component.scss']
})
export class OldwayComponent {
  public number;
  public output;
  public message = '';
  calcFib() {
    this.output = '';
    this.output = this.fibonacci(this.number);
  }

  fibonacci(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

  hello() {
   this.message = 'Hello world' + Date.now();
  }

}
