
import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan.model';
import { LoanService } from 'src/app/_services/loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  loans?: Loan[];
  currentLoan?: Loan;
  currentIndex = -1;
  type ='';

  constructor(private loanService: LoanService) { }



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

  //delete all loans
  removeAllLoans(): void {
    this.loanService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();
    },
    error => {
      console.log(error);
    });

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

}
