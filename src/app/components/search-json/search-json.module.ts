import { SearchJsonComponent } from './search-json.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule} from 'primeng/table';
import { DropdownModule} from 'primeng/dropdown';
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
  ],
  exports: [
    SearchJsonComponent
  ],
  declarations: [SearchJsonComponent]
})
export class SearchJsonComponentModule {}