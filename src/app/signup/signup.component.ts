import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  step: number = 1;
  user: any = {
    email: '',
    name: '',
    password: '',
    phone: '',
    organization: '',
    organizationId: '',
    designation: '',
    birthDate: '',
    city: '',
    pincode: ''
  };
  organizations: any[] = [];
  designations: string[] = ['Manager', 'Developer', 'Designer', 'QA'];
  message: string = '';
  inValidOrgId: boolean = false;
  isPincodeValid: boolean = true;
  submitted: boolean = false;

  constructor(private router: Router,private userService: UserService) { }

  nextStep() {
    this.submitted = true;
     
    if (this.step === 1) {
      if(!this.isValidEmail(this.user.email) || !this.isValidMobileNo(this.user.phone))
        {
          alert("Invalid Email or Phone Number");
          return;
        }

      // Validate required fields for step 1
      if (!this.user.email || !this.user.name || !this.user.password || !this.user.phone) {
        return; // Do not proceed if required fields are missing
      }

      // Call service to get organizations and proceed to step 2
      this.userService.getOrganizations().subscribe(orgs => {
        this.organizations = orgs;
        this.step = 2;
      });
    } else if (this.step === 2) {

      // Validate required fields for step 2
      if (!this.user.organization || !this.user.organizationId || !this.user.designation || !this.user.pincode) {
        return; // Do not proceed if required fields are missing
      }

      // Validate organization
      const validOrg = this.organizations.find(org => org.name === this.user.organization);
      if(!validOrg) {this.inValidOrgId = true; console.log("Invalid Organization"); return;}
      if (validOrg.id.toString()===this.user.organizationId) {
        
        // Proceed with signup
        this.userService.signup(this.user).subscribe(() => {
          this.inValidOrgId = false;
        });
        console.log(this.user);
        this.router.navigate(['/success']);
      } else {
        this.inValidOrgId = true;
        console.log("Invalid Organization ID");
      }
    }
  }

  back() {
    if (this.step > 1) {
      this.step--;
      this.submitted = false; // Reset submission state when going back
    }
  }

  validatePincode() {
    this.isPincodeValid = /^\d{6}$/.test(this.user.pincode);
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
