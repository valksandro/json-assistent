import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Modal } from 'src/app/ar-modal/components';

@Component({
  selector: 'modal-new-field',
  templateUrl: './modal-new-field.component.html',
  styleUrls: ['./modal-new-field.component.css']
})
export class ModalNewFieldComponent implements OnInit {

  @ViewChild('modalDelete') modalDelete:Modal

  @Output('confirm') confirm: EventEmitter<any> = new EventEmitter();

  constructor(){ }

  ngOnInit(): void {
  }
  
  open(): void{
    this.modalDelete.open();
  }

  onDelete(){
    this.confirm.emit();
  }
}
