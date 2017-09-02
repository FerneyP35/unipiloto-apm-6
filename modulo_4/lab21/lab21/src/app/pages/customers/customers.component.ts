import { Component, OnInit } from '@angular/core';
import {Customer} from "../../models/customer";
import {CustomersService} from "../../services/customers.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string = 'Clientes';
  
  //selected: Customer;

  customers: Customer[];


/////  customers: customer[];

  constructor(private customersService: CustomersService){}

  getCustomers() {
    this.customersService.getCustomers().then(customers => this.customers = customers);
  }

  ngOnInit(){
    this.getCustomers();
  }
/*
   onSelect(customer: Customer){
    this.selected = customer;
  }

  gotoDetail(): void {
    this.router.navigate(['sales-invoice/customer/detail/', this.selected.id]); 
  }
*/
}
