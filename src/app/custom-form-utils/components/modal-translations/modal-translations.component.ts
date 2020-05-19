import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Modal } from 'src/app/ar-modal/components';

@Component({
  selector: 'modal-translations',
  templateUrl: './modal-translations.component.html',
  styleUrls: ['./modal-translations.component.css']
})
export class ModalTranslationsComponent implements OnInit {

  form: FormGroup;
  @ViewChild('modalChildren') modalChildren:Modal
  @Input('labels') labels;

  constructor(private formBuilder: FormBuilder,
    ) { 
      this.form = this.formBuilder.group({
        group: null,
        orderResume: null,
        groupResume: null,
        fieldName: null,
        label: null,
        type: null,
        display: null,
        required: null,
        mask: null,
        editable: null,
        size: null,
        capitalization: null,
      });
    }

  ngOnInit(): void {
  }

  ngOnChanges() {
    const child = this.labels;
    this.form.patchValue({
      group: child.group,
      orderResume: child.orderResume,
      groupResume: child.groupResume,
      fieldName: child.fieldName,
      label: child.label,
      type: child.type,
      display: child.display,
      required: child.required,
      mask: child.mask,
      editable: child.editable,
      size: child.size,
      capitalization: child.capitalization,
    })
  }
  
  open(): void{
    this.modalChildren.open();
  }

  save() {
    this.labels = this.form.value;
    this.modalChildren.close();
  }

  public setChild(child) {
    this.labels = child;
  }
}