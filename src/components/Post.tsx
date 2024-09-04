import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import { PostResponse } from '@/types';

type Props = PostResponse;

export const Post = ({ title, body }: Props) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text variant="titleLarge">{title} </Text>
        <Text variant="bodyMedium"> {body.substring(0, 50).concat('...')} </Text>
      </Card.Content>
      <Card.Actions>
        <Button>See</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
});
