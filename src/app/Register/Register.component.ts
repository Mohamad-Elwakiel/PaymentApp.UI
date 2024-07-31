import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../shared/password-match.directive';
import { PaymentDetailServiceService } from '../shared/payment-detail-service.service';
import { User } from '../interfaces/auth';
import { MessageService } from 'primeng/api';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
     firstName : ['',[Validators.required]],
     lastName: ['',[Validators.required]], 
     email:['',[Validators.required,Validators.email]],
     dateOfBirth:['',[Validators.required]],  
     password:['',[Validators.required]],
     confirmPassword:['',[Validators.required]]
  },{
    validators:passwordMatchValidator  
  })
  

  onMonthDayYearInput(event: any) {
    const input = event.target as HTMLInputElement;
    let trimmedValue = input.value.replace(/[^0-9]/g, '');
 
    if (trimmedValue.length > 2) {
      trimmedValue = trimmedValue.slice(0, 2) + '/' + trimmedValue.slice(2);
    }
    input.value = trimmedValue;
    if (trimmedValue.length > 5) {
      trimmedValue = trimmedValue.slice(0, 5) + '/' + trimmedValue.slice(5);
    }
  
    input.value = trimmedValue;

  }
  submitDetails(){
   const postData = {...this.registerForm.value};
   this.service.registerUser(postData as User).subscribe(
    respone=>{console.log(respone)
      this.messageService.add({severity:'success', summary:'Success', detail:'Registration Successful'})
      this.router.navigate(['Login'])
    },
    error =>{console.log(error),
      this.messageService.add({severity:'error', summary:'Error', detail:'Something went wrong'})

    }
   )
  }
  constructor(private fb:FormBuilder, 
    private service:PaymentDetailServiceService,
     private messageService:MessageService,
    private router : Router) { }
 
  ngOnInit() {
  }

  get firstName() {
    return this.registerForm.controls['firstName'];
  }
  get lastName() {
    return this.registerForm.controls['lastName'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }
  get dateOfBirth() {
    return this.registerForm.controls['dateOfBirth'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

}
