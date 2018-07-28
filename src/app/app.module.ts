/**
 * author : noipd
 * email : noipd@fpt.com.vn
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component'
import { InforDetailComponent } from './infor-detail/infor-detail.component';

import { AppService } from './app.service';
import { OAuthService} from 'angular2-oauth2';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InforDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
     
  ],
  providers: [
    AppService,
    OAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
