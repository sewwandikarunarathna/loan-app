import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import {LoanService } from 'src/app/_services/loan.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile: Profile = {
    id:'',
    address:'',
    phoneNumber:'',
    nic:''
  };
  added = false;

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
  }

  saveProfileDetails(): void {
    const data = {
      userId:JSON.parse(localStorage.getItem('usertoken')).id,
      address: this.profile.address,
      phoneNumber: this.profile.phoneNumber,
      nic:this.profile.nic
    };

    this.loanService.createProfile(data)
    .subscribe(
      response => {
        console.log(response);
        this.added = true;
      },
      error => {
        console.log(error);
      }
    );
  }
}
