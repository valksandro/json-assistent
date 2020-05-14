import { FieldPropertiesModule } from '../field-properties/field-properties.module';
import { SearchJsonComponentModule } from '../search-json/search-json.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CustomFormUtilsModule } from 'src/app/custom-form-utils/custom-form-utils.module';
import { MainComponent } from './components/main/main.component';
import { DropdownItemsComponent } from './components/dropdown-items/dropdown-items.component';
import { FieldPropertiesComponent } from './components/field-properties/field-properties.component';
import { TriggersComponent } from './components/triggers/triggers.component';

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
    FieldPropertiesModule,
    PipesModule,
    CustomFormUtilsModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent, DropdownItemsComponent, FieldPropertiesComponent, TriggersComponent]
})
export class MainModule {}