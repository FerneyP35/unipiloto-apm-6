import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {EstudiantesDetailComponent} from '../pages/detail.component';
import {ProfesoresDetailComponent} from '../pages/detail.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesDetailComponent,
    ProfesoresDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }