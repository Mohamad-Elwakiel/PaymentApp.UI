import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { PayemntDetailsComponent } from './payemnt-details/payemnt-details.component';
import { PaymentTableDataComponent } from './payemnt-details/PaymentTableData/PaymentTableData.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  {
    path: 'payemnt-details',
    component: PayemntDetailsComponent,
   
  },
  // otherwise redirect to home
  {  
    path:'payemnt-details/PaymentTableData',
    component:PaymentTableDataComponent
   },
   {
    path:'Login',
    component:LoginComponent
   },
   {
    path:'Register',
    component:RegisterComponent
   },
   {
    path:'home-screen',
    component:HomeScreenComponent
   },
   {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
   }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
