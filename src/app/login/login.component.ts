import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    let login = document.getElementById("login") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;

    var data = JSON.stringify({
      "login": login?.value,
      "passwd" : password?.value,
      "address" : {}
    })



    let self = this;
    var config = {
      method: 'post',
      url: 'http://localhost:5136/client/api',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      localStorage.setItem('authToken',response.data['token']);
      localStorage.setItem('id',response.data['id']);
      localStorage.setItem('clientName', response.data['name']);

      self.router.navigate(['']);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
      localStorage.removeItem('authToken');
    });



    var config2 = {
      method: 'post',
      url: "http://localhost:5136/owner/api",
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    let self2 = this;
    axios(config2)
    .then(function (response) {
      localStorage.setItem('authTokenOwner',response.data['token']);
      localStorage.setItem('id',response.data['id']);
      localStorage.setItem('ownerName', response.data['name']);
      
      self2.router.navigate(['']);
      console.log(JSON.stringify(response.data));
    }).catch(function (error) {
      console.log(error);
      localStorage.removeItem('authTokenOwner');
    });
  } 
}

