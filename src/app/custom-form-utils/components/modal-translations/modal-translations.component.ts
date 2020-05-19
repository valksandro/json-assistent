import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Modal } from 'src/app/ar-modal/components';
import { Translation } from 'src/app/components/main/model/Translation';

@Component({
  selector: 'modal-translations',
  templateUrl: './modal-translations.component.html',
  styleUrls: ['./modal-translations.component.css']
})
export class ModalTranslationsComponent implements OnInit {

  form: FormGroup;
  @ViewChild('modalTranslations') modalTranslations:Modal
  @Input('labels') labels;
  public translations: Array<Translation> = []; 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.labels.forEach(label => {
      this.translations.push(new Translation(label));
    });
  }
  
  open(): void{
    this.modalTranslations.open();
  }

  save() {
    this.labels = this.form.value;
    this.modalTranslations.close();
  }

  public setChild(child) {
    this.labels = child;
  }
}