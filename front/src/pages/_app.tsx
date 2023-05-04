import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '@/styles';
import { AuthProvider } from '@/contexts/authContext';
import { UserProvider } from '@/contexts/userContext';
import AuthProviderAdvertisement from '@/contexts/authContextAdvertisement';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <UserProvider>
          <AuthProviderAdvertisement>
            <Component {...pageProps} />
          </AuthProviderAdvertisement>
        </UserProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
