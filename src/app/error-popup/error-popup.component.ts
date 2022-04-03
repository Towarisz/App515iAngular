import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
})
export class ErrorPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<ErrorPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { error: String }
  ) {}
}
