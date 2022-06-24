import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {Store} from '../store';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {

  store: Store;

  constructor() {

    this.store = {
      name: "",
      cnpj: "",
    };
   }

  ngOnInit(): void {
    const Id = Number(localStorage.getItem('id'));
    this.getOwnerStores(Id)
  }
  async getOwnerStores(id:number){
    var config = {
      method: 'get',
      url: 'http://localhost:5136/store/getID/' + id,
      headers: { }
    };

    var response = await axios(config);

    this.store = response.data;

  }
  insertStock(){
    let quantity = document.getElementById("quantity") as HTMLInputElement;
    let unit_price = document.getElementById("unit_price") as HTMLInputElement;
    let cnpj = this.store.cnpj;
    let bar_code = document.getElementById("bar_code") as HTMLInputElement;
    

    var data = JSON.stringify({
      "quantity": quantity?.value,
      "unit_price": unit_price?.value,
      "store": {
        "cnpj": cnpj,
        "owner": {
          "address": {}
        }
      },
      "product": {
        "bar_code": bar_code?.value,
      }
    })

    console.log(quantity, unit_price, cnpj, bar_code);

    var config = {
      method: 'post',
      url: 'http://localhost:5136/stock/add',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert("Registrado com sucesso em Stock!");
    })
    .catch(function (error) {
      alert("erro");
      console.log(error);
    });
  }

  register(){
    let nome = document.getElementById("name") as HTMLInputElement;
    let bar_code = document.getElementById("bar_code") as HTMLInputElement;
    let description = document.getElementById("description") as HTMLInputElement;
    let img = document.getElementById("img") as HTMLInputElement;
    

    var data = JSON.stringify({
      "name": nome?.value,
      "bar_code": bar_code?.value,
      "description": description?.value,
      "image": img?.value,
    })

    var config = {
      method: 'post',
      url: 'http://localhost:5136/product/create',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      alert("Registrado com sucesso em Product!");
    })
    .catch(function (error) {
      console.log(error);
    });
    this.insertStock();
}

}