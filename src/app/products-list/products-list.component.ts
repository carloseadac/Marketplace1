import { Component, OnInit } from '@angular/core';
import { Product } from  '../products';
import { TopBarComponent } from '../top-bar/top-bar.component';
import  axios  from 'axios';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  titlePage = "Produtos"

  products: [Product] | undefined;
  
  constructor() {
    
   }

  ngOnInit(): void {    
    this.getAllProducts();
  }
  async getAllProducts(){
    
    var config = {
      method: 'get',
      url: 'http://localhost:5136/product/getall',
      headers: { }
    };
    var instance = this;
    axios(config)
    .then(function (response) {
      instance.products = response.data;
    })
    .catch(function (error: any) {
      console.log(error);
    });
  }
}

