import { Field } from './../../domain/field';

import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-field-properties',
  templateUrl: './field-properties.component.html',
  styleUrls: ['./field-properties.component.css']
})
export class FieldPropertiesComponent implements OnInit {
  props = ['triggers', 'items', 'children'];
  boolValues =[
    {label: 'true', value: true},
    {label: 'false', value: false}
  ];
  fields: {name:string, value:any}[] = [];
  
  @Input() 
  set selectedField(field:Field){
    this.fields = [];
    for(let prop in field.jsonObject[0]){
      if(!this.props.includes(prop)){
        this.fields.push({'name':prop, 'value':field.jsonObject[0][prop]});
      }
    }
  }

  constructor() { }

  ngOnInit() {
    console.log('This if the value for user-id: ' + this.selectedField);
  }
}


