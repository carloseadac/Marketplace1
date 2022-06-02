import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  titlePage = "Cliente"
  constructor() { }

  ngOnInit(): void {
    
  }
  
  save(){

    let name = document.getElementById("nome") as HTMLInputElement;
    let phone = document.getElementById("tel") as HTMLInputElement;
    let documento = document.getElementById("document") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let login = document.getElementById("login") as HTMLInputElement;
    let passwd = document.getElementById("passwd") as HTMLInputElement;
    let date_of_birth = document.getElementById("date_of_birth") as HTMLInputElement;

    let street =document.getElementById("rua") as HTMLInputElement;
    let state =document.getElementById("estado") as HTMLInputElement;
    let city =document.getElementById("cidade") as HTMLInputElement;
    let country =document.getElementById("pais") as HTMLInputElement;
    let postal_code =document.getElementById("cep") as HTMLInputElement;
  }
  

}
