import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import { StatusBar } from '@/components';
import { Routes } from '@/routes';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <Routes />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: '100%' },
});
