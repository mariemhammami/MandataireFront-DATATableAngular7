import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error;
  registerUserData = {};
  constructor(private router: Router, private auth: LoginService) { }

  ngOnInit() {
  }
  registerUser() {
    this.auth.registrationUser(this.registerUserData)
      .subscribe(
        res => {
          console.log(this.registerUserData);
          this.router.navigate(['/login']);
        });
  }
}
