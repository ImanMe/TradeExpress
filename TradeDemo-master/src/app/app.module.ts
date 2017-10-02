import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";



import { AppComponent } from './app.component';

import { Ng2CompleterModule } from 'ng2-completer';
import { TypeHeadDemoComponent } from './type-head-demo/type-head-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeHeadDemoComponent
  ],
  imports: [
    BrowserModule,
    Ng2CompleterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
