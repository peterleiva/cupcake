import { createContext } from 'react';

interface ModalContextProps {
  visible: boolean;
  showModal: () => void;
  hideModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);
