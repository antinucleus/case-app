import { axios } from '@/lib';
import { PostResponse } from '@/types';

export const getPosts = async () => {
  try {
    const { status, data } = await axios.get<PostResponse[]>('/posts');

    if (status === 200) {
      return data;
    }

    return null;
  } catch (error) {
    console.log('Error occured:', error);
    return null;
  }
};
