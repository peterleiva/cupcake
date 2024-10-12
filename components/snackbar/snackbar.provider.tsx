import { useState } from 'react';
import { SnackbarContext } from './snackbar.context';

interface SnackbarProviderProps {
  children: React.ReactNode;
}

export function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState<string>();

  const alert = (message?: string) => {
    setMessage(message);
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  return (
    <SnackbarContext.Provider
      value={{ snackbarAlert: alert, close, visible, message }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}
