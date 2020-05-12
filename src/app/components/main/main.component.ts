import { Field } from '../../domain/field';
import { SearchJsonComponent } from '../search-json/search-json.component';
import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';



@Component({
  selector: 'app-server',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  displayDialog: boolean;

  field: Field = {};

  public selected: Field;
  public selectedField: Field;

  newCar: boolean;

  fields: Field[] = [];

  cols: any[];

  constructor() { }

  ngOnInit() {
      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'type', header: 'Type' }
      ];
  }

  onSetFields(fields: Field[]){
    this.fields = fields;
    this.selected = this.fields[0];
  }

  showDialogToAdd() {
      this.newCar = true;
      this.field = {};
      this.displayDialog = true;
  }

  save() {

  }

  delete() {

  }

  onRowSelect(event) {
      this.newCar = false;
      this.field = this.cloneField(event.data);
      this.selected = event.data; 
      this.displayDialog = true;
  }

  cloneField(c: Field): Field {
      let field = {};
      for (let prop in c) {
        field[prop] = c[prop];
      }
      return field;
  }

}
