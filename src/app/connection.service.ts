import { Injectable } from '@angular/core';

declare function io(url?: any): any;

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  socket: any;
  constructor() {
    this.socket = io('ws://localhost:3000');
  }
}
