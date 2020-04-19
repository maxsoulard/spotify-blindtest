import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // TODO do an effect to get user when it exists in localStore. dispatch corresponding action to add it to state
    // TODO check spotify token is still valid
    if (!localStorage.getItem('user_id') || !localStorage.getItem('access_token')) {
      this.router.navigateByUrl('/login');
    } else {
      return true;
    }
  }
}
