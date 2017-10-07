import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	public image: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  	}

  	public getPicture() {
  	const options: CameraOptions = {
	  quality: 100,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	}

  	this.camera.getPicture(options).then(imageData => {
 		this.image = 'data:image/jpeg;base64,' + imageData;
		}, err => {
			console.error(err);
	});
  }


  /*ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  */

}
