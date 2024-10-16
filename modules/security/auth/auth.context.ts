import { createContext } from 'react';

import type { AuthContextType } from './auth.interface';

export const AuthContext = createContext<AuthContextType | null>(null);
