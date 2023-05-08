import { Container } from '@chakra-ui/react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { ReactNode } from 'react';

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <Container
      p={0}
      m={0}
      mt={'80px'}
      display={'flex'}
      flexDirection={'column'}
      minW="100%"
      minH={'100%'}
    >
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default LayoutPage;
