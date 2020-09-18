import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { LoginService } from "../services/login.service";
import { Base64 } from "js-base64";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private route: Router, private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.login()) {
      // logged in so return true
      return true;
    } else {
      this.route.navigate(["/login"]);
      return false;
    }
  }
}
