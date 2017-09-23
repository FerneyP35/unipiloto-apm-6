import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class EstudianteDetalle {

	estudiante: Estudiante;

  constructor(public navCtrl: NavController) {

  }

}
