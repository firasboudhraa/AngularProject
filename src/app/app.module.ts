import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AddProductComponent } from './add-product/add-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidencesComponentComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailProdComponent,
    LoginComponent,
    AddResidenceComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
