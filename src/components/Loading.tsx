import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, MD3Colors, Text } from 'react-native-paper';

export const Loading = () => {
  return (
    <View>
      <ActivityIndicator animating color={MD3Colors.primary50} />
      <Text>Loading</Text>
    </View>
  );
};
