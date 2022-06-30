import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';
import { Purchase } from '../purchase';
import { Store } from '../store';
import axios from 'axios';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.css']
})
export class SalesDetailsComponent implements OnInit {

  
  purchases : [Purchase] | undefined;
  store: Store;

  constructor() {

    this.store = {
      name: "",
      cnpj: "",
    };
  }

  ngOnInit(): void {
    this.getOwnerStores();
  }

  async getOwnerStores(){
    let token = localStorage.getItem('authTokenOwner');
    var config = {
      method: 'get',
      url: 'http://localhost:5136/store/get',
      headers: {'Authorization': 'Bearer ' + token }
    };

    var instance = this;

    var response = await axios(config);

    instance.store = response.data;

    this.getOwnerSales(instance.store.cnpj);
  }

  getOwnerSales(cnpj : string){
    var config = {
      method: 'get',
      url: 'http://localhost:5136/purchase/get/store/' + cnpj,
      headers: { }
    };

    var instance = this;

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      instance.purchases = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  }


}
