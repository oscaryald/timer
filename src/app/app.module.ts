import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import {TimerService} from "./timer/timer.service";
import { AddZeroPipe } from './timer/add-zero.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    AddZeroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
