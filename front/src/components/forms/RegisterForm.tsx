/* eslint-disable @typescript-eslint/no-misused-promises */
import { registerFormSchema } from '@/schemas/auth.schema';
import { iRegisterFormData } from '@/types/auth.context';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthContext } from '../../contexts/authContext';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<iRegisterFormData>({ resolver: zodResolver(registerFormSchema) });

  const { registerUser } = useAuthContext();

  const onSubmitForm = async (formData: iRegisterFormData) => {
    await registerUser(formData);
  };

  return (
    <Flex
      w={{ base: '90%', sm: '412px' }}
      h={'fit-content'}
      p={'44px 48px'}
      flexDir="column"
      gap={'32px'}
      padding={'48px'}
      display={'flex'}
      bg={'grey.10'}
      fontSize={'24px'}
    >
      <Heading variant={'Heading-5-500'} fontWeight={'bold'}>
        Cadastro
      </Heading>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Heading variant={'Heading-5-500'} margin={'20px 0 20px 0'}>
          Informações pessoais
        </Heading>

        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>Nome</FormLabel>
          <Input placeholder="Ex: Samuel Leão" {...register('name')} />
          {errors.name && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.name.message}
            </Text>
          )}
        </FormControl>

        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>Imagem de perfil</FormLabel>
          <Input
            placeholder="Adicione uma imagem para seu perfil"
            {...register('profile_img')}
          />
          {errors.profile_img && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.profile_img.message}
            </Text>
          )}
        </FormControl>

        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Ex: samuel@kenzie.com.br"
            {...register('email')}
          />
          {errors.email && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.email.message}
            </Text>
          )}
        </FormControl>

        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>CPF</FormLabel>
          <Input placeholder="000.000.000-00" {...register('cpf')} />
          {errors.cpf && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.cpf.message}
            </Text>
          )}
        </FormControl>

        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>Celular</FormLabel>
          <Input placeholder="(DDD) 90000-0000" {...register('phone_number')} />
          {errors.phone_number && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.phone_number.message}
            </Text>
          )}
        </FormControl>

        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>Data de nascimento</FormLabel>
          <Input placeholder="00/00/00" {...register('birthdate')} />
          {errors.birthdate && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.birthdate.message}
            </Text>
          )}
        </FormControl>

        <Text mb={'8px'} margin={'20px 0 20px 0'}>
          Descrição
        </Text>
        <Textarea
          placeholder="Digitar descrição"
          {...register('description')}
          size={'sm'}
        />
        {errors.description && (
          <Text color={'red'} fontSize={'14px'}>
            {errors.description.message}
          </Text>
        )}

        <Heading variant={'Heading-5-500'} margin={'40px 0 20px 0'}>
          Informações de endereço
        </Heading>

        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>CEP</FormLabel>
          <Input placeholder="00000-000" {...register('address.zip_code')} />
          {errors.address?.zip_code && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.address?.zip_code.message}
            </Text>
          )}
        </FormControl>

        <Box
          display={'flex'}
          gap={'10px'}
          flexDir={'row'}
          w={'100%'}
          justifyContent={'space-between'}
          bg={'grey.10'}
        >
          <FormControl isRequired margin={'20px 0 20px 0'}>
            <FormLabel>Estado</FormLabel>
            <Input
              placeholder="Digitar Estado"
              {...register('address.state')}
            />
            {errors.address?.state && (
              <Text color={'red'} fontSize={'14px'}>
                {errors.address?.state.message}
              </Text>
            )}
          </FormControl>

          <FormControl isRequired margin={'20px 0 20px 0'}>
            <FormLabel>Cidade</FormLabel>
            <Input placeholder="Digitar cidade" {...register('address.city')} />
            {errors.address?.city && (
              <Text color={'red'} fontSize={'14px'}>
                {errors.address?.city.message}
              </Text>
            )}
          </FormControl>
        </Box>

        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>Rua</FormLabel>
          <Input placeholder="Digitar rua" {...register('address.street')} />
          {errors.address?.street && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.address?.street.message}
            </Text>
          )}
        </FormControl>

        <Box
          display={'flex'}
          gap={'10px'}
          flexDir={'row'}
          w={'100%'}
          bg={'grey.10'}
          justifyContent={'space-between'}
        >
          <FormControl isRequired margin={'20px 0 20px 0'}>
            <FormLabel>Número</FormLabel>
            <Input placeholder="000" {...register('address.number')} />
            {errors.address?.number && (
              <Text color={'red'} fontSize={'14px'}>
                {errors.address?.number.message}
              </Text>
            )}
          </FormControl>

          <FormControl isRequired margin={'20px 0 20px 0'}>
            <FormLabel>Complemento</FormLabel>
            <Input
              placeholder="Ex: apart 307"
              {...register('address.complement')}
            />
            {errors.address?.complement && (
              <Text color={'red'} fontSize={'14px'}>
                {errors.address?.complement.message}
              </Text>
            )}
          </FormControl>
        </Box>

        <Heading variant={'Heading-5-500'} margin={'40px 0 20px 0'}>
          Tipo de conta
        </Heading>
        <Flex
          justifyContent={'space-between'}
          w={'100%'}
          h={'fit-content'}
          flexDir="row"
          display={'flex'}
          bg={'grey.10'}
          gap={'10px'}
        >
          <Button
            w={{ base: '139px', sm: '152px' }}
            variant={'default'}
            onClick={() => setValue('is_advertiser', false)}
          >
            Comprador
          </Button>
          <Button
            w={{ base: '139px', sm: '152px' }}
            variant={'outlineGrey'}
            onClick={() => setValue('is_advertiser', true)}
          >
            Anunciante
          </Button>
        </Flex>
        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>Senha</FormLabel>
          <Input placeholder="Digitar senha" {...register('password')} />
          {errors.password && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.password.message}
            </Text>
          )}
        </FormControl>

        <FormControl isRequired margin={'20px 0 20px 0'}>
          <FormLabel>Confirmar Senha</FormLabel>
          <Input
            placeholder="Confirmar senha"
            {...register('confirm_password')}
          />
          {errors.confirm_password && (
            <Text color={'red'} fontSize={'14px'}>
              {errors.confirm_password.message}
            </Text>
          )}
        </FormControl>

        <Button
          type={'submit'}
          variant={'default'}
          w={'100%'}
          margin={'20px 0 20px 0'}
        >
          Finalizar cadastro
        </Button>
      </form>
    </Flex>
  );
};
export default RegisterForm;
