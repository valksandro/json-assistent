import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from 'src/app/domain/field';


@Component({
  selector: 'app-search-json',
  templateUrl: './search-json.component.html',
  styleUrls: ['./search-json.component.css']
})
export class SearchJsonComponent implements OnInit {
  @Input() fields: Field[] = [];
  @Output() onSetfields = new EventEmitter();
  public fileName: String;
  jsonObject: Object;
  text: string;
  file: any;

  constructor() { }

  ngOnInit(): void {
  }

  openFile(){
    document.querySelector('input').click()
  }

  handle(e) {
    this.file = e.target.files[0];
    this.fileName = e.currentTarget.value;
    this.uploadDocument(this.file);
  }
  disabled: boolean = true;

  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.jsonObject = JSON.parse(fileReader.result.toString());
      this.fields = this.jsonObject['fields'].map(field => new Field(field['fieldName'], field['type'], this.jsonObject['fields'].filter(item=>item.fieldName == field['fieldName'])));
      this.onSetfields.emit(this.fields);
    }
    fileReader.readAsText(this.file);

    asdf
  }
}
