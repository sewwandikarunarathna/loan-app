import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { TokenStorageService } from '../_services/token-storage.service';
import { LoanService } from 'src/app/_services/loan.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: Profile[];
  currentUser : any;

  completed = false;
  isVisible = false;

  constructor(private token: TokenStorageService,
    private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.retrieveOneUserProfile(this.route.snapshot.params.userId);
  }

  //get customer's profiles to his dashboard
  retrieveOneUserProfile(userId: any): void {
    userId = this.currentUser.id;
    this.loanService.getEachUserProfile(userId)
    .subscribe(
      data => {
        this.profile = data;
        console.log(data);
        this.completed = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  buttonHide(): void{
    
    this.isVisible = !this.isVisible;
    localStorage.setItem('isVisible', JSON. stringify(this.isVisible));
  }

  // window.onload = function() {
  //   var isVisible = localStorage.getItem('isVisible');
  //   if(isVisible === 'true'){
  //     this.isVisible = !this.isVisible;
  //   }
  // }
  

}

