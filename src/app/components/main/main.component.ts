import { Field } from '../../domain/field';
import { SearchJsonComponent } from '../search-json/search-json.component';
import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { KeyValue } from '@angular/common';
import { TextField } from 'src/app/domain/TextField';
import { FieldService } from './service/field.service';



@Component({
  selector: 'app-server',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
  
  displayDialog: boolean;

  field: Field = {};

  public selected: Field;
  public selectedField: Field;

  newCar: boolean;

  fields: Field[] = [];

  cols: any[];
  downloadJsonHref: any;
  file: any;
  fieldSelected: any;

  constructor(private sanitizer: DomSanitizer, private fieldService: FieldService) { }

  ngOnInit() {
      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'type', header: 'Type' }
      ];

      this.writeFile();
  }

  writeFile() {
    let obj = {
      firstName: "steven",
      lasName: "Hancock",
      score: 80
    }

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

  generateJson() {
    var theJSON = JSON.stringify(this.file);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

  onFileUpload(file) {
    this.file = file;
  }

  selectField(field) {
    this.fieldSelected = field;
  }

  changeValue(property, event) {
    this.fieldSelected[property.key] = event.target.value;
  }

  addField(index: number, fieldData) {
    const field = this.fieldService.createField(fieldData.type);
    field.fieldName = fieldData.name;
    field.type = fieldData.type;
    this.file.fields.splice(index, 0, field);
  }
}
