import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  username: string;
  joinDate: string;
}

interface AuthState {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (username) => {
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const userExists = existingUsers.some((user: User) => user.username === username);
        
        if (userExists) {
          set({ user: { username, joinDate: existingUsers.find((u: User) => u.username === username).joinDate } });
        } else {
          const newUser = { username, joinDate: new Date().toISOString() };
          localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));
          set({ user: newUser });
        }
      },
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);