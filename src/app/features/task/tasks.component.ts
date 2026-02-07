import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { 
  DragDropModule, 
  CdkDragDrop, 
  moveItemInArray, 
  transferArrayItem 
} from '@angular/cdk/drag-drop';

interface Task {
  id: string;
  title: string;
  project: string;
  priority: 'High' | 'Medium' | 'Low';
  status: string;
  dueDate: string;
  tags: string[];
}

interface Column {
  id: string;
  title: string;
  color: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, MatIconModule, DragDropModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  viewMode = signal<'table' | 'kanban'>('kanban');
  searchQuery = signal('');
    columnIds = computed(() => this.columns().map(c => c.id));

  columns = signal<Column[]>([
    { id: 'planned', title: 'Planned', color: '#605e5c' },
    { id: 'progress', title: 'In Progress', color: '#0078d4' },
    { id: 'completed', title: 'Completed', color: '#107c10' }
  ]);

  tasks = signal<Task[]>([
    { id: '1', title: 'Design System Audit', project: 'SyncSpace', priority: 'High', status: 'planned', dueDate: 'Jan 12', tags: ['Design'] },
    { id: '2', title: 'Auth API Refactoring', project: 'Backend', priority: 'Medium', status: 'progress', dueDate: 'Jan 15', tags: ['Dev'] },
    { id: '3', title: 'Performance Monitoring', project: 'DevOps', priority: 'Low', status: 'completed', dueDate: 'Jan 05', tags: ['Infra'] },
    { id: '4', title: 'Customer Feedback Sync', project: 'Product', priority: 'Medium', status: 'planned', dueDate: 'Jan 20', tags: ['Meeting'] }
  ]);

  filteredTasks = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.tasks().filter(t => t.title.toLowerCase().includes(query));
  });

  getTasksByStatus(statusId: string) {
    return this.filteredTasks().filter(t => t.status === statusId);
  }

  onTaskDrop(event: CdkDragDrop<Task[]>, newStatus: string) {
    if (event.previousContainer === event.container) {
      const currentTasks = [...this.tasks()];
      // Local reorder logic can be added here if persistence is needed
    } else {
      const task = event.item.data as Task;
      this.tasks.update(all => all.map(t => 
        t.id === task.id ? { ...t, status: newStatus } : t
      ));
    }
  }

  onColumnDrop(event: CdkDragDrop<Column[]>) {
    const cols = [...this.columns()];
    moveItemInArray(cols, event.previousIndex, event.currentIndex);
    this.columns.set(cols);
  }

  addColumn() {
    const name = prompt('Column Name:');
    if (name) {
      const id = name.toLowerCase().replace(/\s+/g, '-');
      this.columns.update(all => [...all, { id, title: name, color: '#0078d4' }]);
    }
  }
}