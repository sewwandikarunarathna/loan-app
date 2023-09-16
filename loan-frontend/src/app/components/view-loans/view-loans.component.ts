import { Component, OnInit } from '@angular/core';
import { Loan } from 'src/app/models/loan.model';
import { LoanService } from 'src/app/_services/loan.service';

@Component({
  selector: 'app-view-loans',
  templateUrl: './view-loans.component.html',
  styleUrls: ['./view-loans.component.css']
})
export class ViewLoansComponent implements OnInit {
  loans?: Loan[];
  type ='';
  amount ='';
  interest ='';
  duration ='';

  
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
}
