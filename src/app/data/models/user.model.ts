export type UserRole = 'EMPLOYEE' | 'MANAGER' | 'ADMIN';

export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  role: UserRole;
  avatar: string;
  department: string;
  position: string;
  status: 'ONLINE' | 'OFFLINE' | 'BUSY' | 'AWAY';
}