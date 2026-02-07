import { Injectable, signal, computed } from '@angular/core';
import { User } from '../../data/models/user.model';
import { MOCK_USERS } from '../../data/mock/mock-users';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _currentUser = signal<User | null>(this.getStoredUser());

  // Exposed signal for components (ReadOnly)
  currentUser = computed(() => this._currentUser());

  login(username: string): boolean {
    const user = MOCK_USERS.find(u => u.username === username.toLowerCase());
    
    if (user) {
      this._currentUser.set(user);
      localStorage.setItem('synchro_user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this._currentUser.set(null);
    localStorage.removeItem('synchro_user');
  }

  private getStoredUser(): User | null {
    const stored = localStorage.getItem('synchro_user');
    return stored ? JSON.parse(stored) : null;
  }

  isAuthenticated(): boolean {
    return this._currentUser() !== null;
  }
}