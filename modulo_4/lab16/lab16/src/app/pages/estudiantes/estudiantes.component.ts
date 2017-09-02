import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante';
import { EstudianteService } from '../../service/estudiante.service';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  //styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
	titleEstudiante: string = "Estudiantes";

	selected: Estudiante;

  	estudiantes: Estudiante[];

  	constructor(private estudianteService: EstudianteService)
  	{ }

  	getEstudiante() {
    this.estudianteService.getEstudiante().then(estudiante => this.estudiantes = estudiante);
  	}



  	ngOnInit() {
  	}

  	onSelect(estudiante: Estudiante){
    this.selected = estudiante;
  }

}


/*

import {Component, OnInit} from '@angular/core';
import { Product } from '../../models/product';
import {ProductsService} from "../../service/products.service";

@Component({
  selector: 'product-list-app',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  title: string = "los productos del Año";

  selected: Product;

  products: Product[];

  constructor(private productsService: ProductsService) {

  }

  getProducts() {
    this.productsService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }


  onSelect(product: Product){
    this.selected = product;
  }
}

*/