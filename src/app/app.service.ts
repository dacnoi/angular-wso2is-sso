import { Injectable } from '@angular/core';
// Import Http 
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// Get data asynchronously with Observable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { OAuthService } from 'angular2-oauth2';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private oAuthService : OAuthService
  ) { 
    this.oAuthService.loginUrl = 'https://localhost:9445/oauth2/authorize'; // <== Authorization Endpoint URL
    this.oAuthService.redirectUri = 'http://localhost:4200/infordetail';
    this.oAuthService.clientId = 'wq08YMr_v7hnRQQ5xa31w2tXfdca';
    this.oAuthService.scope = 'openid';
    this.oAuthService.oidc = true;
    this.oAuthService.issuer = 'https://localhost:9445/oauth2/token'; // <== Token Endpoint URL
    this.oAuthService.setStorage(sessionStorage);
    this.oAuthService.tryLogin({});
  }

  obtainAccessToken(): void{
    this.oAuthService.initImplicitFlow();
    console.log(this.oAuthService.getAccessToken);
  }

  isLoggedIn() : boolean{
    if(this.oAuthService.getAccessToken() === null){
      return false;
    }
    return true;
  }

  logOut() : void{
    this.oAuthService.logOut();
    location.reload();
  }

  getName() : string{
    let claims = this.oAuthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name; 
  }
}
