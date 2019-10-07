import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-improved',
  templateUrl: './improved.component.html',
  styleUrls: ['./improved.component.scss']
})
export class ImprovedComponent implements OnInit {

  public number;
  public output;
  public message = '';
  private webWorker: Worker;
  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      this.webWorker = new Worker('../web-worker.worker',  { type: 'module' });
      this.webWorker.onmessage = ({data}) => {
        this.output = data;
      };
    }
  }
  calcFib() {
    this.output = '';
    this.webWorker.postMessage(this.number);
  }

  hello() {
    this.message = 'Hello world' + Date.now();
  }
}
