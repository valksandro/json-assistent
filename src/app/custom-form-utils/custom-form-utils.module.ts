import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNewFieldComponent } from './components/modal-new-field/modal-new-field.component';
import { ModalModule } from '../ar-modal/components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalChildrenComponent } from './components/modal-children/modal-children.component';



@NgModule({
  declarations: [ModalNewFieldComponent, ModalChildrenComponent],
  exports: [ModalNewFieldComponent, ModalChildrenComponent],
  imports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomFormUtilsModule { }
