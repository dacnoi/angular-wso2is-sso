import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { LoginComponent } from './login/login.component';
import { InforDetailComponent } from './infor-detail/infor-detail.component';


const routes : Routes = [
    { path : '' , redirectTo : '/login', pathMatch : 'full' },
    { path : 'login' , component : LoginComponent },
    { path : 'infordetail' , component : InforDetailComponent}
];
@NgModule({
  imports: [
    // Make 'routes' to be 'root'
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
