import { ReactNode, useReducer } from 'react';
import { AuthContext } from './auth.context';

interface AuthProviderProps {
  children?: ReactNode;
}

type AuthState = {
  isAuthenticated: boolean;
};

type AuthAction = { type: 'LOGIN'; data: AuthState } | { type: 'LOGOUT' };

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

const initializer = (data: Partial<AuthState> | null = {}): AuthState => ({
  isAuthenticated: false,
  ...data,
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatcher] = useReducer(reducer, null, initializer);

  const login = () =>
    dispatcher({ type: 'LOGIN', data: { isAuthenticated: true } });

  const logout = () => dispatcher({ type: 'LOGOUT' });

  const isAuthenticated = state.isAuthenticated;

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
