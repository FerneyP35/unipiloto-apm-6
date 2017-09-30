import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstudianteDetallePage } from './estudiante-detalle';

@NgModule({
  declarations: [
    EstudianteDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(EstudianteDetallePage),
  ],
})
export class EstudianteDetallePageModule {}
