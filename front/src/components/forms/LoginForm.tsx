import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { FieldError, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthContext } from '@/contexts/authContext';
import { iLoginReq } from '@/types/auth.context';
import { loginReqSchema } from '@/schemas/auth.schema';
import NextLink from 'next/link';

const LoginForm = () => {
  const { loginUser, loginError, loading } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iLoginReq>({
    resolver: zodResolver(loginReqSchema),
    mode: 'onSubmit',
  });

  const emailError: boolean | FieldError =
    errors.email ||
    Object.keys(loginError).includes('email') ||
    (loginError.message?.toLowerCase().includes('email') as boolean);

  const passwordError: boolean | FieldError =
    errors.password ||
    Object.keys(loginError).includes('password') ||
    (loginError.message?.toLowerCase().includes('password') as boolean);

  const onFormSubmit = async (formData: iLoginReq): Promise<void> => {
    await loginUser(formData, () => {
      reset();
    });
  };

  return (
    <Flex
      as={'form'}
      w={{ base: '90%', sm: '412px' }}
      h={'fit-content'}
      p={'44px 48px'}
      direction={'column'}
      gap={'32px'}
      bg={'white'}
      borderRadius={'4px'}
      my={{ base: '70px', md: 'none' }}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <Heading variant={'Heading-5-500'} fontWeight={'bold'}>
        Login
      </Heading>
      <Flex flexDirection={'column'} gap={'20px'}>
        <Flex flexDirection={'column'} gap={'20px'}>
          <FormControl id={'email'} isRequired isInvalid={emailError}>
            <FormLabel variant={'default'}>Usuário</FormLabel>
            <Input
              required
              type={'email'}
              placeholder={'name@mail.com'}
              {...register('email')}
              variant={'default'}
            />
            {!emailError ? (
              <FormHelperText mb={2} fontSize={12} pl={1}>
                Digite seu e-mail
              </FormHelperText>
            ) : (
              <FormErrorMessage mb={2} fontSize={12} pl={1}>
                {errors.email?.message ||
                  (loginError.message?.toLowerCase().includes('email') &&
                    loginError.message) ||
                  (loginError.email && loginError.email)}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl id={'password'} isRequired isInvalid={passwordError}>
            <FormLabel variant={'default'}>Senha</FormLabel>
            <Input
              required
              type={'password'}
              placeholder={'********'}
              {...register('password')}
            />
            {!passwordError ? (
              <FormHelperText mb={2} fontSize={12} pl={1}>
                Digite sua senha
              </FormHelperText>
            ) : (
              <FormErrorMessage mb={2} fontSize={12} pl={1}>
                {errors.password?.message ||
                  (loginError.message?.toLowerCase().includes('password') &&
                    loginError.message) ||
                  (loginError.password && loginError.password)}
              </FormErrorMessage>
            )}
          </FormControl>
          <Link
            as={NextLink}
            variant={'simple_2'}
            mt={'-10px'}
            alignSelf={'flex-end'}
          >
            Esqueci minha senha
          </Link>
        </Flex>
        <Flex flexDir={'column'} gap={'24px'}>
          <Button type="submit" variant={'default'}>
            {loading ? <Spinner size="sm" /> : 'Entrar'}
          </Button>
          <Link
            as={NextLink}
            variant={'simple_1'}
            href="/register"
            alignSelf={'center'}
          >
            Ainda não possui conta?
          </Link>
          <Link as={NextLink} variant={'btnOutlineGrey'} href="/register">
            Cadastrar
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginForm;
