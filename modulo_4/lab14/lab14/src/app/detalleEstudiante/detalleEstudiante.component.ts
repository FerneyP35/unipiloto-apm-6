import { Component, Input } from '@angular/core';
import { Estudiantes } from '../models/personas';

@Component({
  selector: 'estudiante-detail',
  templateUrl: './detalleEstudiante.component.html'
})

export class EstudiantesDetailComponent {
  @Input()
  estudiante: Estudiantes;
}