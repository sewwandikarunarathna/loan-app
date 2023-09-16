import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { CustomerBoardComponent } from './customer-board/customer-board.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { AuthInterceptorProviders } from './_helpers/auth.interceptor';
import { AddLoanComponent } from './components/add-loan/add-loan.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { LoanDatailsComponent } from './components/loan-datails/loan-datails.component';
import { ViewLoansComponent } from './components/view-loans/view-loans.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';
import { CustomerHistoryComponent } from './components/customer-history/customer-history.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminBoardComponent,
    CustomerBoardComponent,
    UserBoardComponent,
    AddLoanComponent,
    LoanListComponent,
    LoanDatailsComponent,
    ViewLoansComponent,
    ViewRequestsComponent,
    CustomerHistoryComponent,
    ProfileDetailsComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
