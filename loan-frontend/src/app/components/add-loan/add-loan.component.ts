import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan.model';
import {LoanService } from 'src/app/_services/loan.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  loan: Loan = {
    type: '',
    amount: 0,
    interest:'',
    duration: ''
  };
  submitted = false;

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
  }

  saveLoan(): void {
    const data = {
      type: this.loan.type,
      amount: this.loan.amount,
      interest:this.loan.interest,
      duration:this.loan.duration
    };

    this.loanService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newLoan(): void {
    this.submitted = false;
    this.loan = {
      type: '',
      amount: 0,
      interest: '',
      duration: ''
    };
  }

}
