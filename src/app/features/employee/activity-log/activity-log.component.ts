import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface LogEntry {
  id: string;
  timestamp: Date;
  user: string;
  action: string;
  module: 'Vault' | 'Security' | 'Team' | 'System';
  status: 'success' | 'warning' | 'error';
  ip: string;
}

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.scss']
})
export class ActivityLogComponent {
  searchQuery = signal('');
  selectedModule = signal('all');

  logs = signal<LogEntry[]>([
    { id: '1', timestamp: new Date(), user: 'Mustafa Bakri', action: 'Unlocked Vault', module: 'Vault', status: 'success', ip: '192.168.1.1' },
    { id: '2', timestamp: new Date(Date.now() - 3600000), user: 'System', action: 'Failed Login Attempt', module: 'Security', status: 'error', ip: '45.22.11.0' },
    { id: '3', timestamp: new Date(Date.now() - 7200000), user: 'Samer Jalal', action: 'Updated Team Hierarchy', module: 'Team', status: 'success', ip: '192.168.1.45' },
    { id: '4', timestamp: new Date(Date.now() - 86400000), user: 'Mustafa Bakri', action: 'Changed PIN Code', module: 'Vault', status: 'warning', ip: '192.168.1.1' },
    { id: '5', timestamp: new Date(Date.now() - 90000000), user: 'System', action: 'Database Backup Completed', module: 'System', status: 'success', ip: '127.0.0.1' }
  ]);

  filteredLogs = computed(() => {
    return this.logs().filter(log => {
      const matchSearch = log.action.toLowerCase().includes(this.searchQuery().toLowerCase()) || 
                          log.user.toLowerCase().includes(this.searchQuery().toLowerCase());
      const matchModule = this.selectedModule() === 'all' || log.module === this.selectedModule();
      return matchSearch && matchModule;
    });
  });

  getSeverityClass(status: string) {
    return `status-${status}`;
  }
}