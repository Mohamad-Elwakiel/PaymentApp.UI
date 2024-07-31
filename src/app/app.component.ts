import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginComponent } from './Login/Login.component';
import { PaymentDetailServiceService } from './shared/payment-detail-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent  implements OnInit{
  title = 'PaymentApp';
  constructor(private router: Router,private service:PaymentDetailServiceService) {
    
  }
loggedIn = this.service.isLoggedIn;
items : MenuItem[] | undefined;
  
  ngOnInit(): void {
    console.log(this.loggedIn);
    this.items =[
      {
        label : 'Payment Actions',
        items:
       [ {
          label : 'Submit Payment Details',
          routerLink : '/payemnt-details',
        },
      {
        label : 'Payment Table',
        routerLink:'/payemnt-details/PaymentTableData',
      }],
       
        icon : 'pi pi-fw pi-plus',

      },
      {
        label : 'Payment Table',
        routerLink : '/payemnt-details/PaymentTableData', 
        icon : 'pi pi-fw pi-table', 
      },
      {
        label : 'Login',
        routerLink : '/Login', 
        icon : 'pi pi-fw pi-table',
      },
      {
        label : 'Register',
        routerLink : '/Register', 
        icon : 'pi pi-fw pi-table',
      }
    ]
  }
  toSubmitPayment(){
    
    this.router.navigate(['/payemnt-details']);
  }
  toPaymentDataTable(){
    
    this.router.navigate(['/payemnt-details/PaymentTableData']);
  }
}
