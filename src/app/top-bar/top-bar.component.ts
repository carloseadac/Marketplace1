import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios';
import { Client } from '../client';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() titulo = ""
    
  Token : String | null;
  Id : Number;
  TokenOwner : String | null;
  ClientName : String | null;
  OwnerName : String | null;

  client: Client;

  constructor() {
    this.Token = localStorage.getItem('authToken');

    this.Id = Number(localStorage.getItem('id'));

    this.TokenOwner = localStorage.getItem('authTokenOwner');

    this.ClientName = localStorage.getItem('clientName');

    this.OwnerName = localStorage.getItem('ownerName');

    this.client = {
      name :  "",
      phone : "",
      email: "",
      passwd: "",
      login: "",
      date_of_birth: "",
      document: "",
    };

   }

  

  ngOnInit(): void {
  }

  logout(){
    this.Token = null;
    this.TokenOwner = null;

    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenOwner');
    localStorage.removeItem('clientName');
    localStorage.removeItem('ownerName');
    localStorage.removeItem('id');
  }
}
