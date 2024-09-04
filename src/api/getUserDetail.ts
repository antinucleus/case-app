import { axios } from '@/lib';
import { UserDetailResponse } from '@/types';

type Params = {
  userId: number;
};
export const getUserDetail = async ({ userId }: Params) => {
  try {
    const { status, data } = await axios.get<UserDetailResponse>(`/users/${userId}`);

    if (status === 200) {
      return data;
    }

    return null;
  } catch (error) {
    console.log('Error occured:', error);
    return null;
  }
};
