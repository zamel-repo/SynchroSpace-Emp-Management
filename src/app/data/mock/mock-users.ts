import { User } from "../models/user.model";

export const MOCK_USERS: User[] = [
  {
    id: 'U001',
    username: 'emp',
    fullName: 'John Doe',
    email: 'john.d@synchrospace.com',
    role: 'EMPLOYEE',
    avatar: 'assets/avatars/emp.png',
    department: 'Development',
    position: 'Frontend Developer',
    status: 'OFFLINE'
  },
  {
    id: 'U002',
    username: 'mgr',
    fullName: 'Sarah Wilson',
    email: 's.wilson@synchrospace.com',
    role: 'MANAGER',
    avatar: 'assets/avatars/mgr.png',
    department: 'Development',
    position: 'Team Lead',
    status: 'OFFLINE'
  },
  {
    id: 'U003',
    username: 'admin',
    fullName: 'Michael Knight',
    email: 'admin@synchrospace.com',
    role: 'ADMIN',
    avatar: 'assets/avatars/admin.png',
    department: 'IT Operations',
    position: 'System Administrator',
    status: 'OFFLINE'
  }
];