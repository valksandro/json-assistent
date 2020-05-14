import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder,
    ) { 
      this.form = this.formBuilder.group({
        name: [null, Validators.required],
        type: [null, Validators.required],
      });
    }

  ngOnInit(): void {
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