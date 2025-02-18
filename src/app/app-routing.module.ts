import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailProdComponent } from './detail-prod/detail-prod.component';
import { LoginComponent } from './login/login.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

const routes: Routes = [
  {path:'products',component:HomeComponent},
  {path:'residences',component:ResidencesComponentComponent},
  {path:'detail/:id',component:DetailProdComponent},
  {path:'login',component:LoginComponent},
  {path:'/addResidence',component:AddResidenceComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
