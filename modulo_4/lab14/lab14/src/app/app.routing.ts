import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {EstudianteComponent} from "./estudiante/estudiante.component";
import {ProfesorComponent} from "./profesor/profesor.component";
import {VehiculoComponent} from "./vehiculo/vehiculo.component";
import {ConductorComponent} from "./conductor/conductor.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component:  HomeComponent},
  { path: 'estudiante',  component:  EstudianteComponent},
  { path: 'profesor', component: ProfesorComponent },
  { path: 'vehiculo', component: VehiculoComponent },
  { path: 'conductor', component: ConductorComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}