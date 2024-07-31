import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';

import { provideToastr, ToastrModule } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { PayemntDetailsComponent } from './payemnt-details/payemnt-details.component';
import { PaymentDetailFromComponent } from './payemnt-details/payment-detail-from/payment-detail-from.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { PaymentTableDataComponent } from './payemnt-details/PaymentTableData/PaymentTableData.component';
import { AppRoutingModule } from './app--routing.module';
import { PaymentDetailServiceService } from './shared/payment-detail-service.service';
import { MenubarModule  } from 'primeng/menubar';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
@NgModule({
  declarations: [				
    AppComponent,
    PayemntDetailsComponent,
    PaymentDetailFromComponent,
    PaymentTableDataComponent,
      LoginComponent,
      RegisterComponent,
      HomeScreenComponent,
      ResetPasswordComponent,
      ResetPasswordComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    TableModule,
    PaginatorModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    ToastModule
  ],
  providers: [PaymentDetailServiceService,MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
