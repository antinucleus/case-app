import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Card, Divider, Surface, Text } from 'react-native-paper';

import { getPostDetail, getUserDetail } from '@/api';
import { PostDetailScreenRouteProp, PostResponse, UserDetailResponse } from '@/types';

import { Loading } from './Loading';
import { UserDetail } from './UserDetail';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="account" />;

export const PostDetail = () => {
  const [userDetail, setUserDetail] = useState<UserDetailResponse>();
  const [postDetail, setPostDetail] = useState<PostResponse>();
  const route = useRoute<PostDetailScreenRouteProp>();

  const fetchUserDetail = async () => {
    const data = await getUserDetail({ userId: route.params.userId });

    if (data) {
      setUserDetail(data);
    }
  };

  const fetchPostDetail = async () => {
    const data = await getPostDetail({ postId: route.params.id });
    console.log('postdetail:', data);

    if (data) {
      setPostDetail(data);
    }
  };

  useEffect(() => {
    fetchPostDetail();
    fetchUserDetail();
  }, []);

  return (
    <Surface style={styles.container}>
      {userDetail && postDetail ? (
        <Card>
          <Card.Title title={userDetail?.username} subtitle={userDetail?.name} left={LeftContent} />
          <Card.Content>
            <Text variant="titleMedium">{postDetail?.title} </Text>
            <Text variant="bodyMedium">{postDetail?.body} </Text>
          </Card.Content>
        </Card>
      ) : (
        <Loading />
      )}

      <Divider style={{ height: 1, marginVertical: 10 }} />
      <UserDetail {...userDetail} />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, flex: 1, height: '100%' },
});
