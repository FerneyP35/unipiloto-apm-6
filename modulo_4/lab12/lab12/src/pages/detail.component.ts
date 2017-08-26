import { Component, Input } from '@angular/core';
import { Estudiantes } from '../models/estudiantes';

@Component({
  selector: 'estudiante-detail',
  templateUrl: './detail.component.html'
})

export class EstudiantesDetailComponent {
  @Input()
  estudiante: Estudiantes;
}