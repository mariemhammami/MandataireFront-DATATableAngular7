import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  public loginUserData = {};
  error: string;

  constructor( private router: Router, private auth:LoginService) { }

  ngOnInit() {
  }
  loginUser() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        console.log(res.token);
        this.router.navigate(['/dataTable']);
      },
       loginError => this.error =  '  Verify  your username or password !  ')
    ;
  }
}
