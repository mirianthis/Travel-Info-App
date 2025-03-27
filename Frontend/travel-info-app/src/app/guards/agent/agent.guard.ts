// agent.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../../services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AgentGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Check if the user is logged in and has either an admin or agent role
    let user = this.storageService.getUser();
    let roles = user.roles;
    if (roles[0] === 'ROLE_ADMIN' || roles[0] === 'ROLE_AGENT') {
      return true; // Admin and agent users can access the route
    } else {
      this.router.navigate(['/access-denied']); // Redirect to access-denied if not admin or agent
      return false;
    }
  }
}
