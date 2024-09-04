import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { StatusBar } from '@/components/StatusBar';
import { Routes } from '@/routes';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Routes />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: '100%' },
});
