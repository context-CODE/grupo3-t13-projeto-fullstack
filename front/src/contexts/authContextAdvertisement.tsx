import { createContext, useContext, useState } from 'react';
import api from '@/services/index';
import {
  iAdvertisement,
  iAdvertisementRes,
} from '@/types/advertisement.context';

export interface iApiError {
  error: string;
}

export interface iAuthAdvertisementContext {
  advertisement: object;
  existAdvert: object;
  advertList: unknown;
  SubCreateAdvertisements: (data: iAdvertisement) => void | unknown;
  SubAdvertisements: () => void | unknown;
  SubDeleteAdvertisements: (id: string) => void | unknown;
  SubUpdateAdvertisements: (id: string) => void | unknown;
  SubRetrieveAdvertisements: (id: string) => void | unknown;
}

const AuthAdvertisementContext = createContext<iAuthAdvertisementContext>(
  {} as iAuthAdvertisementContext
);

const AuthProviderAdvertisement = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [advertisement, setAdvertisement] = useState({} as iAdvertisementRes);
  const [advertList, setAdvertList] = useState([]);
  const [existAdvert, setExistAdvert] = useState({} as iAdvertisementRes);

  async function SubCreateAdvertisements(data: iAdvertisement) {
    try {
      const newAdvert: iAdvertisementRes = await api.post(
        '/advertisements',
        data
      );
      setAdvertisement(newAdvert);
    } catch (error) {
      console.log(error);
    }
  }

  async function SubAdvertisements() {
    try {
      const arrAdvert: [] = await api.get('/advertisements');
      setAdvertList(arrAdvert);
    } catch (error) {
      console.log(error);
    }
  }

  async function SubDeleteAdvertisements(id: string) {
    try {
      await api.delete(`/advertisements/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function SubUpdateAdvertisements(id: string) {
    try {
      await api.patch(`/advertisements/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function SubRetrieveAdvertisements(id: string) {
    try {
      const findAdvert: iAdvertisementRes = await api.get(
        `advertisements/${id}`
      );
      setExistAdvert(findAdvert);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthAdvertisementContext.Provider
      value={{
        advertisement,
        advertList,
        existAdvert,
        SubCreateAdvertisements,
        SubAdvertisements,
        SubDeleteAdvertisements,
        SubUpdateAdvertisements,
        SubRetrieveAdvertisements,
      }}
    >
      {children}
    </AuthAdvertisementContext.Provider>
  );
};

export default AuthProviderAdvertisement;

export const useAuthAdvertisements = () => useContext(AuthAdvertisementContext);
