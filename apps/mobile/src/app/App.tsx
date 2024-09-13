/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Button, PaperProvider, Portal, Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const [visible, setVisible] = useState(false);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <ScrollView
            ref={(ref) => {
              scrollViewRef.current = ref;
            }}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <Button
              mode="outlined"
              onPress={() => {
                setVisible(true);
              }}
            >
              Abrir snackbar
            </Button>

            <Portal>
              <Snackbar
                visible={visible}
                action={{
                  label: 'Fechar',
                }}
                onDismiss={() => {
                  setVisible(false);
                }}
              >
                Hey i'm a snackbar
              </Snackbar>
            </Portal>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 12,
  },
});

export default App;
