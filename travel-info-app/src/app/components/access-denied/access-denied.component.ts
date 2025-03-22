import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.css'
})
export class AccessDeniedComponent {
  constructor(private router: Router) {}

  redirect(): void {
    this.router.navigate(['/']); // Redirect to home page or any other page
  }
}
