import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewFieldComponent } from './components/modal-new-field/modal-new-field.component';
import { ModalModule } from '../ar-modal/components';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModalNewFieldComponent],
  exports: [ModalNewFieldComponent],
  imports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule
  ]
})
export class CustomFormUtilsModule { }
