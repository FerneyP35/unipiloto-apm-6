import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'estudiante-detail',
  templateUrl: './estudiantes-detail.component.html',
  //styleUrls: ['./estudiantes-detail.component.css']
})

export class EstudiantesDetailComponent {

  @Input() 

  estudiante: Estudiante;

}


/*

import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent {
  @Input()
  product: Product;
}


*/