import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { EstudianteDetalle } from '../pages/home/home';
import {Estudiante} from '../models/estudiante';

const ESTUDIANTES: Estudiante[] = [
  {
    id: 1,
    edad: 35,
    nombre: "Ferney",
    apellido: "Pérez",
    clases: "ss",
    grado: 4,
    grupo: "ss"
  },
  {
    id: 2,
    edad: 25,
    nombre: "Carlos",
    apellido: "Alba",
    clases: "hh",
    grado: 5,
    grupo: "hh"
  },
  {
    id: 3,
    edad: 28,
    nombre: "Alba",
    apellido: "Ruiz",
    clases: "jj",
    grado: 6,
    grupo: "jj"
  }
];


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage:any = EstudianteDetalle;

  selected: Estudiante;

  estudiantes: Estudiante[] = ESTUDIANTES;

  onSelectEstudiante(estudiante: Estudiante){
    this.selected = estudiante;
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

