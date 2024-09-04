import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Posts, PostDetail } from '@/components';
import { PublicRoutesStackParamList } from '@/types';

const { Navigator, Screen } = createNativeStackNavigator<PublicRoutesStackParamList>();

export const Public = () => {
  return (
    <Navigator initialRouteName="Post" screenOptions={{ headerShown: false }}>
      <Screen name="Post" component={Posts} />
      <Screen name="PostDetail" component={PostDetail} />
    </Navigator>
  );
};
