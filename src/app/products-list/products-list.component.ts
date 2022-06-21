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
  
  constructor() {}

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
      console.log(response.data)
      instance.products = response.data;
      console.log(instance.products)
    })
    .catch(function (error: any) {
      console.log(error);
    });
  }
  addWishList(IdStocks: Number){
    var data = JSON.stringify({
      id: IdStocks,
    })

    var config = {
      method: 'post',
      url: 'http://localhost:5136/wishList/register',
      headers: {
        Authorization:'Bearer '+ localStorage.getItem("authToken"),
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("O produto foi add a lista de desejos!");
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}

