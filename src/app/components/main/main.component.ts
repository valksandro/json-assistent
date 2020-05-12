import { Field } from '../../domain/field';
import { SearchJsonComponent } from '../search-json/search-json.component';
import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';



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
  downloadJsonHref: any;

  constructor(private sanitizer: DomSanitizer) { }

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

  onFileUpload(file) {
    var theJSON = JSON.stringify(file);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

}
