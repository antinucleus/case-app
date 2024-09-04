import { axios } from '@/lib';
import { PostResponse } from '@/types';

type Params = {
  postId: number;
};
export const getPostDetail = async ({ postId }: Params) => {
  try {
    const { status, data } = await axios.get<PostResponse>(`/posts/${postId}`);

    if (status === 200) {
      return data;
    }

    return null;
  } catch (error) {
    console.log('Error occured:', error);
    return null;
  }
};
