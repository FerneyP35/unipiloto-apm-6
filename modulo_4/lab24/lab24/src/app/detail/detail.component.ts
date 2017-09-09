import { Component, OnInit, Input } from '@angular/core';
import { Estudiante } from '../models/estudiante';

@Component({
  selector: 'estudiante-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

	 @Input()
    estudiante: Estudiante;

}
