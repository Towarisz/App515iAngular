import { LoginPopupComponent } from './../login-popup/login-popup.component';
import { ErrorPopupComponent } from './../error-popup/error-popup.component';
import { UserDataService } from './../user-data.service';
import { ConnectionService } from './../connection.service';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss'],
})
export class LoadingPageComponent {
  @Input() fName: any;
  @Input() lName: any;
  @Input() officeNr: any;
  constructor(
    private connection: ConnectionService,
    private user: UserDataService,
    private dialog: MatDialog,
    private router: Router
  ) {
    if (localStorage.getItem('fName') != null)
      this.fName = localStorage.getItem('fName');
    if (localStorage.getItem('lName') != null)
      this.lName = localStorage.getItem('lName');
    if (localStorage.getItem('officeNr') != null)
      this.officeNr = localStorage.getItem('officeNr');

    //po err wyswietlenie bledu
    this.connection.socket.on('LoginOccupied', (msg: any) => {
      this.dialog.open(ErrorPopupComponent, {
        data: { error: msg },
      });
    });
    //po dobrej przekierowanie i zapisanie danych
    this.connection.socket.on('sPassed', () => {
      this.user.fName = this.fName;
      this.user.lName = this.lName;
      this.user.officeNr = this.officeNr;

      localStorage.setItem('fName', this.fName);
      localStorage.setItem('lName', this.lName);
      localStorage.setItem('officeNr', this.officeNr);

      this.router.navigate(['/user']);
    });

    this.connection.socket.on('tPassed', () => {
      this.user.fName = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      this.router.navigate(['/admin']);
    });
  }

  send(x: any) {
    x.preventDefault();
    let data = {
      name: this.fName,
      surn: this.lName,
      place: this.officeNr,
    };
    //wyslanie socketa z info
    this.connection.socket.emit('login', Object.values(data));
    this.connection.socket.emit('Student');
  }

  loginAsTeacher() {
    this.dialog.open(LoginPopupComponent, {
      width: '550px',
      disableClose: true,
    });
  }
}
