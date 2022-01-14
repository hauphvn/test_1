import { API_PATH } from 'src/app/constant';
import { UserAuth } from 'src/models/user';
import { post } from 'src/ultils/request';

export function login(userInfo: UserAuth) {
  return new Promise<{ data: UserAuth, message: string, status: number, accessToken: string }>((resolve) =>
    setTimeout(() => resolve({
      data: userInfo,
      message: 'success',
      status: 200,
      accessToken: 'abcdef123456'
    }), 1500)
  );
  // return post(API_PATH.AUTHENTICATION.SIGN_IN, userInfo).then((response) => {
  //   const resJson = JSON.parse(response);
  //   if (response && resJson.body.data) {
  //     return resJson.body.data;
  //   }
  // });
}
