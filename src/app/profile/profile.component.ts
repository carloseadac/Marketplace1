import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios';
import { Client } from '../client';
import {Owner} from '../owner';
import { Store } from '../store';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Token : String | null;
  TokenOwner : String | null;
  ClientName : String | null;
  OwnerName : String | null;
  client: Client;
  owner:Owner;
  store:Store;
  constructor(private route: ActivatedRoute) { 
    this.client = {
      name :  "",
      phone : "",
      email: "",
      passwd: "",
      login: "",
      date_of_birth: "",
      document: "",
    };
    this.owner = {
      name :  "",
      phone : "",
      email: "",
      passwd: "",
      login: "",
      date_of_birth: "",
      document: "",
    };
    this.store = {
      name: "",
      cnpj : ""
    }
    this.Token = localStorage.getItem('authToken');

    this.TokenOwner = localStorage.getItem('authTokenOwner');

    this.ClientName = localStorage.getItem('clientName');

    this.OwnerName = localStorage.getItem('ownerName');
  }

  ngOnInit(): void {
   
    let teirep=localStorage.getItem("authTokenOwner");
    let periet=localStorage.getItem("authToken");
    
    if(teirep==null){
      const clientId = Number(localStorage.getItem('id'));
      this.getClient(clientId);
    }
    else{
      const ownerId = Number(localStorage.getItem('id'));
      this.getOwner(ownerId);
      const Id = Number(localStorage.getItem('id'));
      this.getOwnerStores(Id)
    }
    
  }
  async getClient(id:number){
    var config = {
      method: 'get',
      url: 'http://localhost:5136/client/getID/' + id,
      headers: { }
    };

    var response = await axios(config);

    this.client = response.data;
    this.client.date_of_birth = this.client.date_of_birth.substring(0, 10).toString();
    let year = this.client.date_of_birth.substring(0,4).toString();
    let month = this.client.date_of_birth.substring(5,7).toString();
    let day = this.client.date_of_birth.substring(8,10).toString();
    this.client.date_of_birth = day + "/" + month + "/" + year
  }
  async getOwner(id:number){
    var config = {
      method: 'get',
      url: 'http://localhost:5136/owner/getID/' + id,
      headers: { }
    };

    var response = await axios(config);

    this.owner = response.data;

    this.owner.date_of_birth = this.owner.date_of_birth.substring(0, 10).toString();
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
  logout(){
    this.Token = null;
    this.TokenOwner = null;

    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenOwner');
    localStorage.removeItem('clientName');
    localStorage.removeItem('ownerName');
    localStorage.removeItem('id');
  }

  getData(){
    
  }

}
