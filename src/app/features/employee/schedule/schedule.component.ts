import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

type CalendarView = 'Day' | 'Work week' | 'Month';

interface CalendarEvent {
  id: number;
  title: string;
  time: string;
  day: string; // Mon, Tue, etc.
  dateNum: number; // For month view
  type: 'work' | 'team';
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  currentView = signal<CalendarView>('Day');
  selectedDate = signal<Date>(new Date());

  workingHours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  workDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  // بيانات أمثلة موزعة
  events = signal<CalendarEvent[]>([
    { id: 1, title: 'Daily Standup', time: '09:00', day: 'Mon', dateNum: 4, type: 'team' },
    { id: 2, title: 'Client Review', time: '11:00', day: 'Wed', dateNum: 6, type: 'work' },
    { id: 3, title: 'Project Sync', time: '14:00', day: 'Mon', dateNum: 4, type: 'team' },
    { id: 4, title: 'Architecture Planning', time: '10:00', day: 'Thu', dateNum: 15, type: 'work' },
    { id: 5, title: 'System Update', time: '16:00', day: 'Fri', dateNum: 19, type: 'work' }
  ]);

  // دالة مساعدة للبحث عن موعد في وقت محدد (لعرض اليوم والأسبوع)
  getEvent(hour: string, day?: string) {
    return this.events().find(e => e.time === hour && (!day || e.day === day));
  }

  // دالة مساعدة للبحث عن موعد في يوم من الشهر
  getEventsByDate(date: number) {
    return this.events().filter(e => e.dateNum === date);
  }

  setView(view: CalendarView) { this.currentView.set(view); }
  goToToday() { this.selectedDate.set(new Date()); }
  
  navigate(direction: number) {
    const current = new Date(this.selectedDate());
    if (this.currentView() === 'Day') current.setDate(current.getDate() + direction);
    else if (this.currentView() === 'Work week') current.setDate(current.getDate() + (direction * 7));
    else current.setMonth(current.getMonth() + direction);
    this.selectedDate.set(current);
  }

  headerTitle = computed(() => {
    const date = this.selectedDate();
    return this.currentView() === 'Month' 
      ? date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      : date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  });
}