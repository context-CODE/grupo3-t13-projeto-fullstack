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
import { z } from 'zod';
import api from '@/services';
import { useToast } from '@chakra-ui/react';
import { FormAdv } from './formAdv';
import nookies from 'nookies';

export const modalRegisterAdSchema = z.object({
  brand: z.string().max(60, 'Máximo 60 caracteres').nonempty('Campo vazio'),
  model: z.string().max(120, 'Máximo 120 caracteres').nonempty('Campo vazio'),
  fuel: z.string().max(20, 'Máximo 20 caracteres').nonempty('Campo vazio'),
  color: z.string().max(20, 'Máximo 20 caracteres').nonempty('Campo vazio'),
  year: z
    .string()
    .nonempty('Campo vazio')
    .transform((val) => Number(val))
    .refine((val) => val >= 0, 'Número menor que 0'),
  kilometers: z
    .string()
    .nonempty('Campo vazio')
    .transform((val) => Number(val))
    .refine((val) => val >= 0, 'Número menor que 0'),
  price: z
    .string()
    .nonempty('Campo vazio')
    .transform((val) => Number(val))
    .refine((val) => val >= 0, 'Número menor que 0'),
  description: z.string().nonempty('Campo vazio'),
  image: z
    .string()
    .max(150, 'Máximo 150 caracteres')
    .nonempty('Defina uma imagem de capa'),
  image_gallery: z.array(
    z.object({
      image_url: z
        .string()
        .max(150, 'Máximo 150 caracteres')
        .nonempty('Campo vazio'),
    })
  ),
});
export type iModalRegisterAdSchema = z.infer<typeof modalRegisterAdSchema>;

interface iModalRegisterAdProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalRegisterAd = ({ isOpen, onClose }: iModalRegisterAdProps) => {
  const toast = useToast();

  const submit = async (dataAd: iModalRegisterAdSchema) => {
    try {
      const token = nookies.get()['car.token'];
      await api.post('/advertisements', dataAd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast({
        title: 'Anúncio criado com sucesso.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
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
          <Heading variant="Heading-7-500">Criar anúncio</Heading>
        </ModalHeader>
        <ModalCloseButton color="grey.500" />

        <ModalBody>
          <Text variant="body-2-500" mb="16px">
            Informações do veículo
          </Text>

          <FormAdv submit={submit} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
