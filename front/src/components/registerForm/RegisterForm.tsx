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
    console.log(formData);
    await registerUser(formData);
  };
  console.log(errors);

  return (
    <Flex
      flexDir="column"
      gap="16px"
      padding={'48px'}
      display="flex"
      maxW={{ base: '374px', md: '411px' }}
      minW={{ base: '315px', md: '411px' }}
      bg="grey.10"
    >
      <Heading variant="Heading-5-500">Cadastro</Heading>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Heading variant="body-2-500">Informações pessoais</Heading>

        <FormControl isRequired>
          <FormLabel>Nome</FormLabel>
          <Input placeholder="Ex: Samuel Leão" {...register('name')} />
          {errors.name && <Text color="red">{errors.name.message}</Text>}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Imagem de perfil</FormLabel>
          <Input
            placeholder="Adicione uma imagem para seu perfil"
            {...register('profile_img')}
          />
          {errors.profile_img && (
            <Text color="red">{errors.profile_img.message}</Text>
          )}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Ex: samuel@kenzie.com.br"
            {...register('email')}
          />
          {errors.email && <Text color="red">{errors.email.message}</Text>}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>CPF</FormLabel>
          <Input placeholder="000.000.000-00" {...register('cpf')} />
          {errors.cpf && <Text color="red">{errors.cpf.message}</Text>}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Celular</FormLabel>
          <Input placeholder="(DDD) 90000-0000" {...register('phone_number')} />
          {errors.phone_number && (
            <Text color="red">{errors.phone_number.message}</Text>
          )}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Data de nascimento</FormLabel>
          <Input placeholder="00/00/00" {...register('birthdate')} />
          {errors.birthdate && (
            <Text color="red">{errors.birthdate.message}</Text>
          )}
        </FormControl>

        <Text mb="8px">Descrição</Text>
        <Textarea
          placeholder="Digitar descrição"
          {...register('description')}
          size="sm"
        />
        {errors.description && (
          <Text color="red">{errors.description.message}</Text>
        )}

        <Heading variant="body-2-500">Informações de endereço</Heading>

        <FormControl isRequired>
          <FormLabel>CEP</FormLabel>
          <Input placeholder="00000-000" {...register('address.zip_code')} />
          {errors.address?.zip_code && (
            <Text color="red">{errors.address?.zip_code.message}</Text>
          )}
        </FormControl>

        <Box
          display="flex"
          gap="10px"
          flexDir="row"
          maxW={{ base: '374px', md: '411px' }}
          minW={{ base: '315px', md: '411px' }}
          bg="grey.10"
          padding={'48px'}
        >
          <FormControl isRequired>
            <FormLabel>Estado</FormLabel>
            <Input
              placeholder="Digitar Estado"
              {...register('address.state')}
            />
            {errors.address?.state && (
              <Text color="red">{errors.address?.state.message}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Cidade</FormLabel>
            <Input placeholder="Digitar cidade" {...register('address.city')} />
            {errors.address?.city && (
              <Text color="red">{errors.address?.city.message}</Text>
            )}
          </FormControl>
        </Box>

        <FormControl isRequired>
          <FormLabel>Rua</FormLabel>
          <Input placeholder="Digitar rua" {...register('address.street')} />
          {errors.address?.street && (
            <Text color="red">{errors.address?.street.message}</Text>
          )}
        </FormControl>

        <Box
          display="flex"
          gap="10px"
          flexDir="row"
          maxW={{ base: '374px', md: '411px' }}
          minW={{ base: '315px', md: '411px' }}
          bg="grey.10"
          padding={'48px'}
        >
          <FormControl isRequired>
            <FormLabel>Número</FormLabel>
            <Input placeholder="-000" {...register('address.number')} />
            {errors.address?.number && (
              <Text color="red">{errors.address?.number.message}</Text>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Complemento</FormLabel>
            <Input
              placeholder="Ex: apart 307"
              {...register('address.complement')}
            />
            {errors.address?.complement && (
              <Text color="red">{errors.address?.complement.message}</Text>
            )}
          </FormControl>
        </Box>

        <Heading variant="body-2-500">Tipo de conta</Heading>
        <Button
          variant="default"
          onClick={() => setValue('is_advertiser', false)}
        >
          Comprador
        </Button>
        <Button
          variant="disable"
          onClick={() => setValue('is_advertiser', false)}
        >
          Anunciante
        </Button>

        <FormControl isRequired>
          <FormLabel>Senha</FormLabel>
          <Input placeholder="Digitar senha" {...register('password')} />
          {errors.password && (
            <Text color="red">{errors.password.message}</Text>
          )}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Confirmar Senha</FormLabel>
          <Input
            placeholder="Confirmar senha"
            {...register('confirm_password')}
          />
          {errors.confirm_password && (
            <Text color="red">{errors.confirm_password.message}</Text>
          )}
        </FormControl>

        <Button type="submit" variant="default">
          Finalizar cadastro
        </Button>
      </form>
    </Flex>
  );
};
export default RegisterForm;
