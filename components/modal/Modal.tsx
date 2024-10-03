import { StyleSheet, View } from 'react-native';
import { Button, Modal as ModalPaper, Portal } from 'react-native-paper';
import { useModal } from './modal.hook';

interface ModalProps {
  showActions?: boolean;
  onApply?: () => void;
  children?: React.ReactNode;
}

export function Modal({ children, showActions = true, onApply }: ModalProps) {
  const { hideModal, visible } = useModal();

  const applyHandler = () => {
    hideModal();
    onApply?.();
  };

  return (
    <Portal>
      <ModalPaper visible={visible} onDismiss={hideModal} style={styles.modal}>
        {children}

        {showActions && (
          <View style={styles.modalActions}>
            <Button onPress={hideModal}>cancelar</Button>
            <Button icon="check" mode="contained" onPress={applyHandler}>
              aplicar
            </Button>
          </View>
        )}
      </ModalPaper>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'space-between',
    padding: 16,
    gap: 10,
    backgroundColor: 'white',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
