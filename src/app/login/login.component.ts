import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Login(){
    var email = (<HTMLInputElement>document.getElementById("email")).value
    var password = (<HTMLInputElement>document.getElementById("password")).value

    if(email == 'admin@gmail.com' && password == 'Admin123'){
      this.router.navigate(['form'])
    }else{
      alert('Invalid Credentials')
    }
  }

}
