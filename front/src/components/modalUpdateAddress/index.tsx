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

import { useAuthContext } from '@/contexts/authContext';
import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { iAddressReqUpdate } from '@/types/address.context';
import { addressReqUpdateSchema } from '@/schemas/addresses.schema';

interface iModalUpdateAddressProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalUpdateAddress = ({ isOpen, onClose }: iModalUpdateAddressProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iAddressReqUpdate>({
    resolver: zodResolver(addressReqUpdateSchema),
  });

  const { updateAddress } = useAuthContext();

  const submit = async (formData: iAddressReqUpdate) => {
    await updateAddress(formData);
  };
  console.log(errors);

  return (
    <>
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
              Editar endereço
            </Heading>
            <form onSubmit={handleSubmit(submit)}>
              <Heading variant={'Heading-5-500'} margin={'20px 0 20px 0'}>
                Informações de endereço
              </Heading>

              <FormControl margin={'20px 0 20px 0'}>
                <FormLabel>CEP</FormLabel>
                <Input placeholder="" {...register('zip_code')} />
                {errors.zip_code && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors.zip_code.message}
                  </Text>
                )}
              </FormControl>

              <FormControl margin={'20px 0 20px 0'}>
                <FormLabel>Estado</FormLabel>
                <Input placeholder="" {...register('state')} />
                {errors.state && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors.state.message}
                  </Text>
                )}
              </FormControl>

              <FormControl margin={'20px 0 20px 0'}>
                <FormLabel>Cidade</FormLabel>
                <Input placeholder="" {...register('city')} />
                {errors.city && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors.city.message}
                  </Text>
                )}
              </FormControl>

              <FormControl margin={'20px 0 20px 0'}>
                <FormLabel>Rua</FormLabel>
                <Input placeholder="" {...register('street')} />
                {errors.street && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors.street.message}
                  </Text>
                )}
              </FormControl>

              <FormControl margin={'20px 0 20px 0'}>
                <FormLabel>Número</FormLabel>
                <Input placeholder="" {...register('number')} />
                {errors.number && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors.number.message}
                  </Text>
                )}
              </FormControl>

              <FormControl margin={'20px 0 20px 0'}>
                <FormLabel>Complemento</FormLabel>
                <Input placeholder="" {...register('complement')} />
                {errors.complement && (
                  <Text color={'red'} fontSize={'14px'}>
                    {errors.complement.message}
                  </Text>
                )}
              </FormControl>

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
export default ModalUpdateAddress;
