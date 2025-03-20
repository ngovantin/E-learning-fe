'use client';
import axios from 'axios';
import { authFailed, authStart, authSuccess } from './authSlice';

const authUser = async (user, dispatch, type) => {
  dispatch(authStart());
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/${type}`, user);
    dispatch(authSuccess(res.data));
    window.location.reload();
  } catch (error) {
    dispatch(authFailed());
  }
};
const googleLogin = async (token, dispatch) => {
  dispatch(authStart());
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(res.data);
    window.location.reload();
    dispatch(authSuccess(res.data));
  } catch (error) {
    dispatch(authFailed());
  }
};
const logOut = async (dispatch, token, axiosJWT)=>{
  console.log(token)
    dispatch(authStart())
    try {
        await axiosJWT.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,{},{
            headers: {token: `Bearer ${token}`}
        }); 
        dispatch(authSuccess(null));
    } catch (error) {
        console.log(error)
        dispatch(authFailed());
    }
}

export { authUser, googleLogin, logOut };
