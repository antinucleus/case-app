import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PublicRoutesStackParamList = {
  Post: undefined;
  PostDetail: undefined;
};

export type PublicRoutesScreenNavigationProp =
  NativeStackNavigationProp<PublicRoutesStackParamList>;
