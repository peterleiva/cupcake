import { createContext } from 'react';

interface SnackbarContextProps {
  visible: boolean;
  snackbarAlert: (message?: string) => void;
  close: () => void;
  message: string | undefined;
}

export const SnackbarContext = createContext<SnackbarContextProps | null>(null);
