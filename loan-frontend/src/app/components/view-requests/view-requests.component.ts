import { Component, OnInit } from '@angular/core';
import { Loanrequest } from 'src/app/models/loanrequest.model';
import { LoanService } from 'src/app/_services/loan.service';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  loanrequests?: Loanrequest[];
  currentLoanRequest?: Loanrequest;
  currentIndex = -1;
  public isViewable: boolean;
  public isClickable: boolean;
  
  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.retrieveRequests();
    this.isViewable = true;
    this.isClickable = true;
  }

  //get all loan requests to admin board
  retrieveRequests(): void {
    this.loanService.getAllRequests()
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

  refreshList(): void {
    this.retrieveRequests();
    this.currentLoanRequest = undefined;
    this.currentIndex = -1;
  }
  setActiveLoanRequest(loanRequest: Loanrequest, index: number): void {
    this.currentLoanRequest = loanRequest;
    this.currentIndex = index;
  }

  clicked = false;
  //approve loan request
  approveRequest(userId,loanId,loanRequestId): void {

    const data = {
      userId: userId,
      loanId: loanId,
      loanRequestId: loanRequestId,
      
    };

    this.isClickable = !this.isClickable;

    this.loanService.approveRequest(data)
    .subscribe(
      response => {
        console.log(response);
        alert('successfully approved!');

       },
      error => {
        console.log(error);
      }
    );
  }

  //decline loan request
  declineRequest(userId,loanId,loanRequestId): void {

    const data = {
      userId: userId,
      loanId: loanId,
      loanRequestId: loanRequestId
      
    };

    this.isViewable = !this.isViewable;

    this.loanService.declineRequest(data)
    .subscribe(
      response => {
        console.log(response);
        alert('successfully declined!');

       },
      error => {
        console.log(error);
      }
    );
  }

  //approve request by updatig status to true
  updateStatus(loanRequestId): void {
    this.loanService.updateStatus(loanRequestId, loanRequestId.status===true)
      .subscribe(
        response => {
          console.log(response);
         
        alert('successfully approved!');
         // this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }
}
