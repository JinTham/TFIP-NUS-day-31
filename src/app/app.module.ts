import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component.component';
import { AppCounterComponent } from './components/app-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    AppCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
