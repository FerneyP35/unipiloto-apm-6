import { Component, Input } from '@angular/core';
import { Vehiculos } from '../models/personas';

@Component({
  selector: 'vehiculo-detail',
  templateUrl: './detalleVehiculo.component.html'
})

export class VehiculosDetailComponent {
  @Input()
  Vehiculo: Vehiculos;
}