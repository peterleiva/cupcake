import { useState } from 'react';
import { ModalContext } from './modal.context';

interface ModalProviderProps {
  children: React.ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <ModalContext.Provider value={{ showModal, hideModal, visible }}>
      {children}
    </ModalContext.Provider>
  );
}
