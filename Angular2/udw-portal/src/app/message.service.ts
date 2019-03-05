import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 // messages: string[] = [];
   messages: string;
  add( message: string) {
  //  this.messages.push(message);
   
    this.messages = message ;
    
  }

  clear() {
    this.messages = '';
  }
  constructor() { }
}
