import { Component, Input } from '@angular/core';
import { Profesores } from '../models/personas';

@Component({
  selector: 'profesor-detail',
  templateUrl: './detalleProfesor.component.html'
})

export class ProfesoresDetailComponent {
  @Input()
  profesor: Profesores;
}