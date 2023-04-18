import { createContext, useContext } from 'react';

interface UserProviderData {}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: iUserProps) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
