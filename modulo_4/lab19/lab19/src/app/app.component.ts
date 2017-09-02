import { Component } from '@angular/core';
import {ProfesorService} from './service/profesor.service';
import  {Profesor} from './models/profesor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	title: string = "Profesores";

    selected: Profesor;

    profesores: Profesor[];

    constructor(private profesorService: ProfesorService) {

    }

    getProfesores() {
        this.profesorService.getProfesores().then(profesores => this.profesores = profesores);
    }

    ngOnInit(): void {
        this.getProfesores();
    }

    onSelect(profesor: Profesor) {
        this.selected = profesor;
    }
}
