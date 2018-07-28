import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoggedIn = false;
  constructor( private appService : AppService) { }
  
  // function
  login() : void{
    this.appService.obtainAccessToken();
  }

  ngOnInit() {
    this.isLoggedIn = this.appService.isLoggedIn();
  }

}
