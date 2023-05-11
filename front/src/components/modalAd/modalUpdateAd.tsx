/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import api from '@/services';
import { useToast } from '@chakra-ui/react';
import { FormAdv } from './formAdv';
import nookies from 'nookies';
import { iModalRegisterAdSchema } from './modalRegisterAd';

interface iModalUpdateAdProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalUpdateAd = ({ isOpen, onClose }: iModalUpdateAdProps) => {
  const toast = useToast();

  const submit = async (dataAd: iModalRegisterAdSchema) => {
    try {
      console.log(dataAd);
      // const token = nookies.get()['car.token'];
      // await api.patch('/advertisements', dataAd, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });

      // toast({
      //   title: 'Anúncio criado com sucesso.',
      //   status: 'success',
      //   duration: 2000,
      //   isClosable: true,
      //   position: 'top-right',
      // });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Ocorreu um erro.',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading variant="Heading-7-500">Editar anúncio</Heading>
        </ModalHeader>
        <ModalCloseButton color="grey.500" />

        <ModalBody>
          <Text variant="body-2-500" mb="16px">
            Informações do veículo
          </Text>

          <FormAdv submit={submit} onClose={onClose} formUpdate={true} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
