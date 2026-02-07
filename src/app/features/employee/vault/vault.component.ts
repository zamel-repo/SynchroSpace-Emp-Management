import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface VaultFile {
  id: number;
  name: string;
  type: 'password' | 'document' | 'key';
  size: string;
  date: string;
}

@Component({
  selector: 'app-vault',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.scss']
})
export class VaultComponent {
  // حالات الأمان
  isLocked = signal(true);
  authMode = signal<'pin' | 'bio'>('pin');
  pinInput = signal('');
  correctPin = '1234';

  // البحث والفلترة
  searchQuery = signal('');
  activeFilter = signal('all');

  files = signal<VaultFile[]>([
    { id: 1, name: 'Production_DB_Key', type: 'password', size: 'Secret', date: '2026-01-01' },
    { id: 2, name: 'Project_Alpha_Specs.pdf', type: 'document', size: '2.5 MB', date: '2025-12-30' },
    { id: 3, name: 'Root_Access.key', type: 'key', size: '15 KB', date: '2026-01-02' },
    { id: 4, name: 'AWS_Console_Login', type: 'password', size: 'Secret', date: '2026-01-04' }
  ]);

  // منطق الفلترة الذكي
  filteredFiles = computed(() => {
    return this.files().filter(f => {
      const matchSearch = f.name.toLowerCase().includes(this.searchQuery().toLowerCase());
      const matchType = this.activeFilter() === 'all' || f.type === this.activeFilter();
      return matchSearch && matchType;
    });
  });

  verifyAccess() {
    if (this.authMode() === 'pin' && this.pinInput() === this.correctPin) {
      this.isLocked.set(false);
    } else if (this.authMode() === 'bio') {
      // محاكاة التعرف على البصمة
      setTimeout(() => this.isLocked.set(false), 800);
    }
  }

  toggleLock() {
    this.isLocked.set(true);
    this.pinInput.set('');
  }
}