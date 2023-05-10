import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '@/styles';
// import { AuthProvider } from '@/contexts/authContext';
import { AdvertisementProvider } from '@/contexts/advertisementContext';
import AuthProvider from '@/contexts/authContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <AdvertisementProvider>
          <Component {...pageProps} />
        </AdvertisementProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
