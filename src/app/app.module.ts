import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { ShowCaseComponent } from './show-case/show-case.component'

@NgModule({
  declarations: [
    AppComponent,
    ShowCaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
