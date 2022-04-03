import { MatDialogRef } from '@angular/material/dialog';
import { ConnectionService } from './../connection.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
})
export class LoginPopupComponent {
  password: String;
  constructor(
    private connection: ConnectionService,
    public dialogRef: MatDialogRef<LoginPopupComponent>
  ) {
    this.password = '';
  }

  send() {
    this.connection.socket.emit('login', ['', '', 20]);
    this.connection.socket.emit('Teacher', this.password);
    this.dialogRef.close();
  }
}
