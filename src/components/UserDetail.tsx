import React from 'react';
import { List, Surface } from 'react-native-paper';

import { UserDetailResponse } from '@/types';

type Props = UserDetailResponse;

export const UserDetail = (props: Props) => {
  return (
    <Surface>
      <List.Item title="First Item" description="Item description" />
    </Surface>
  );
};
