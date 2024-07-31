import { Component, OnInit } from '@angular/core';
import { PaymentDetailModel } from 'src/app/shared/payment-detail.model';
import { PaymentDetailServiceService } from 'src/app/shared/payment-detail-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-payment-detail-from',
  templateUrl: './payment-detail-from.component.html',
  styles: [
  ]
})
export class PaymentDetailFromComponent implements OnInit {

items : MenuItem[] | undefined;
 
  userForm!: FormGroup;
  constructor(private fb: FormBuilder, private service : PaymentDetailServiceService,private messageService: MessageService) {
    this.userForm! = this.fb.group({
      cardOwnerName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      securityCode: ['', [Validators.required,
        this.cvvValidator]],

    });
    this.items =[
      
      {
        label : 'Home page',
        routerLink : '/home-screen', 
        icon : 'pi pi-home', 
        
        
      },
      {
        label : 'Payment Actions',
        items:
       [ {
          label : 'Payment Table',
          routerLink : '/payemnt-details/PaymentTableData',
        },
      ],
       
        icon : 'pi pi-spin pi-cog',

      },
      
    ]
  }
  cvvValidator(control:FormControl)
  {
    
    const value = control.value;
    if (value && !/^\d{3}$/.test(value)) {
      return { ['invalidCvv']: true };
    }
    return null;
    
  }
  onMonthDayInput(event: any) {
    const input = event.target as HTMLInputElement;
    let trimmedValue = input.value.replace(/[^0-9]/g, '');

    if (trimmedValue.length > 2) {
      trimmedValue = trimmedValue.slice(0, 2) + '/' + trimmedValue.slice(2);
    }

    input.value = trimmedValue;
  } 
  ngOnInit(): void {
    console.log("Hi");
    
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log("form submitted ! ", this.userForm.value);
      const userData = {
        cardOwnerName: this.userForm.value.cardOwnerName,
        cardNumber: this.userForm.value.cardNumber,
        expirationDate: this.userForm.value.expirationDate,
        securityCode : this.userForm.value.securityCode,

      };
      this.service.createUser(userData).subscribe(
        response=>{console.log("user created succesfully!",response)
          this.messageService.add({severity:'success', summary:'Success', detail:'User Created Successfully'});
          this.userForm.reset();

          
         
        },
        error=>{
          this.messageService.add({severity:'error', summary:'Error', detail:'Error Creating User'});
          console.log("Error creating user",error);
        }
      )
      
    }
    else {
      console.log("form is invalid");
    }
  }


}
