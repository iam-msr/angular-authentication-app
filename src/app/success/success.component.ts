import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  countdown: number = 7; // Countdown starting at 7 seconds

  constructor(private router: Router) { }

  ngOnInit() {
    const intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(intervalId);
        this.router.navigate(['/login']);
      }
    }, 1000); // 1 second intervals
  }
}
