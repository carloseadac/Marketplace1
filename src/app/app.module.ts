import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { AddressRegisterComponent } from './address-register/address-register.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { StoreRegisterComponent } from './store-register/store-register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { PurchaseDetailComponent } from './purchase-detail/purchase-detail.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsListComponent,
    ProductDetailComponent,
    LoginComponent,
    AddressRegisterComponent,
    ClientRegisterComponent,
    StoreRegisterComponent,
    WishlistComponent,
    PurchaseDetailsComponent,
    PurchaseDetailComponent,
    SalesDetailsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component : ProductsListComponent},
      {path: 'product/:productID', component: ProductDetailComponent},
      {path: 'client/address/register', component: AddressRegisterComponent},
      {path: 'client/register', component: ClientRegisterComponent},
      {path: 'client/login', component: LoginComponent},
      {path: 'store/register', component: StoreRegisterComponent},
      {path: 'client/wishlist', component: WishlistComponent},
      {path: 'client/profile', component:ProfileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }