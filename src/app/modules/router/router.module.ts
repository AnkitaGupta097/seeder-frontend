import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { ResetPasswordComponent } from '../../components/reset-password/reset-password.component';
import { ErrorComponent } from '../../components/error/error.component';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
