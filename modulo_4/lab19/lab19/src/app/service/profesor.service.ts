import { Injectable } from '@angular/core';
import {Profesor} from "../models/profesor";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfesorService {

  private profesoresURI = 'http://localhost:3000/api/profesores';

    constructor(private http: Http) { }

    getProfesores(): Promise<Profesor[]> {
        return this.http.get(this.profesoresURI)
            .toPromise()
            .then(response => response.json().data as Profesor[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('A ocurrido un error', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
