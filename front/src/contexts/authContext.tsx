/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import api from '@/services/index';

import {
  iAuthReq,
  iProviderProps,
  iRegisterFormData,
} from '@/types/auth.context';
import { iUserRes } from '@/types/user.context';
import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { createContext, useContext, useState } from 'react';

export interface iAuthContext {
  registerUser: (data: iRegisterFormData) => Promise<void>;
  getUserProfile: () => Promise<void>;
  login: (data: iAuthReq) => void;
  user: iUserRes;
  setUser: React.Dispatch<React.SetStateAction<iUserRes>>;
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string | ''>>;
}

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

export const AuthProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState({} as iUserRes);
  const [avatar, setAvatar] = useState('');
  const toast = useToast();
  const router = useRouter();

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
      await router.push('/auth');
    } catch (error) {
      console.log(error);
    }
  };

  const login = (data: iAuthReq) => {
    try {
      api
        .post('/auth', data)
        .then((response) => {
          setCookie(null, 'car.token', response.data.token, {
            maxAge: 60 * 60 * 24 * 3,
            path: '/',
          });

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
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProfile = async () => {
    try {
      const userProfile: iUserRes = await api.get('/profile');
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
            Profile successfully selected!
          </Box>
        ),
      });
      setUser(userProfile);
      await router.push('/profile');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        registerUser,
        getUserProfile,
        login,
        user,
        setUser,
        avatar,
        setAvatar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
