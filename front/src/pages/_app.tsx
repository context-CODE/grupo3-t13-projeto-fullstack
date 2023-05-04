import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '@/styles';
import { AuthProvider } from '@/contexts/authContext';
<<<<<<< HEAD
import { UserProvider } from '@/contexts/userContext';
import AuthProviderAdvertisement from '@/contexts/authContextAdvertisement';
=======
import { AdvertisementProvider } from '@/contexts/advertisementContext';
>>>>>>> c8efdbdeff86d93ceb6b40d5ea3032181b6ab330

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
<<<<<<< HEAD
        <UserProvider>
          <AuthProviderAdvertisement>
            <Component {...pageProps} />
          </AuthProviderAdvertisement>
        </UserProvider>
=======
        <AdvertisementProvider>
          <Component {...pageProps} />
        </AdvertisementProvider>
>>>>>>> c8efdbdeff86d93ceb6b40d5ea3032181b6ab330
      </AuthProvider>
    </ChakraProvider>
  );
}
