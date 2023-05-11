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
  useEffect,
  useState,
} from 'react';
import { iAddressReqUpdate, iAddressRes } from '@/types/address.context';
import nookies from 'nookies';

export interface iAuthContext {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  registerUser: (data: iRegisterFormData) => Promise<void>;
  getUserProfile: (token: string) => Promise<void>;
  updateUser: (data: iUserReqUpdate) => Promise<void>;
  deleteUser: () => Promise<void>;
  updateAddress: (data: iAddressReqUpdate) => Promise<void>;
  loginUser: (data: iLoginReq, callback: () => void) => Promise<void>;
  user: iUserRes;
  setUser: React.Dispatch<React.SetStateAction<iUserRes>>;
  address: iAddressRes;
  setAddress: React.Dispatch<React.SetStateAction<iAddressRes>>;
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string | ''>>;
  loginError: object;
  setLoginError: Dispatch<SetStateAction<object>>;
  removeEmptyProperties: (obj: object) => { [k: string]: any };
}

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthProvider = ({ children }: iProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({} as iUserRes);
  const [address, setAddress] = useState({} as iAddressRes);
  const [avatar, setAvatar] = useState('');
  const [loginError, setLoginError] = useState({});
  const toast = useToast();
  const router = useRouter();

  function removeEmptyProperties(obj: object) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ''));
  }

  useEffect(() => {
    void (async () => {
      const token = nookies.get()['car.token'];

      if (token) {
        await getUserProfile(token);
      }
    })();
  }, []);

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
      setUser(data);
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

  // const handleLogout = () => {
  //   removeCookie('car.token');
  //   setUser({} as iUserRes);
  //   router.push('/');
  // };

  const updateUser = async (data: iUserReqUpdate) => {
    try {
      const token = nookies.get()['car.token'];
      const updatedUser: iUserRes = await api.patch(`/users/${user.id}`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
            User updated with success!
          </Box>
        ),
      });
      setUser(updatedUser);
      await router.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      const token = nookies.get()['car.token'];
      await api.delete(`/users/${user.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
            User deleted with success!
          </Box>
        ),
      });
      setUser({});
      await router.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  const updateAddress = async (data: iAddressReqUpdate) => {
    try {
      const token = nookies.get()['car.token'];
      const updatedAddress: iAddressRes = await api.patch(
        `/users/${user.id}/address/${address.id}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
            Address updated with success!!
          </Box>
        ),
      });
      setAddress(updatedAddress);
      await router.push('/profile');
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
        deleteUser,
        loginUser,
        updateAddress,
        user,
        setUser,
        address,
        setAddress,
        avatar,
        setAvatar,
        loginError,
        setLoginError,
        removeEmptyProperties,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
