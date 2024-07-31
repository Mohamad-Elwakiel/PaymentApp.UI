import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentDetailServiceService } from '../shared/payment-detail-service.service';
import { resetPassowrd } from '../interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm = this.fb.group({
    password:['',Validators.required],
    confirmPassword:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    token : localStorage.getItem('token')?.toString(),
  });
  constructor(private fb: FormBuilder,private service:PaymentDetailServiceService,
    private messageService : MessageService, private router : Router
  ) { }

  resetPassword(){
    const postData = {...this.resetPasswordForm.value};
    this.service.resetPassword(postData as resetPassowrd).subscribe(
      (respone: any) => {
        console.log(respone);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Password Reset Successful',
        });
        this.router.navigate(['Login']);
      },
      (error) => {
        console.log(error),
        console.log(postData.token);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong',
          });
      }
    );
  }

  get password() {
    return this.resetPasswordForm.controls['password'];
  }
  get   confirmPassword() {
    return this.resetPasswordForm.controls['confirmPassword'];
  }
  get email() {
    return this.resetPasswordForm.controls['email'];
  }
  ngOnInit() {
  }

}
