import LayoutPage from '@/components/LayoutPage';
import { useRouter } from 'next/router';
import LoginForm from '@/components/forms/LoginForm';
import { Flex } from '@chakra-ui/react';
import RegisterForm from '@/components/forms/RegisterForm';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

const AuthPage = () => {
  const router = useRouter();
  const { asPath } = router;

  const renderForm = () => {
    if (asPath.startsWith('/login')) {
      return <LoginForm />;
    } else if (asPath.startsWith('/register')) {
      return <RegisterForm />;
    } else {
      return null;
    }
  };

  return (
    <LayoutPage>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        w={'100%'}
        minH={{ base: 'calc(100vh - 390px)', md: 'calc(100vh - 220px)' }}
        bg={'grey.200'}
      >
        {renderForm()}
      </Flex>
    </LayoutPage>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = nookies.get(ctx);
  if (cookies['car.token']) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default AuthPage;
