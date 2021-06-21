import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SignUserComponent} from './pages/sign-user/sign-user.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {RateServiceComponent} from './pages/rate-service/rate-service.component'

const routes: Routes = [
    { path: '', data:{navbar: true}, component: HomeComponent },
    { path: 'sign-user', component: SignUserComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path:'rate-service', component: RateServiceComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
