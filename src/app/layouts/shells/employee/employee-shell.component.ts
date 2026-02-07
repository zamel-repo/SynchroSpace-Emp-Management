import { Component, inject, computed } from '@angular/core'; // أضفنا computed
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { filter, map, startWith } from 'rxjs'; // أضفنا startWith
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-employee-shell',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './employee-shell.component.html',
  styleUrls: ['./employee-shell.component.scss']
})
export class EmployeeShellComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.currentUser;

 menuItems = [
    { path: '/employee/my-workspace', label: 'My Workspace', icon: 'dashboard' }, 
    { path: '/employee/tasks', label: 'Tasks', icon: 'assignment_turned_in' }, 
    { path: '/employee/team', label: 'Team Directory', icon: 'groups' },
    { path: '/employee/vault', label: 'Vault', icon: 'inventory_2' },
    { path: '/employee/learning', label: 'Learning Center', icon: 'school' },
    { path: '/employee/growth', label: 'Growth', icon: 'trending_up' },
    { path: '/employee/transfers-prizes', label: 'Compensation & Awards', icon: 'payments' }, 
    { path: '/employee/activity-log', label: 'Activity Log', icon: 'history' },
    { path: '/employee/career-portfolio', label: 'Career Portfolio', icon: 'badge' },
    { path: '/employee/schedule', label: 'Schedule', icon: 'calendar_month' },
    { path: '/employee/chat', label: 'Chat', icon: 'chat' }
  ];
  currentPageTitle$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    startWith(null),
    map(() => {
      const currentRoute = this.router.url;
      const activeItem = this.menuItems.find(item => currentRoute.includes(item.path as string));
      return activeItem ? activeItem.label : 'My Workspace';
    })
  );

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}