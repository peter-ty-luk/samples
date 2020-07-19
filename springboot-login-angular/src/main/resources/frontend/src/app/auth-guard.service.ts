import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  // singleton 
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(
    public authService: AuthService,
    public router : Router) {}

  async canActivate() {
    console.log("check auth=" + this.authService.checkAuthenticated());
    if (!await this.authService.checkAuthenticated()) {
      await this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
