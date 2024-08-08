// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrPhone: string = '';
  password: string = '';
  message: string = '';

  constructor(private http: HttpClient) { }

  login() {
    this.http.get<any[]>('api/users').subscribe(users => {
      const user = users.find(u => (u.email === this.emailOrPhone || u.phone === this.emailOrPhone) && u.password === this.password);
      if (user) {
        this.message = 'Login successful!';
      } else {
        this.message = 'Invalid email/phone number or password.';
      }
    });
  }
}
