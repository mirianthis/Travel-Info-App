import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is logged in and has an admin role
    let user = this.storageService.getUser();
    let roles = user.roles;
    if (roles[0] === 'ROLE_ADMIN') {
      return true; // Admin users can access the route
    } else {
      this.router.navigate(['/access-denied']); // Redirect to access-denied if not admin
      return false;
    }
  }
}

