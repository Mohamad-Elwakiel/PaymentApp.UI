import { Component, OnInit } from '@angular/core';
import { PaymentDetailModel } from '../shared/payment-detail.model';
import { PaymentDetailServiceService } from '../shared/payment-detail-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payemnt-details',
  templateUrl: './payemnt-details.component.html',
  styles: [
  ]
})
export class PayemntDetailsComponent implements OnInit {
list:any[] = [];

constructor(private service: PaymentDetailServiceService)
{
  
}


ngOnInit(): void {
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
}
