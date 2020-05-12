import { Injectable } from '@angular/core';
import { TextField } from 'src/app/domain/TextField';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }

  createField(type: string) {
    let field;
    switch (type) {
      case "text":
        field = new TextField();
        break;
    
      default:
        break;
    }

    return field;
  }
}
