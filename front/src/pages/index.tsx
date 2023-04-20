import RegisterForm from '@/components/registerForm/RegisterForm';
import { Box, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Heading>Home</Heading>
      <RegisterForm />
    </Box>
  );
}
