import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Loan } from 'src/app/models/loan.model';
import { LoanService } from 'src/app/_services/loan.service';

@Component({
  selector: 'app-customer-board',
  templateUrl: './customer-board.component.html',
  styleUrls: ['./customer-board.component.css']
})
export class CustomerBoardComponent implements OnInit {

  
  loans?: Loan[];
  currentLoan?: Loan;
  currentIndex = -1;
  type ='';

  constructor(private userService: UserService,
              private loanService: LoanService) { }

  ngOnInit(): void {
    this.retrieveLoans();  
  }

   //loan list
   retrieveLoans(): void {
    this.loanService.getAll()
    .subscribe(
      data =>{
       this.loans= data;
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveLoans();
    this.currentLoan = undefined;
    this.currentIndex = -1;
  }

  setActiveLoan(loan: Loan, index: number): void {
    this.currentLoan = loan;
    this.currentIndex = index;
  }

  //find by type of loan
  searchType(): void {
    this.loanService.findByType(this.type)
    .subscribe(
      data => {
        this.loans = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  //request loan
  loanRequest(): void {

    const data = {
      userId: JSON.parse(localStorage.getItem('usertoken')).id,
      loanId: this.currentLoan.id
    };

    this.loanService.loanRequest(data)
    .subscribe(
      response => {
        console.log(response);
        alert('successfully requested!');
       
      },
      error => {
        console.log(error);
      }
    );
  }

}
