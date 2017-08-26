import { Component, Input } from '@angular/core';
import { Estudiantes } from '../models/estudiantes';
import { Profesores } from '../models/profesores';

@Component({
  selector: 'estudiante-detail',
  templateUrl: './detail.component.html'
})

export class EstudiantesDetailComponent {
  @Input()
  estudiante: Estudiantes;
}

@Component({
  selector: 'profesor-detail',
  templateUrl: './detail.component.html'
})

export class ProfesoresDetailComponent {
  @Input()
  profesor: Profesores;
}