import { Component, OnInit } from '@angular/core';
import {products} from  '../products'
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  titlePage = "Products"

  products = products;
  
  constructor() { }

  ngOnInit(): void {
    
  }
}