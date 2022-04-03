import { QuestionPopupComponent } from './question-popup/question-popup.component';
import { UserDataService } from './user-data.service';
import { ConnectionService } from './connection.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { HelpPopupComponent } from './help-popup/help-popup.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AnwserPopupComponent } from './anwser-popup/anwser-popup.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginPopupComponent } from './login-popup/login-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    AdminPageComponent,
    UserPageComponent,
    ErrorPopupComponent,
    HelpPopupComponent,
    QuestionPopupComponent,
    AnwserPopupComponent,
    LoginPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LoadingPageComponent },
      { path: 'admin', component: AdminPageComponent },
      { path: 'user', component: UserPageComponent },
    ]),
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
  ],
  providers: [ConnectionService, UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
