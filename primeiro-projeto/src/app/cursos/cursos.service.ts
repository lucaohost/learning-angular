import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return  ['Python','Java','Angular','Ext Js'];
  }

}
