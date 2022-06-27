import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import axios from 'axios';

@Component({
  selector: 'app-purchase-details',
  templateUrl: './purchase-details.component.html',
  styleUrls: ['./purchase-details.component.css']
})
export class PurchaseDetailsComponent implements OnInit {

  products : [Product] |undefined;
  constructor() {
    
  }

  ngOnInit(): void {
    const clientId = Number(localStorage.getItem('id'));
    this.LoadPurchases(clientId);

    
  }

  LoadPurchases(id:number){
    var data = JSON.stringify({});

    var config = {
      method: 'get',
      url: 'http://localhost:5136/purchase/get/client',
      headers: {
        'Authorization': 'Bearer ' +  localStorage.getItem("authToken"),
      }
      ,
      data : data
      
    };
    let instance = this
    
    axios(config)
    .then(function (response) {
      instance.products = response.data
      console.log(response.data)
      
    })
    .catch(function (error) {
      console.log(error);
    });

    
  }

}
