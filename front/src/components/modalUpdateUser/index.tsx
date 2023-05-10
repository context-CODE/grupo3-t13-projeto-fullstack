/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  FormControl,
  FormLabel,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { iUserReqUpdate } from '@/types/user.context';
import { usersReqUpdateSchema } from '@/schemas/users.schema';
import { useAuthContext } from '@/contexts/authContext';
import { Button, Flex, Heading, Input, Text, Textarea } from '@chakra-ui/react';

interface iModalUpdateUserProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalUpdateUser = ({ isOpen, onClose }: iModalUpdateUserProps) => {
  const { updateUser, deleteUser, user } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserReqUpdate>({
    resolver: zodResolver(usersReqUpdateSchema),
    defaultValues: { ...user },
  });

  const submit = async (formData: iUserReqUpdate) => {
    console.log(formData);
    await updateUser(formData);
  };
  console.log(errors);

  return (
    <>
      <Button onClick={() => isOpen}></Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Flex
            w={{ base: '374px', sm: '520px' }}
            h={'fit-content'}
            p={'18px 24px'}
            flexDir="column"
            gap={'32px'}
            padding={'48px'}
            display={'flex'}
            bg={'grey.10'}
            fontSize={'24px'}
          >
            <Heading variant={'Heading-5-500'} fontWeight={'bold'}>
              Editar perfil
            </Heading>
            <form onSubmit={handleSubmit(submit)}>
              <Heading variant={'Heading-5-500'} margin={'20px 0 20px 0'}>
                Informações pessoais
              </Heading>

              <FormControl margin={'20px 0 20px 0'}>
                <FormLabel>Nome</FormLabel>
                <Input placeholder="Ex: Samuel Leão" {...register('name')} />
                {errors.name && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors.name.message}
                  </Text>
                )}
              </FormControl>

              <FormControl margin={'20px 0 20px 0'}>
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

              <FormControl margin={'20px 0 20px 0'}>
                <FormLabel>CPF</FormLabel>
                <Input placeholder="000.000.000-00" {...register('cpf')} />
                {errors.cpf && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors.cpf.message}
                  </Text>
                )}
              </FormControl>

              <FormControl margin={'20px 0 20px 0'}>
                <FormLabel>Celular</FormLabel>
                <Input
                  placeholder="(DDD) 90000-0000"
                  {...register('phone_number')}
                />
                {errors.phone_number && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors.phone_number.message}
                  </Text>
                )}
              </FormControl>

              <FormControl margin={'20px 0 20px 0'}>
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

              <Flex gap={'10px'}>
                <Button
                  type={'button'}
                  variant={'lightGrey'}
                  w={'100%'}
                  margin={'20px 0 20px 0'}
                  onClick={onClose}
                >
                  Cancelar
                </Button>

                <Button
                  type={'button'}
                  variant={'alert'}
                  w={'100%'}
                  margin={'20px 0 20px 0'}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  onClick={deleteUser}
                >
                  Excluir Perfil
                </Button>

                <Button
                  type="submit"
                  variant={'default'}
                  w={'100%'}
                  margin={'20px 0 20px 0'}
                  sx={{
                    fontSize: { base: '0.875rem', md: '0.875rem' },
                  }}
                >
                  Salvar Alterações
                </Button>
              </Flex>
            </form>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalUpdateUser;
