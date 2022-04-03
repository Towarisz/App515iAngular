import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-anwser-popup',
  templateUrl: './anwser-popup.component.html',
  styleUrls: ['./anwser-popup.component.scss'],
})
export class AnwserPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<AnwserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { anwser: String }
  ) {}
}
