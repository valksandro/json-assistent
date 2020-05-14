import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Modal } from 'src/app/ar-modal/components';

@Component({
  selector: 'modal-children',
  templateUrl: './modal-children.component.html',
  styleUrls: ['./modal-children.component.css']
})
export class ModalChildrenComponent implements OnInit {

  form: FormGroup;
  @ViewChild('modalNewField') modalNewField:Modal
  @Output('confirm') confirm: EventEmitter<any> = new EventEmitter();
  @Input('child') child;

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
    const child = this.child;
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
    this.modalNewField.open();
  }

  onConfirm(){
    if(this.form.valid) {
      this.confirm.emit(this.form.value);
      this.modalNewField.close()
    }
      
  }
}