import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss'],
})
export class LoadingPageComponent {
  @Input() fName: any;
  @Input() lName: any;
  @Input() officeNr: any;
  constructor() {}

  send(x: any) {
    x.preventDefault();
  }
}
