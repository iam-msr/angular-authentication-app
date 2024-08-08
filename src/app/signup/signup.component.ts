// src/app/signup/signup.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  step: number = 1;
  user: any = {
    emailOrPhone: '',
    name: '',
    password: '',
    organization: '',
    designation: '',
    birthDate: '',
    city: '',
    pincode: ''
  };
  organizations: any[] = [];
  designations: string[] = ['Manager', 'Developer', 'Designer', 'QA'];
  message: string = '';
  isPincodeValid: boolean = true;

  constructor(private http: HttpClient) { }

  nextStep() {
    if (this.step === 1) {
      this.http.get<any[]>('api/organizations').subscribe(orgs => {
        this.organizations = orgs;
        this.step = 2;
      });
    } else if (this.step === 2) {
      const validOrg = this.organizations.find(org => org.name === this.user.organization);
      if (validOrg) {
        this.message = 'Signup successful!';
      } else {
        this.message = 'Unknown organization-id';
      }
    }
  }

  back() {
    if (this.step > 1) {
      this.step--;
    }
  }

  validatePincode() {
    this.isPincodeValid = /^\d{6}$/.test(this.user.pincode);
  }
}
