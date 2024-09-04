import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type PublicRoutesStackParamList = {
  Post: undefined;
  PostDetail: { id: number; userId: number };
};

export type PublicRoutesScreenNavigationProp =
  NativeStackNavigationProp<PublicRoutesStackParamList>;

export type PostDetailScreenRouteProp = RouteProp<PublicRoutesStackParamList, 'PostDetail'>;
