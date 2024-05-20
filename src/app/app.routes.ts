import { Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { CashAcclerationComponent } from './components/cash-accleration/cash-accleration.component';

export const routes: Routes = [{
    path: "",
    component: SideNavComponent,
    children: [{
        path: "",
        component: HomeComponent,
    }, {
        path: "cash-accleration",
        component: CashAcclerationComponent,
    }
    ]
}, {
    path: "login",
    component: LoginComponent,
},
{
    path: "signup",
    component: SignupComponent,
}, {
    path: "reset-password",
    component: ResetPasswordComponent,
}, {
    path: "**",
    component: ErrorComponent,
}]
