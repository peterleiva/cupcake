import { Portal, Snackbar as PaperSnackbar } from 'react-native-paper';
import { useSnackbar } from './snackbar.hook';

export function Snackbar() {
  const { close: hide, visible, message } = useSnackbar();

  return (
    <Portal>
      <PaperSnackbar visible={visible} onDismiss={hide}>
        {message}
      </PaperSnackbar>
    </Portal>
  );
}
