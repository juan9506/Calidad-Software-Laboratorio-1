import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  
  Login() {
    this.authService.login(this.email, this.password);
  }

}
