import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/_services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/models/loan.model';

@Component({
  selector: 'app-loan-datails',
  templateUrl: './loan-datails.component.html',
  styleUrls: ['./loan-datails.component.css']
})
export class LoanDatailsComponent implements OnInit {
  currentLoan: Loan = {
    type: '',
    amount: 0,
    interest: '',
    duration: ''
  };
  message = '';

  constructor(private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getLoan(this.route.snapshot.params.id);
  }

  //get loan by id
  getLoan(id: string): void {
    this.loanService.get(id)
      .subscribe(
        data => {
          this.currentLoan = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateLoan(): void {
    this.loanService.update(this.currentLoan.id, this.currentLoan)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteLoan(): void {
    this.loanService.delete(this.currentLoan.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/admin/loans']);
        },
        error => {
          console.log(error);
        });
  }
}
