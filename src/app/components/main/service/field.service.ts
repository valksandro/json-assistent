import { Injectable } from '@angular/core';
import { TextField } from 'src/app/domain/TextField';
import { BooleanField } from 'src/app/domain/BooleanField';
import { SlideField } from 'src/app/domain/SlideField';
import { NumberField } from 'src/app/domain/NumberField';
import { ImageField } from 'src/app/domain/ImageField';
import { SignatureField } from 'src/app/domain/SignatureField';
import { DropdownWithChildren } from 'src/app/domain/DropdownWithChildren';
import { BooleanWithChildrenField } from 'src/app/domain/BooleanWithChildrenField';
import { DropdownField } from 'src/app/domain/DropdownField';
import { CheckBoxField } from 'src/app/domain/CheckBoxField';
import { ChecklListField } from 'src/app/domain/ChecklListField';

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

      case "dropdownwithchildren":
        field = new DropdownWithChildren();
        break;

      case "boolwithchildren":
        field = new BooleanWithChildrenField();
        break;

      case "dropdown":
        field = new DropdownField();
        break;

      case "checkbox":
        field = new CheckBoxField();
        break;

      case "checklist":
        field = new ChecklListField();
        break;
    }

    return field;
  }
}
