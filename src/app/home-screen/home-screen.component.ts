import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(private router: Router) { }

  items : MenuItem[] | undefined;
  
  ngOnInit(): void {
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
        label : 'Logout',
        command: () => this.logout()
      }

    ]
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/Login']);
  }
  toSubmitPayment(){
    
    this.router.navigate(['/payemnt-details']);
  }
  toPaymentDataTable(){
    
    this.router.navigate(['/payemnt-details/PaymentTableData']);
  }

}
