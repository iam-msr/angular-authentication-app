// src/app/login/login.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // emailOrPhone: string = '';
  email: string = '';
  password: string = '';
  message: string = '';
  user_name: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const emailOrPhone = params['email'] || params['mobileNo'];
      if (params['email']) {
        this.email = params['email'];
      } 
      if (emailOrPhone) {
        // Fetch the user name using the email or phone number
        this.userService.getUserByEmailOrPhone(emailOrPhone).subscribe(user => {
          if (user) {
            this.user_name = user.name; // Set user_name from the fetched data
            this.email = user.email; // Set email from the fetched data
          } else {
            this.message = 'User not found';
          }
        }, error => {
          this.message = 'An error occurred while fetching user details';
        });
      }
    });
  }

  login() {
    if (!this.email || !this.password) {
      this.message = 'Please enter both email and password.';
      return;
    }

    this.userService.login(this.email, this.password).subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard'], { queryParams: { name: user.name } });
      } else {
        this.message = 'Incorrect password. Please try again.';
      }
    }, error => {
      this.message = 'An error occurred. Please try again later.';
    }
  );
  }
}
