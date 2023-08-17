import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
    { path: 'login', component: SigninComponent },
    { path: 'register', component: SignupComponent },
    {path: 'profile', component: UserProfileComponent},
    {path: 'dashboard', component: DashboardComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }