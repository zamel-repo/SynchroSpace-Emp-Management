import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../core/services/auth.service';

interface Training {
  title: string;
  provider: string;
  date: string;
  status: 'Completed' | 'In Progress';
  skills: string[];
}

interface Project {
  name: string;
  type: 'Internal' | 'Training';
  role: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

@Component({
  selector: 'app-career-portfolio',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule, 
    MatTabsModule, 
    MatProgressBarModule, 
    MatChipsModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './career-portfolio.component.html',
  styleUrls: ['./career-portfolio.component.scss']
})
export class CareerPortfolioComponent {
  private authService = inject(AuthService);
  user = this.authService.currentUser;

  // Professional Training Data
  trainings = signal<Training[]>([
    {
      title: 'Advanced Angular Architecture',
      provider: 'Microsoft Learn',
      date: 'Jan 2024',
      status: 'Completed',
      skills: ['Signals', 'SSR', 'Micro-frontends']
    },
    {
      title: 'Cloud Security Fundamentals',
      provider: 'Azure Training',
      date: 'Mar 2024',
      status: 'In Progress',
      skills: ['IAM', 'Key Vault', 'Network Security']
    }
  ]);

  // Projects Detail Data (Internal & Training)
  projects = signal<Project[]>([
    {
      name: 'SynchroSpace ERP System',
      type: 'Internal',
      role: 'Lead Frontend Developer',
      period: '2023 - Present',
      description: 'Major internal project to synchronize enterprise resources.',
      technologies: ['Angular', 'Tailwind CSS', 'NGXS'],
      achievements: [
        'Optimized dashboard rendering by 40%.',
        'Implemented real-time notification engine using WebSockets.',
        'Led a team of 3 developers for the Task Module.'
      ]
    },
    {
      name: 'E-Learning Prototype',
      type: 'Training',
      role: 'Full Stack Learner',
      period: 'Winter 2022',
      description: 'Cap-stone project for the Full-stack intensive boot-camp.',
      technologies: ['Node.js', 'Express', 'PostgreSQL'],
      achievements: [
        'Built a complete RBAC system.',
        'Integrated Stripe API for mock payments.'
      ]
    }
  ]);

  downloadCV() {
    console.log('Initiating CV Download...');
  }
}