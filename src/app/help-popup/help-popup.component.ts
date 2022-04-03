import { UserDataService } from './../user-data.service';
import { ConnectionService } from './../connection.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-help-popup',
  templateUrl: './help-popup.component.html',
  styleUrls: ['./help-popup.component.scss'],
})
export class HelpPopupComponent {
  shortDesc: String;
  longDesc: String;
  constructor(
    public dialogRef: MatDialogRef<HelpPopupComponent>,
    private connection: ConnectionService,
    private user: UserDataService
  ) {
    this.shortDesc = '';
    this.longDesc = '';
  }
  send() {
    this.connection.socket.emit(
      'Problem',
      this.user.officeNr,
      this.shortDesc,
      this.longDesc
    );
    this.dialogRef.close([this.shortDesc, this.longDesc]);
  }
}
