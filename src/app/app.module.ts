import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {GnbComponent} from './gnb/gnb.component';
import {LnbComponent} from './lnb/lnb.component';
import {RnbComponent} from './rnb/rnb.component';


@NgModule({
  declarations: [
    AppComponent,
    GnbComponent,
    LnbComponent,
    RnbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
