import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import { InMemoryEstudianteService } from './mock/in-memory-estudiante.service';
import { AppComponent } from './app.component';
import { EstudianteService } from './service/estudiante.service';

import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryEstudianteService)
  ],
  providers: [EstudianteService, InMemoryEstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
