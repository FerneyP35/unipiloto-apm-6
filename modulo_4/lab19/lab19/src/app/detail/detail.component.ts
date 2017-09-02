import { Component, OnInit, Input } from '@angular/core';
import { Profesor } from '../models/profesor';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

	 @Input()
    profesor: Profesor;

}
