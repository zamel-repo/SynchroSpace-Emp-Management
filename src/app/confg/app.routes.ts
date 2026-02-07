import { Routes } from '@angular/router';
import { LoginComponent } from '../features/auth/login.component';
import { PrivacyComponent } from '../features/legal/privacy.component';
import { TermsComponent } from '../features/legal/terms.component';
import { EmployeeShellComponent } from '../layouts/shells/employee/employee-shell.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },

  {
    path: 'employee',
    component: EmployeeShellComponent,
    children: [
      {
        path: 'my-workspace',
        loadComponent: () => import('./../features/employee/my-workspace/my-workspace.component').then(m => m.MyWorkspaceComponent),
        title: 'My Workspace'
      },
      {
        path: 'tasks',
        loadComponent: () => import('./../features/task/tasks.component').then(m => m.TasksComponent),
        title: 'Tasks'
      },
      {
        path: 'career-portfolio',
        loadComponent: () => import('./../features/employee/career-portfolio/career-portfolio.component').then(m => m.CareerPortfolioComponent),
        title: 'Career-Portfolio'
      },
      {
        path: 'learning',
        loadComponent: () => import('./../features/employee/learning-center/learning-center.component').then(m => m.LearningCenterComponent),
        title: 'Learning Center'
      },
      {
        path: 'team',
        loadComponent: () => import('./../features/employee/team-directory/team-directory.component').then(m => m.TeamDirectoryComponent),
        title: 'Team Directory'
      },
      {
        path: 'vault',
        loadComponent: () => import('./../features/employee/vault/vault.component').then(m => m.VaultComponent),
        title: 'Vault'
      },
      {
        path: 'growth',
        loadComponent: () => import('./../features/employee/growth/growth.component').then(m => m.GrowthComponent),
        title: 'Growth'
      },
      {
        path: 'transfers-prizes',
        loadComponent: () => import('./../features/employee/compensation/compensation.component').then(m => m.CompensationComponent),
        title: 'Transfers-Prizes'
      },
      {
        path: 'activity-log',
        loadComponent: () => import('./../features/employee/activity-log/activity-log.component').then(m => m.ActivityLogComponent),
        title: 'Activity Log'
      },
         {
        path: 'schedule',
        loadComponent: () => import('./../features/employee/schedule/schedule.component').then(m => m.ScheduleComponent),
        title: 'Schedule'
      },
          {
        path: 'chat',
        loadComponent: () => import('./../features/employee/chat/chat.component').then(m => m.ChatComponent),
        title: 'Chat'
      },
      { 
        path: '', redirectTo: 'my-workspace', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];