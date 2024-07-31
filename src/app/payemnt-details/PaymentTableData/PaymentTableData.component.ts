import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';
import { PaymentDetailServiceService } from 'src/app/shared/payment-detail-service.service';
import { PaymentDetailModel } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-PaymentTableData',
  templateUrl: './PaymentTableData.component.html',
  styleUrls: ['./PaymentTableData.component.css']
})
export class PaymentTableDataComponent implements OnInit {
list:any[] = [];
items : MenuItem[] | undefined;
  constructor(public service : PaymentDetailServiceService) { }

  ngOnInit() : void{
    // this.service.refreshList()
    // .subscribe({
    //   next : any => {
    //     this.list = any as PaymentDetailModel[]
    //     // any further actions
    //     console.log("hello");
        
    //   },
    //   error : err => {console.log(err);
    //   }
      
    // });
    this.items =[
      {
        label : 'Payment Actions',
        items:
       [ {
          label : 'Submit Payment Details',
          routerLink : '/payemnt-details',
        },
      ],
       
        icon : 'pi pi-fw pi-plus',

      },
      {
        label : 'Home page',
        routerLink : '/home-screen', 
        icon : 'pi pi-fw pi-table', 
      },
      
    ]
}
Paginate($event:TableLazyLoadEvent)
{
  console.log($event);  
  let pageIndex = $event.first?  $event.rows? $event.first / $event.rows : 0: 0;
  
  this.service.paginatedList(pageIndex, $event.rows || 5).subscribe(
    {
      next : any => {
        this.list = any as PaymentDetailModel[]
      },
      error: err => {
        console.log(err);
      }
    }
  )
}
onDelete(id:number)
 {
  if(confirm('are you sure you want to delete this record?'))
    this.service.deletePaymentDetail(id).
    subscribe(
      {
        next : res =>
        {
              this.list = res as []
              window.location.reload();
        },
        error : err => {console.log(err)}
      }
    )
 }
 Search(SearchTerm:string)
 {
  this.service.searchPaymentDetail(SearchTerm).subscribe(
    {
      next : any => {
        this.list = any as PaymentDetailModel[]
      },
      error: any => {
        console.log(any);
      }
    }
  )
 }
}
