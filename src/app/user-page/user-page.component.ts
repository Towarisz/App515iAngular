import { AnwserPopupComponent } from './../anwser-popup/anwser-popup.component';
import { QuestionPopupComponent } from './../question-popup/question-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { HelpPopupComponent } from './../help-popup/help-popup.component';
import { Router } from '@angular/router';
import { UserDataService } from './../user-data.service';
import { ConnectionService } from './../connection.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent {
  ExerciseDone: boolean;
  questionsList: Array<any>;
  anwserList: Array<any>;
  constructor(
    private connection: ConnectionService,
    public user: UserDataService,
    private router: Router,
    private dialog: MatDialog
  ) {
    if (user.fName == '' || user.lName == '' || user.officeNr == '')
      this.router.navigate(['/']);
    this.ExerciseDone = false;
    this.questionsList = [];
    this.anwserList = [];

    connection.socket.on('CBReset', () => {
      this.ExerciseDone = false;
    });
  }

  changeExerciseStatus(event: any) {
    this.ExerciseDone = !this.ExerciseDone;
    this.connection.socket.emit('CB', this.ExerciseDone, this.user.getUser());
  }

  sendHelpRequest() {
    const dialogRef = this.dialog.open(HelpPopupComponent, {
      width: '550px',
      height: '500px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.questionsList.push([this.questionsList.length].concat(result));
    });
  }

  seeQuest(problem: String) {
    this.dialog.open(QuestionPopupComponent, {
      data: { longDesc: problem },
      width: '550px',
      height: '500px',
    });
  }

  seeAnwser(anwser: String) {
    this.dialog.open(AnwserPopupComponent, {
      data: { anwser: anwser },
      width: '550px',
      height: '500px',
    });
  }
}
