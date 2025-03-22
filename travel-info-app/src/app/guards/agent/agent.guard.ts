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
    const role = this.storageService.getUserRole();
    if (role === 'admin' || role === 'agent') {
      return true; // Admin and agent users can access the route
    } else {
      this.router.navigate(['/access-denied']); // Redirect to access-denied if not admin or agent
      return false;
    }
  }
}
