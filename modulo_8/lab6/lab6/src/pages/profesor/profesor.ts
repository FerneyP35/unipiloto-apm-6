import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfesorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profesor',
  templateUrl: 'profesor.html',
})
export class ProfesorPage {

	/*profesores = [
	'Julian Valero',
	'Carlos Amaya',
	'Luis Becerra'
];*/

 	profesores = [
      {
        id: 1,
        edad: 33,
        nombre: "Juan",
        apellido: "Pérez",
        profesion: "Ingeniero",
        grados: 15,
        grupos: "a20"
      },
      {
        id: 1,
        edad: 35,
        nombre: "Alice",
        apellido: "Castro",
        profesion: "Arquitecto",
        grados: 1,
        grupos: "b10"
      },
      {
        id: 1,
        edad: 23,
        nombre: "Carlos Andres",
        apellido: "Memes",
        profesion: "Abogado",
        grados: 15,
        grupos: "v50"
      }
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(item: string) {
    console.log('ionViewDidLoad ProfesorPage');
  }

}
