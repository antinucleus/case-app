import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const StatusBar = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ height: Platform.OS === 'android' ? top : 0 }}>
      <SafeAreaView>
        <ExpoStatusBar translucent />
      </SafeAreaView>
    </View>
  );
};
