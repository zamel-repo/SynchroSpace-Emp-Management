import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Course {
  title: string;
  description: string;
  provider: 'YouTube' | 'Coursera' | 'Udemy' | 'Internal';
  link: string;
  duration: string;
}

interface Roadmap {
  id: string;
  specialty: string;
  icon: string;
  description: string;
  courses: Course[];
}

@Component({
  selector: 'app-learning-center',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTabsModule, MatButtonModule, MatTooltipModule],
  templateUrl: './learning-center.component.html',
  styleUrls: ['./learning-center.component.scss']
})
export class LearningCenterComponent {
  roadmaps = signal<Roadmap[]>([
    {
      id: 'ai-ml',
      specialty: 'Artificial Intelligence',
      icon: 'psychology',
      description: 'Master the fundamentals of Neural Networks and Deep Learning.',
      courses: [
        { title: 'Python for Data Science', description: 'Basics of NumPy and Pandas.', provider: 'YouTube', link: '#', duration: '10h' },
        { title: 'Machine Learning Specialization', description: 'Supervised & Unsupervised Learning.', provider: 'Coursera', link: '#', duration: '40h' },
        { title: 'Deep Learning with PyTorch', description: 'Building neural networks from scratch.', provider: 'Udemy', link: '#', duration: '25h' }
      ]
    },
    {
      id: 'cyber-sec',
      specialty: 'Cyber Security',
      icon: 'security',
      description: 'Learn to protect enterprise infrastructure and data.',
      courses: [
        { title: 'Networking Fundamentals', description: 'OSI Model and TCP/IP basics.', provider: 'Internal', link: '#', duration: '15h' },
        { title: 'Ethical Hacking 101', description: 'Penetration testing and vulnerability assessment.', provider: 'YouTube', link: '#', duration: '30h' },
        { title: 'CompTIA Security+', description: 'Global standard for cybersecurity skills.', provider: 'Coursera', link: '#', duration: '50h' }
      ]
    },
    {
      id: 'networking',
      specialty: 'Networking & Cloud',
      icon: 'lan',
      description: 'Cloud infrastructure management and network architecture.',
      courses: [
        { title: 'Azure Fundamentals (AZ-900)', description: 'Cloud concepts and Azure services.', provider: 'Internal', link: '#', duration: '12h' },
        { title: 'Cisco CCNA Training', description: 'Routing and switching essentials.', provider: 'Udemy', link: '#', duration: '60h' }
      ]
    }
  ]);

  selectedRoadmap = signal<Roadmap>(this.roadmaps()[0]);

  selectRoadmap(roadmap: Roadmap) {
    this.selectedRoadmap.set(roadmap);
  }

  getProviderIcon(provider: string): string {
    switch (provider) {
      case 'YouTube': return 'play_circle';
      case 'Coursera': return 'school';
      case 'Internal': return 'business';
      default: return 'link';
    }
  }
}