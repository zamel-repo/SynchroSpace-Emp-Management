import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Data properties
  username = '';
  password = '';
  showPassword = false;

 // داخل login.component.ts
onLogin() {
  const success = this.authService.login(this.username);
  if (success) {
    const user = this.authService.currentUser();
    if (user?.role === 'EMPLOYEE') this.router.navigate(['/employee/workspace']);
    else if (user?.role === 'MANAGER') this.router.navigate(['/manager/dashboard']);
    else if (user?.role === 'ADMIN') this.router.navigate(['/admin/control-panel']);
  }
}

  private navigateToDashboard(role: string | undefined) {
    switch (role) {
      case 'EMPLOYEE':
        this.router.navigate(['/workspace']);
        break;
      case 'DEPT_MANAGER':
        this.router.navigate(['/dashboard']);
        break;
      case 'SUPER_ADMIN':
        this.router.navigate(['/admin-panel']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}