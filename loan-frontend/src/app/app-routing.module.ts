import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserBoardComponent } from './user-board/user-board.component';
import {CustomerBoardComponent } from './customer-board/customer-board.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import {LoanListComponent} from './components/loan-list/loan-list.component';
import {LoanDatailsComponent} from './components/loan-datails/loan-datails.component';
import {AddLoanComponent} from './components/add-loan/add-loan.component';
import {ViewLoansComponent} from './components/view-loans/view-loans.component';
import {ViewRequestsComponent} from './components/view-requests/view-requests.component';
import {CustomerHistoryComponent} from './components/customer-history/customer-history.component';
import {ProfileDetailsComponent} from './components/profile-details/profile-details.component';
import {UpdateProfileComponent} from './components/update-profile/update-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserBoardComponent },
  { path: 'customer', component: CustomerBoardComponent },
  { path: 'admin', component: AdminBoardComponent },
  { path: 'admin/loans', component: LoanListComponent },
  { path: 'loans/:id', component: LoanDatailsComponent },
  { path: 'admin/add', component: AddLoanComponent },
  { path: 'customer/viewloan', component: ViewLoansComponent },
  { path: 'admin/viewrequests', component: ViewRequestsComponent },
  { path: 'customer/viewhistory', component: CustomerHistoryComponent },
  { path: 'profile/:id', component: ProfileDetailsComponent },
  { path: 'profile/update/:id', component: UpdateProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
