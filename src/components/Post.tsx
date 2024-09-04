import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import { PostResponse, PublicRoutesScreenNavigationProp } from '@/types';

type Props = PostResponse;

export const Post = ({ title, body, id, userId }: Props) => {
  const navigation = useNavigation<PublicRoutesScreenNavigationProp>();

  const handleNavigatePostDetail = () => navigation.navigate('PostDetail', { id, userId });

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text variant="titleMedium">{title} </Text>
        <Text variant="bodyMedium"> {body.substring(0, 50).concat('...')} </Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleNavigatePostDetail}>See</Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
});
