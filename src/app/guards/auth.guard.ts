import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/Service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: ServiceService, private router: Router) { }
  canActivate() {
    if (this.service.getCurrentUser()) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return false;
    }
  }

}
