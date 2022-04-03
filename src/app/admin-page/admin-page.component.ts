import { Router } from '@angular/router';
import { UserDataService } from './../user-data.service';
import { ConnectionService } from './../connection.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  constructor(
    private connection: ConnectionService,
    private user: UserDataService,
    private router: Router
  ) {
    if (user.fName != 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
      router.navigate(['/']);
  }
}
