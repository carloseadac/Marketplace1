import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    let login = document.getElementById("login") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;

    var data = JSON.stringify({
      "login": login.value,
      "passwd" : password.value
    })



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

      localStorage.setItem('authToken',response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  } 
}

