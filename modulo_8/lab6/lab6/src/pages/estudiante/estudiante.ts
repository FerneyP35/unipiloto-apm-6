import { Component } from '@angular/core';
import { IonicPage, NavController/*, NavParams*/ } from 'ionic-angular';
import { EstudianteDetallePage } from '../estudiante-detalle/estudiante-detalle';

/**
 * Generated class for the EstudiantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-estudiante',
  templateUrl: 'estudiante.html',
})

export class EstudiantePage {

	items = [];

	constructor(public nav: NavController)
	{
		this.items = [
		  {
		    'id': '1',
		    'edad': '35',
		    'nombre': 'Ferney',
		    'apellido': 'Pérez',
		    'clases': 'ss',
		    'grado': '4',
		    'grupo': 'ss'
		  },
		  {
		    'id': '2',
		    'edad': '25',
		    'nombre': 'Carlos',
		    'apellido': 'Alba',
		    'clases': 'hh',
		    'grado': '5',
		    'grupo': 'hh'
		  },
		  {
		    'id': '3',
		    'edad': '28',
		    'nombre': 'Alba',
		    'apellido': 'Ruiz',
		    'clases': 'jj',
		    'grado': '6',
		    'grupo': 'jj'
		  },
		]
	}

  openNavDetailsPage(item) {
    this.nav.push(EstudianteDetallePage, {item: item});
  }



}
