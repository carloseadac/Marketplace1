import { Component, OnInit } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../products'
import axios from 'axios';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  titlePage="Detalhes"
  product : Product | undefined
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const porductIdFromroute = Number(routeParams.get('productID'));
    
    var config = {
      method: 'get',
      url: 'http://localhost:5136/product/getall',
      headers: { },
    };
    
    var instance = this;
    axios(config)
    .then(function (response:any) {
      var products = response.data as Array<Product>;
      instance.product = products.find(p => p.id === porductIdFromroute)
    })
    .catch(function (error:any) {
      console.log(error);
    });
    

    //this.product = products.find(product => product.id === porductIdFromroute);
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

  makePurchase(){
    var data = JSON.stringify({
      "date_purchase": Date.now(),
      "payment_type": 2,
      "purchase_status": 2,
      "number_comfirmation": Math.random() * (10000 - 1) + 1,
      "number_nf": Math.random() * (10000 - 1) + 1,
      "products": {
        "bar_code": "12521142521252325",
      },
      "store": {
        "name": "Loja 1,99",
        "cnpj": "75878725",
      },
      "client": {
        "document": "753256842"
      },

    })

    var config = {
      method: 'post',
      url: 'http://localhost:5136/purchase/make',
      headers: {
        Authorization:'Bearer '+ localStorage.getItem("authToken"),
        'Content-Type': 'application/json',
      },
      data: data,
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("Compra realizada");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}