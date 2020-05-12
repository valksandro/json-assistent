import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Modal } from 'src/app/ar-modal/components';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'modal-new-field',
  templateUrl: './modal-new-field.component.html',
  styleUrls: ['./modal-new-field.component.css']
})
export class ModalNewFieldComponent implements OnInit {

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




