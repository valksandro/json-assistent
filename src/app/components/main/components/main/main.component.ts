import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { KeyValue } from '@angular/common';
import { FieldService } from '../../service/field.service';



@Component({
  selector: 'app-server',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }
  
  downloadJsonHref: any;
  file: any;
  fieldSelected: any;
  showOptionsField: boolean = false;
  dropdownItens = [];
  propertySelected: any;

  constructor(private sanitizer: DomSanitizer, private fieldService: FieldService) { }

  ngOnInit() {
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
    this.propertySelected = null;
  }

  selectProperty(property) {
    this.propertySelected = property;
  }

  changeValue(property, event) {
    this.fieldSelected[property.key] = event.target.value;
  }

  addField(index: number, fieldData) {
    const field = this.fieldService.createField(fieldData.type);
    field.fieldName = fieldData.name;
    field.type = fieldData.type;
    this.file.fields.splice(index, 0, field);
    this.fieldSelected = field;
  }

  showOptions() {
    this.showOptionsField = true;
  }

  removeField(field) {
    let fields = this.file.fields;
    const newFields = fields.filter(fld => fld != field);
    this.file.fields = newFields;
  }
}
