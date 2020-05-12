import { FieldPropertiesModule } from '../field-properties/field-properties.module';
import { SearchJsonComponentModule } from '../search-json/search-json.module';

import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    BrowserModule,
    TableModule,
    DropdownModule,
    HttpClientModule,
    SearchJsonComponentModule,
    FieldPropertiesModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent]
})
export class MainModule {}