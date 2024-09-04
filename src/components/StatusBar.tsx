import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const StatusBar = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ height: top }}>
      <ExpoStatusBar />
    </View>
  );
};
