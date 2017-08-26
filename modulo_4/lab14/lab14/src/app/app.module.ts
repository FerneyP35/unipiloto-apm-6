import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudiantesDetailComponent } from './detalleEstudiante/detalleEstudiante.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresDetailComponent } from './detalleProfesor/detalleProfesor.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { VehiculosDetailComponent } from './detalleVehiculo/detalleVehiculo.component';
import { ConductorComponent } from './conductor/conductor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstudianteComponent,
    ProfesorComponent,
    VehiculoComponent,
    ConductorComponent,
    EstudiantesDetailComponent,
    ProfesoresDetailComponent,
    VehiculosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
      provide: APP_BASE_HREF, useValue : '/'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
