import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';

const routes: Routes = [
  {path:'products',component:HomeComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'residences',component:ResidencesComponentComponent},
  {path:'detail/:id',component:DetailProdComponent},
  {path:'login',component:LoginComponent},
  {path:'add-residence',component:AddResidenceComponent},
  {path:'residenceDetail/:id',component:DetailResidenceComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
