import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  titlePage = "Cliente"
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  
  save(){

    let name = document.getElementById("name") as HTMLInputElement;
    let phone = document.getElementById("phone") as HTMLInputElement;
    let documento = document.getElementById("document") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let login = document.getElementById("login") as HTMLInputElement;
    let passwd = document.getElementById("passwd") as HTMLInputElement;
    let date_of_birth = document.getElementById("date_of_birth") as HTMLInputElement;

    let street =document.getElementById("street") as HTMLInputElement;
    let state =document.getElementById("state") as HTMLInputElement;
    let city =document.getElementById("city") as HTMLInputElement;
    let country =document.getElementById("country") as HTMLInputElement;
    let postal_code =document.getElementById("postal_code") as HTMLInputElement;
  
    var data = JSON.stringify({
      "name" : name?.value,
      "phone" : phone?.value,
      "document" : documento?.value,
      "email" : email?.value,
      "login" : login?.value,
      "passwd" : passwd?.value,
      "date_of_birth" : date_of_birth?.value,
      "address" : {
        "street" : street?.value,
        "state" : state?.value,
        "city" : city?.value,
        "country" : country?.value,
        "postal_code" : postal_code?.value

      }

    
    })

    let self = this;
    var config = {
      method: 'post',
      url: 'http://localhost:5136/client/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data

    }
    axios(config)
    .then(function (response) {
      self.router.navigate(['client/login'])
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
  

}
