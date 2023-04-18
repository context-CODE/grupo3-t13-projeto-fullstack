import api from '@/services/index';
import 'react-toastify/dist/ReactToastify.css';
import {
  iProviderProps,
  iUserLogin,
  iUserRes,
  iUserReq,
} from '@/types/auth.context';
import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { createContext, useContext, useState } from 'react';

export interface iAuthContext {
  registerUser: (data: iUserReq) => void;
  getUserProfile: () => void;
  login: (data: iUserLogin) => void;
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

  const registerUser = async (data: iUserReq) => {
    try {
      const newUser: iUserRes = await api.post('/users', data);
      toast.success('🦄 Registration successfully completed!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setUser(newUser);
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const login = (data: iUserLogin) => {
    try {
      api.post('/login', data)
        .then((response) => {
          setCookie(null, 'car.token', response.data.token, {
            maxAge: 60 * 60 * 24 * 3,
            path: '/',
          });
          setCookie(null, 'car.user', response.data.userName, {
            maxAge: 60 * 60 * 24 * 3,
            path: '/',
          });
          setCookie(null, 'car.id', response.data.id, {
            maxAge: 60 * 60 * 24 * 3,
            path: '/',
          });
          setAvatar(response.data.avatar);
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
                Login successfully executed!
              </Box>
            ),
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserProfile = async () => {
    try {
      const userProfile:iUserRes = await api.get('/profile');
      toast.success('🦄 Profile successfully selected!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setUser(userProfile);
      router.push('/');
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

export const useAuth = () => useContext(AuthContext);
