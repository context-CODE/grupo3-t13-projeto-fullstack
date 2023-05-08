/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import api from '@/services/index';
import axios from 'axios';

import {
  iLoginReq,
  iLoginRes,
  iProviderProps,
  iRegisterFormData,
} from '@/types/auth.context';
import { iUserReqUpdate, iUserRes } from '@/types/user.context';
import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface iAuthContext {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  registerUser: (data: iRegisterFormData) => Promise<void>;
  getUserProfile: (token: string) => Promise<void>;
  updateUser: (data: iUserReqUpdate) => Promise<void>;
  loginUser: (data: iLoginReq, callback: () => void) => Promise<void>;
  user: iUserRes;
  setUser: React.Dispatch<React.SetStateAction<iUserRes>>;
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string | ''>>;
  loginError: object;
  setLoginError: Dispatch<SetStateAction<object>>;
}

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({} as iUserRes);
  const [avatar, setAvatar] = useState('');
  const [loginError, setLoginError] = useState({});
  const toast = useToast();
  const router = useRouter();

  const setError = (
    errorResDataMessage: string | object,
    setterStateError: Dispatch<SetStateAction<object>>
  ) => {
    let message = {};
    if (typeof errorResDataMessage === 'string') {
      message = { message: errorResDataMessage };
      setterStateError(message);
    } else if (typeof errorResDataMessage === 'object') {
      Object.entries(errorResDataMessage).forEach(([key, value]) => {
        if (typeof value === 'string') {
          message[key] = value;
          console.log('string', message);
        } else if (Array.isArray(value)) {
          console.log('array', message);
          if (value.length <= 1) {
            message[key] = value[0] as string;
          } else {
            message[key] = '';
            value.forEach((elem) => {
              message[key] = message[key] + `${elem} - `;
            });
            message[key] = message[key].slice(0, -3);
            console.log(message[key]);
          }
          console.log(message);
        }
      });
      setterStateError(message);
    }
  };

  const registerUser = async (data: iRegisterFormData) => {
    try {
      const newUser: iUserRes = await api.post('/users', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast({
        title: 'success',
        variant: 'solid',
        position: 'top-right',
        isClosable: true,
        render: () => (
          <Box
            color={'gray.50'}
            p={3}
            bg={'green.600'}
            fontWeight={'bold'}
            borderRadius={'md'}
          >
            Registration successfully completed!
          </Box>
        ),
      });
      setUser(newUser);
      await router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfile = async (token: string) => {
    try {
      const { data } = await api.get<iUserRes>('/users/profile', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);

      setCookie(null, 'car.userName', data.name, {
        maxAge: 60 * 60 * 24 * 3,
        path: '/',
      });

      setCookie(null, 'car.userId', data.id, {
        maxAge: 60 * 60 * 24 * 3,
        path: '/',
      });
      setCookie(
        null,
        'car.userAdvertiser',
        JSON.stringify(data.is_advertiser),
        {
          maxAge: 60 * 60 * 24 * 3,
          path: '/',
        }
      );
      setCookie(null, 'car.userImage', data.profile_img, {
        maxAge: 60 * 60 * 24 * 3,
        path: '/',
      });
      if (data.description) {
        setCookie(null, 'car.userDescription', data.description, {
          maxAge: 60 * 60 * 24 * 3,
          path: '/',
        });
      }
      setCookie(null, 'car.userId', data.phone_number, {
        maxAge: 60 * 60 * 24 * 3,
        path: '/',
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (dataLoginForm: iLoginReq, callback: () => void) => {
    try {
      setLoading(true);
      const { data } = await api.post<iLoginRes>('/auth', dataLoginForm);
      const { token } = data;
      setCookie(null, 'car.token', token, {
        maxAge: 60 * 60 * 24 * 3,
        path: '/',
      });
      if (callback) {
        callback();
      }
      setLoginError({});

      await getUserProfile(token);

      router.push('/');
      toast({
        title: 'success',
        variant: 'solid',
        position: 'top-right',
        isClosable: true,
        render: () => (
          <Box
            color={'gray.50'}
            p={3}
            bg={'green.600'}
            fontWeight={'bold'}
            borderRadius={'md'}
          >
            Login successfully executed !
          </Box>
        ),
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
        const { message } = error.response?.data;
        setError(message, setLoginError);

        setUser({} as iUserRes);
      }
    } finally {
      if (loginError) {
        console.error(loginError);
      }

      setLoading(false);
    }
  };

  const handleLogout = () => {
    removeCookie('token');
    setUser({} as iUserRes);
    router.push('/');
  };

  const updateUser = async (data: iUserReqUpdate) => {
    try {
      const updatedUser: iUserRes = await api.patch(`/users/${user.id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast({
        title: 'success',
        variant: 'solid',
        position: 'top-right',
        isClosable: true,
        render: () => (
          <Box
            color={'gray.50'}
            p={3}
            bg={'green.600'}
            fontWeight={'bold'}
            borderRadius={'md'}
          >
            Update successfully completed!
          </Box>
        ),
      });
      setUser(updatedUser);
      await router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        registerUser,
        getUserProfile,
        updateUser,
        loginUser,
        user,
        setUser,
        avatar,
        setAvatar,
        loginError,
        setLoginError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
