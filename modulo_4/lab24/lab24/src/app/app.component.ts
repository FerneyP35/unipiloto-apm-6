import { Component } from '@angular/core';
import  {Estudiante} from './models/estudiante';
import {EstudianteService} from './service/estudiante.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Estudiantes";

  selected: Estudiante;

  estudiantes: Estudiante[];

  constructor(private estudianteService: EstudianteService) {

  }

  getEstudiante() {
    this.estudianteService.getEstudiante().then(estudiantes => this.estudiantes = estudiantes);
  }

  ngOnInit(): void {
    this.getEstudiante();
  }

  onSelect(estudiante: Estudiante){
    this.selected = estudiante;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.estudianteService.create(name)
      .then(estudiante => {
        this.estudiantes.push(estudiante);
        this.selected = null;
      })
      .catch(error => console.error(error));
  }
}
