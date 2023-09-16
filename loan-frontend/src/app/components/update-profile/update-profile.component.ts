import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/_services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  currentProfile: Profile = {
    address:'',
    phoneNumber:'',
    nic:''
  };
  message = '';

  constructor(private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    
    this.getProfile(this.route.snapshot.params.id);
    
  }

  //get profile by id
  getProfile(id: string): void {
    console.log(id);
    
    this.loanService.getProfile(id)
      .subscribe(
        data => {
          this.currentProfile = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  //update profile data
  updateProfile(): void {
    this.loanService.updateProfileData(this.currentProfile.id, this.currentProfile)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

}
