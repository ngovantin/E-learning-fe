import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { authSuccess } from './authSlice';

const refreshToken = async () => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {}, { withCredentials: true });
    console.log(res)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const createAxios = (currentUser, dispatch) => {

  const newInterceptor = axios.create();

  newInterceptor.interceptors.request.use(
    async (config) => {
      let now = new Date();
      const decodedToken = jwtDecode(currentUser?.accessToken);
      console.log(decodedToken)
      if (decodedToken.exp < now.getTime() / 1000) {
        const data = await refreshToken();
        const refreshCurrentUser = {
          ...currentUser,
          accessToken: data.accessToken
        };
        dispatch(authSuccess(refreshCurrentUser));
        config.headers['token'] = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInterceptor;
};

export { createAxios };
