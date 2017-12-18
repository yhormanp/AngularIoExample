import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string [] = ['hola mundo', 'hola mundo 1'];

  constructor() { }

  add (message: string)
  {
    this.messages.push(message);
  }

  clear (){
    this.messages = [];
  }

 

}
