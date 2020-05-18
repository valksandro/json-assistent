import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { MainModule } from './components/main/main.module';
import { SearchJsonComponentModule } from './components/search-json/search-json.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SearchJsonComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
