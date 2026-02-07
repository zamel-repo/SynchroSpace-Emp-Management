import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface Skill {
  name: string;
  level: number; // النسبة المئوية
  color: string;
}

interface LearningPath {
  title: string;
  provider: string;
  progress: number;
  status: 'In Progress' | 'Completed';
}

@Component({
  selector: 'app-growth',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatProgressBarModule],
  templateUrl: './growth.component.html',
  styleUrls: ['./growth.component.scss']
})
export class GrowthComponent {
  userName = 'Mustafa Bakri';
  
  // إحصائيات سريعة
  stats = [
    { label: 'Courses Completed', value: '12', icon: 'auto_stories', color: '#0078d4' },
    { label: 'Hours Learned', value: '45h', icon: 'timer', color: '#107c10' },
    { label: 'Skill Points', value: '1,250', icon: 'military_tech', color: '#ffb900' }
  ];

  skills = signal<Skill[]>([
    { name: 'Angular Architecture', level: 85, color: '#0078d4' },
    { name: 'UI/UX Design', level: 70, color: '#5c2d91' },
    { name: 'Cloud Security', level: 60, color: '#00bcf2' },
    { name: 'Team Leadership', level: 45, color: '#107c10' }
  ]);

  learningPaths = signal<LearningPath[]>([
    { title: 'Advanced Frontend Engineering', provider: 'LinkedIn Learning', progress: 75, status: 'In Progress' },
    { title: 'Azure Solutions Architect', provider: 'Microsoft Learn', progress: 30, status: 'In Progress' },
    { title: 'Cybersecurity Fundamentals', provider: 'Internal Academy', progress: 100, status: 'Completed' }
  ]);
}