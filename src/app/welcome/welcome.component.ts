import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  email: string = '';
  mobileNo: string = '';

  constructor(private router: Router, private userService: UserService) { }

  next() {
    // Determine if the input is an email or mobile number
    if (this.email && this.isValidEmail(this.email)) {
      // Check if the email exists
      this.userService.checkUser(this.email).subscribe(user => {
        
        if (user) {
          // If the user exists, navigate to login
          this.router.navigate(['/login'], { queryParams: { email: this.email } });
        } else {
          // If the user does not exist, navigate to signup
          this.router.navigate(['/signup'], { queryParams: { email: this.email } });
        }
      });
    } else if (this.mobileNo && this.isValidMobileNo(this.mobileNo)) {
      // Check if the mobile number exists
      this.userService.checkUser(this.mobileNo).subscribe(user => {
        if (user) {
          // If the user exists, navigate to login
          this.router.navigate(['/login'], { queryParams: { mobileNo: this.mobileNo } });
        } else {
          // If the user does not exist, navigate to signup
          this.router.navigate(['/signup'], { queryParams: { mobileNo: this.mobileNo } });
        }
      });
    } else {
      // Handle case where neither email nor mobile number is valid
      alert("Please enter a valid email address or mobile number.");
    }
  }

  // Utility methods for validation
  isValidEmail(email: string): boolean {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidMobileNo(mobileNo: string): boolean {
    // Basic mobile number validation: checks if it's a number and has 10 digits
    const mobileNoRegex = /^\d{10}$/;
    return mobileNoRegex.test(mobileNo);
  }
}
