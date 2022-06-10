import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import axios from 'axios';
import { Client } from '../client';
import {Owner} from '../owner';
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
