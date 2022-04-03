import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  fName: String;
  lName: String;
  officeNr: String;
  constructor() {
    this.fName = '';
    this.lName = '';
    this.officeNr = '';
  }
  getUser() {
    return [this.fName, this.lName, this.officeNr];
  }
}
