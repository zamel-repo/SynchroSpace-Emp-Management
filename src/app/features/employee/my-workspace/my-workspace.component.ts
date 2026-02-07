import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-my-workspace',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './my-workspace.component.html',
  styleUrls: ['./my-workspace.component.scss']
})
export class MyWorkspaceComponent {
  private authService = inject(AuthService);
  user = this.authService.currentUser;

  firstName = computed(() => this.user()?.fullName?.split(' ')[0] || 'Employee');
  userEmail = computed(() => `${this.user()?.fullName?.split(' ')[0]?.toLowerCase() || 'user'}&#64;microsoft.com`);

  stats = [
    { label: 'Tasks Completed', value: '28', icon: 'check_circle', color: '#107c10' },
    { label: 'Pending Approvals', value: '04', icon: 'pending_actions', color: '#d83b01' },
    { label: 'Training Hours', value: '12.5h', icon: 'school', color: '#0078d4' }
  ];

  upcomingTasks = [
    { id: 1, title: 'Quarterly Review Meeting', project: 'Management', priority: 'High', due: 'Today, 2:00 PM' },
    { id: 2, title: 'Update API Documentation', project: 'Dev Ops', priority: 'Medium', due: 'Jan 05, 2026' },
    { id: 3, title: 'Security Compliance Audit', project: 'Internal', priority: 'High', due: 'Jan 08, 2026' },
    { id: 4, title: 'New Employee Orientation', project: 'HR', priority: 'Low', due: 'Jan 12, 2026' }
  ];

  announcements = [
    { title: 'Annual Gala Night 2026', date: '2 hours ago', type: 'Event' },
    { title: 'New Remote Work Policy', date: 'Yesterday', type: 'Policy' }
  ];

  quickLinks = [
    { name: 'Submit Expense', icon: 'payments' },
    { name: 'IT Support', icon: 'support_agent' },
    { name: 'Book Leave', icon: 'event_available' },
    { name: 'Knowledge Base', icon: 'menu_book' }
  ];
}