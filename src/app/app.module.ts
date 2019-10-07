import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ImprovedComponent } from './improved/improved.component';
import { OldwayComponent } from './oldway/oldway.component';

@NgModule({
  declarations: [
    AppComponent,
    ImprovedComponent,
    OldwayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
