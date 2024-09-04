import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Surface } from 'react-native-paper';

import { getPosts } from '@/api';
import { PostResponse } from '@/types';

import { Post } from './Post';

export const Posts = () => {
  const [posts, setPosts] = useState<PostResponse[]>();

  const fetchPost = async () => {
    const data = await getPosts();

    if (data) {
      setPosts(data);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Surface style={styles.container}>
      <FlashList
        data={posts}
        renderItem={({ item }) => <Post {...item} />}
        estimatedItemSize={16}
        contentContainerStyle={styles.content}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, height: '100%' },
  content: { padding: 10 },
});
