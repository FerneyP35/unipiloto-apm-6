import { Component } from '@angular/core';
import { IonicPage,/* NavController,*/ NavParams } from 'ionic-angular';

/**
 * Generated class for the EstudianteDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estudiante-detalle',
  templateUrl: 'estudiante-detalle.html',
})
export class EstudianteDetallePage {

	item;

  constructor(params: NavParams) {
  	this.item = params.data.item;
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad EstudianteDetallePage');
  }
*/
}