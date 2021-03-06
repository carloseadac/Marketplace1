import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-store-register',
  templateUrl: './store-register.component.html',
  styleUrls: ['./store-register.component.css']
})
export class StoreRegisterComponent implements OnInit {


  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }
  register(){

    console.log(localStorage.getItem("authTokenOwner"))
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
        'Content-Type': 'application/json',      
        'Authorization': 'Bearer ' +  localStorage.getItem("authTokenOwner"),
      },
        data : data
    };
    let self = this;
    axios(config)
    .then(function (response) {
      console.log(data)
      self.router.navigate(['/owner/product/create'])
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
