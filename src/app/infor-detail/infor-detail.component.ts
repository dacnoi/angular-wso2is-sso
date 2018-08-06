import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Patient} from '../models/Patient';

@Component({
  selector: 'app-infor-detail',
  templateUrl: './infor-detail.component.html',
  styleUrls: ['./infor-detail.component.css']
})
export class InforDetailComponent implements OnInit {
  public dataObject : any;
  public message : string = "";
  public isLogin : boolean = false;
  constructor(
    private appService : AppService
  ) { }

  ngOnInit() {
    this.appService.getInforFromRestApiNodeJs<any>(this.appService.getToken())
            .subscribe(
            (data: any) => {
              if(data.active === true){
                this.isLogin = true;
                this.message = "Login success";
                this.dataObject = data.data;
                console.log(this.dataObject.id);
              }else{
                console.log(data);
                this.dataObject = data.data;
                this.message = "Login failed! Token hết hạn";
              }
            } 
            ,error => () => {
                console.log('error', 'Damn', 'Something went wrong...');
                this.message = "Login failed";
            });
  }

}
