import { Injectable } from '@angular/core';
import { TextField } from 'src/app/domain/TextField';
import { BooleanField } from 'src/app/domain/BooleanField';
import { SlideField } from 'src/app/domain/SlideField';
import { NumberField } from 'src/app/domain/NumberField';
import { ImageField } from 'src/app/domain/ImageField';
import { SignatureField } from 'src/app/domain/SignatureField';

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

      case "bool":
        field = new BooleanField();
        break;

      case "slide":
        field = new SlideField();
        break;

      case "number":
        field = new NumberField();
        break;

      case "signature":
        field = new SignatureField();
        break;

      case "image":
        field = new ImageField();
        break;

      default:
        break;
    }

    return field;
  }
}
