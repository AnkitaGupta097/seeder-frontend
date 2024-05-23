import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/http/auth.service";


export const AuthGuard: CanActivateFn = (
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
):
    boolean | UrlTree => {

    return inject(AuthService).isAuthenticated()
        ? true
        : inject(Router).createUrlTree(['/login']);

};