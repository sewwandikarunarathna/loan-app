import { Component, OnInit } from '@angular/core';
import { Loanrequest } from 'src/app/models/loanrequest.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/_services/loan.service';

@Component({
  selector: 'app-customer-history',
  templateUrl: './customer-history.component.html',
  styleUrls: ['./customer-history.component.css']
})
export class CustomerHistoryComponent implements OnInit {
  loanrequests?: Loanrequest[];
  

  constructor(private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveOneCustomerRequests(this.route.snapshot.params.userId);    
  }

  //get customer's request loans to his dashboard
  retrieveOneCustomerRequests(userId: any): void {
    userId = JSON.parse(localStorage.getItem('usertoken')).id;
    this.loanService.getAllOneCustomerRequests(userId)
    .subscribe(
      data => {
        this.loanrequests = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
