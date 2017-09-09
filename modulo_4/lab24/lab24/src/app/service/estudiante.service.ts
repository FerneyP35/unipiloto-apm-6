import { Injectable } from '@angular/core';
import {Estudiante} from "../models/estudiante";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EstudianteService {

  private EstudiantesURI = 'http://localhost:3000/api/estudiantes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getEstudiante(): Promise<Estudiante[]> {
    return this.http.get(this.EstudiantesURI)
      .toPromise()
      .then(response => response.json().data as Estudiante[])
      .catch(this.handleError);
  }

  update(estudiante: Estudiante): Promise<Estudiante> {
    const url = `${this.EstudiantesURI}/${estudiante.id}`;
    return this.http
      .put(url, JSON.stringify(estudiante), {headers: this.headers})
      .toPromise()
      .then(() => estudiante)
      .catch(this.handleError);
  }

  create(nombre: string): Promise<Estudiante> {

    return this.http
      .post(this.EstudiantesURI, JSON.stringify({nombre: nombre}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('¡Ha courrido un error!', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
