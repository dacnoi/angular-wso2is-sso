import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-infor-detail',
  templateUrl: './infor-detail.component.html',
  styleUrls: ['./infor-detail.component.css']
})
export class InforDetailComponent implements OnInit {
  public isLoggedIn = false;
  public name : string = 'noi';
  constructor(
    private appService : AppService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.appService.isLoggedIn();
    this.name = this.appService.getName();
  }

}
