import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() titulo = ""
    
  Token : String | null;
  TokenOwner : String | null;
  ClientName : String | null;
  OwnerName : String | null;

  constructor() {
    this.Token = localStorage.getItem('authToken');

    this.TokenOwner = localStorage.getItem('authTokenOwner');

    this.ClientName = localStorage.getItem('clientName');

    this.OwnerName = localStorage.getItem('ownerName');

   }

  ngOnInit(): void {
  }
  logout(){
    this.Token = null;
    this.TokenOwner = null;

    localStorage.removeItem('authToken');
    localStorage.removeItem('authTokenOwner');
  }
}
