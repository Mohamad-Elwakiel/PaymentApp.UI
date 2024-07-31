import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentDetailServiceService } from '../shared/payment-detail-service.service';
import { Login, responeModel } from '../interfaces/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = this.service.isLoggedIn;
  LogInFrom = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    
  });
  LoginUser() {
    const postData = { ...this.LogInFrom.value };
    this.service.loginUser(postData as Login).subscribe(
      (respone: responeModel) => {
        console.log(respone);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login Successful',
        });
        localStorage.setItem('token', respone.jwtToken);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('refreshToken', JSON.stringify(respone.refreshToken));
        this.router.navigate(['payemnt-details']);
        this.isLoggedIn = true;
      },
      (error) => {
        console.log(error),
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong',
          });
      }
    );
  }
  constructor(
    private fb: FormBuilder,
    private service: PaymentDetailServiceService,
    private messageService: MessageService,
    private router: Router
  ) {}

  get email() {
    return this.LogInFrom.controls['email'];
  }
  get password() {
    return this.LogInFrom.controls['password'];
  }
  ngOnInit() {}
}
