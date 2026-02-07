import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'Salary' | 'Bonus' | 'Allowance';
}

@Component({
  selector: 'app-compensation',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.scss']
})
export class CompensationComponent {
  // حالة الخصوصية (تغبيش افتراضي)
  isPrivate = signal(true);

  // إحصائيات السنة الحالية
  annualSummary = {
    totalEarnings: 102000,
    totalVacations: 25,
    remainingDays: 12,
    currency: '$'
  };

  // سجل التحويلات المالية للسنة الحالية
  transactions = signal<Transaction[]>([
    { id: 'TX102', date: '2026-01-01', description: 'Monthly Salary - Jan', amount: 8500, type: 'Salary' },
    { id: 'TX101', date: '2025-12-25', description: 'Year-end Performance Bonus', amount: 2500, type: 'Bonus' },
    { id: 'TX099', date: '2025-12-01', description: 'Monthly Salary - Dec', amount: 8500, type: 'Salary' },
    { id: 'TX098', date: '2025-11-15', description: 'Transport Allowance', amount: 300, type: 'Allowance' }
  ]);

  togglePrivacy() {
    this.isPrivate.set(!this.isPrivate());
  }

  // حساب المحصلة النهائية الظاهرة
  getDisplayAmount(amount: number): string {
    return this.isPrivate() ? '••••••' : `${this.annualSummary.currency}${amount.toLocaleString()}`;
  }
}