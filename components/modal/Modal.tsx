import { StyleSheet, View } from 'react-native';
import {
  Button,
  Divider,
  Modal as ModalPaper,
  Portal,
} from 'react-native-paper';
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
          <>
            <Divider />
            <View style={styles.modalActions}>
              <Button onPress={hideModal}>cancelar</Button>
              <Button icon="check" mode="contained" onPress={applyHandler}>
                aplicar
              </Button>
            </View>
          </>
        )}
      </ModalPaper>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modal: {
    padding: 16,
    backgroundColor: 'white',
    margin: 0,
    marginTop: '20%',
    borderRadius: 8,
    justifyContent: 'flex-end',
  },
  content: {
    marginBottom: 16,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
});
