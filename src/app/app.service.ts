import { Injectable } from '@angular/core';
// Import Http 
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// Get data asynchronously with Observable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { OAuthService } from 'angular2-oauth2/oauth-service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public idtoken : string = '';
  public tokenkey : string = '';
  private actionUrl: string = 'http://localhost:3000/infor/';
  constructor(
    private oAuthService : OAuthService,
    private http : HttpClient
  ) { 
    this.oAuthService.loginUrl = 'https://10.14.166.4:9444/oauth2/authorize'; // <== Authorization Endpoint URL
    this.oAuthService.redirectUri = 'http://localhost:4200/infordetail';
    this.oAuthService.clientId = '2iFnKfffHh_xBH110Nv4Bc0Yq7ka';
    this.oAuthService.scope = 'openid';
    this.oAuthService.oidc = true;
    this.oAuthService.issuer = 'https://10.14.166.4:9444/oauth2/token'; // <== Tokexn Endpoint URL
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
  getIdToken() : string{
    this.idtoken =  this.oAuthService.getIdToken();
    return this.idtoken;
  }
  getToken() : string {
    if(this.oAuthService.getAccessToken() === null){
      return null;
    }
    return this.oAuthService.getAccessToken();
  }
  getInforFromRestApiNodeJs<T>(token : string) : Observable<T>{
    console.log(this.actionUrl+token);
    return this.http.get<T>(this.actionUrl+token);
  }
}
