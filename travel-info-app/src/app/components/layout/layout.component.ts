import { Component } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventBusService } from '../../services/event-bus.service.ts/event-bus.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showAgentBoard = false;
  username?: string;
  isSidenavOpened = false;

  // Subscriptions
  eventBusSubscription?: Subscription;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private eventBusService: EventBusService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showAgentBoard = this.roles.includes('ROLE_AGENT');

      this.username = user.username;
    }

    this.eventBusSubscription = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;  // Toggle the sidenav
  }

  logout(): void {
    this.router.navigate(['/login']);
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
