import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-store-register',
  templateUrl: './store-register.component.html',
  styleUrls: ['./store-register.component.css']
})
export class StoreRegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  register(){
    let cnpj = document.getElementById("cnpj") as HTMLInputElement;
    let name = document.getElementById("name") as HTMLInputElement;

    var data = JSON.stringify({
      "cnpj": cnpj.value,
      "name" : name.value
    })



    var config = {
      method: 'post',
      url: 'http://localhost:5136/store/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
