import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'field-properties',
  templateUrl: './field-properties.component.html',
  styleUrls: ['./field-properties.component.css']
})
export class FieldPropertiesComponent implements OnInit {

  @Input("field") field;
  @Output("selectProperty") selectProperty = new EventEmitter;
  propertySelected: any;
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSelectProperty(property){
    this.selectProperty.emit(property);
    this.propertySelected = property;
  }

  changeValue(property, event) {
    if(this.getType(property) == "number")
      this.field[property.key] = Number.parseInt(event.target.value);
    else if(this.getType(property) == 'boolean')
      this.field[property.key] = event.target.value == "true" ? true : false;
    else
    this.field[property.key] = event.target.value
  }

  isSpecial(key) {
    const keys = ["items", "triggers", "children"];
    return keys.includes(key);
  }

  getType(property) {
    const result = typeof property.value;
    return result;
  }

}
