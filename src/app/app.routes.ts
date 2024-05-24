import { Routes } from '@angular/router';
import { SideNavComponent } from './seeder/pages/side-nav/side-nav.component';
import { LoginComponent } from './seeder/pages/login/login.component';
import { SignupComponent } from './seeder/pages/signup/signup.component';
import { ResetPasswordComponent } from './seeder/pages/reset-password/reset-password.component';
import { ErrorComponent } from './seeder/components/error/error.component';
import { HomeComponent } from './seeder/pages/home/home.component';
import { CashAcclerationComponent } from './seeder/components/cash-accleration/cash-accleration.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [{
    path: "login",
    component: LoginComponent,
},
{
    path: "signup",
    component: SignupComponent,
}, {
    path: "reset-password",
    canActivate: [AuthGuard],
    component: ResetPasswordComponent,
}, {
    path: "",
    component: SideNavComponent,
    canActivateChild: [AuthGuard],
    children: [{
        path: "home",
        component: HomeComponent,
    }, {
        path: "cash-accleration",
        component: CashAcclerationComponent,
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "**",
        component: ErrorComponent,
    }
    ]
}]
