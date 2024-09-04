import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, MD3Colors, Text } from 'react-native-paper';

export const Loading = () => {
  return (
    <View style={styles.contaier}>
      <ActivityIndicator animating color={MD3Colors.primary50} />
      <Text>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contaier: { justifyContent: 'center', alignItems: 'center' },
});
