/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import api from '@/services';
import { useToast } from '@chakra-ui/react';

interface iCar {
  id: string;
  name: string;
  brand: string;
  year: number;
  fuel: number;
  value: number;
}

const modalRegisterAdSchema = z.object({
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
type iModalRegisterAdSchema = z.infer<typeof modalRegisterAdSchema>;

interface IModalRegisterAdProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalRegisterAd = ({
  onOpen,
  isOpen,
  onClose,
}: IModalRegisterAdProps) => {
  const toast = useToast();
  const [carList, setCarList] = useState<iCar[]>([]);
  const [filterBrand, setFilterBrand] = useState('');
  const [filterModel, setFilterModel] = useState('');
  const [fipeValue, setFipeValue] = useState<string>();
  const brands: string[] = [
    'chevrolet',
    'citroën',
    'fiat',
    'ford',
    'honda',
    'hyundai',
    'nissan',
    'peugeot',
    'renault',
    'toyota',
    'volkswagen',
  ];
  const brandFiltered: string[] = brands.filter((e) =>
    filterBrand === '' ? false : e.includes(filterBrand.toLowerCase())
  );

  const modelFiltered: iCar[] = carList.filter((e) =>
    filterModel === '' ? false : e.name.includes(filterModel.toLowerCase())
  );

  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<iModalRegisterAdSchema>({
    defaultValues: {
      image_gallery: [{ image_url: '' }],
    },
    resolver: zodResolver(modalRegisterAdSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'image_gallery',
  });

  const addFieldImage = () => {
    if (fields.length < 5) {
      append({ image_url: '' });
    }
  };

  const submit = async (dataAd: iModalRegisterAdSchema) => {
    try {
      await api.post('/advertisements', dataAd);
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

  const getCarList = async (): Promise<void> => {
    const brand = getValues('brand').toLowerCase().trim();
    if (brand) {
      const url = `https://kenzie-kars.herokuapp.com/cars?brand=${brand}`;
      const { data } = await axios.get<iCar[]>(url);
      setCarList(data);
    }
  };

  const getBrand = async (brand: string) => {
    setValue('brand', brand);
    await getCarList();
  };

  const getModel = (car: iCar) => {
    setValue('model', car.name);
    setValue('year', car.year);
    const fipeVal = car.value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    setFipeValue(fipeVal);
  };

  const getfilterBrand = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterBrand(e.target.value);
  };

  const getFilterModel = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterModel(e.target.value);
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(submit)}>
            <ModalHeader>
              <Heading variant="Heading-7-500">Criar anúncio</Heading>
            </ModalHeader>
            <ModalCloseButton color="grey.500" />

            <ModalBody>
              <Text variant="body-2-500" mb="16px">
                Infomações do veículo
              </Text>

              <VStack>
                <FormControl position="relative">
                  <FormLabel>Marca</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ex: Mercedes Benz"
                    {...register('brand')}
                    onBlur={() => getCarList()}
                    onChange={(e) => getfilterBrand(e)}
                  />
                  {errors.brand && (
                    <FormHelperText color="alert.300">
                      {errors.brand?.message}
                    </FormHelperText>
                  )}
                  {brandFiltered.length > 0 && (
                    <Flex
                      bg="white"
                      flexDir="column"
                      gap="8px"
                      borderRadius="base"
                      position="absolute"
                      zIndex="1"
                      p="16px"
                      left="0"
                      top="99%"
                      border="2px solid"
                      borderColor="grey.600"
                    >
                      {brandFiltered.map((brand) => (
                        <Box
                          key={brand}
                          cursor="pointer"
                          color="grey.600"
                          _hover={{ color: 'grey.900' }}
                          onClick={() => {
                            // eslint-disable-next-line @typescript-eslint/no-floating-promises
                            getBrand(brand);
                            setFilterBrand('');
                          }}
                        >
                          {brand}
                        </Box>
                      ))}
                    </Flex>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel>Modelo</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ex: A 200 CGI ADVANCE SEDAN"
                    {...register('model')}
                    onChange={(e) => getFilterModel(e)}
                  />
                  {errors.model && (
                    <FormHelperText color="alert.300">
                      {errors.model?.message}
                    </FormHelperText>
                  )}
                  {modelFiltered.length > 0 && (
                    <Flex
                      bg="white"
                      flexDir="column"
                      gap="8px"
                      borderRadius="base"
                      position="absolute"
                      zIndex="1"
                      p="16px"
                      left="0"
                      top="99%"
                      border="2px solid"
                      borderColor="grey.600"
                    >
                      {modelFiltered.map((car) => (
                        <Box
                          key={car.id}
                          cursor="pointer"
                          color="grey.600"
                          _hover={{ color: 'grey.900' }}
                          onClick={() => {
                            // eslint-disable-next-line @typescript-eslint/no-floating-promises
                            getModel(car);
                            setFilterModel('');
                          }}
                        >
                          {car.name}
                        </Box>
                      ))}
                    </Flex>
                  )}
                </FormControl>

                <Flex gap="16px">
                  <FormControl>
                    <FormLabel>Ano</FormLabel>
                    <Input
                      type="number"
                      placeholder="Ex: 2018"
                      {...register('year')}
                    />
                    {errors.year && (
                      <FormHelperText color="alert.300">
                        {errors.year?.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Combustível</FormLabel>
                    <Input
                      type="text"
                      placeholder="Ex: Gasolina / Flex"
                      {...register('fuel')}
                    />
                    {errors.fuel && (
                      <FormHelperText color="alert.300">
                        {errors.fuel?.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Flex>

                <Flex gap="16px">
                  <FormControl>
                    <FormLabel>Quilometragem</FormLabel>
                    <Input
                      type="number"
                      placeholder="Ex: 30.000"
                      {...register('kilometers')}
                    />
                    {errors.kilometers && (
                      <FormHelperText color="alert.300">
                        {errors.kilometers?.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Cor</FormLabel>
                    <Input
                      type="text"
                      placeholder="Ex: Branco"
                      {...register('color')}
                    />
                    {errors.color && (
                      <FormHelperText color="alert.300">
                        {errors.color?.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Flex>

                <Flex gap="16px">
                  <FormControl>
                    <FormLabel>Preço tabela FIPE</FormLabel>
                    <Input
                      type="text"
                      placeholder="Ex: R$ 48.000,00"
                      defaultValue={fipeValue}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Preço</FormLabel>
                    <Input
                      type="number"
                      placeholder="Ex: R$ 50.000,00"
                      {...register('price')}
                    />
                    {errors.price && (
                      <FormHelperText color="alert.300">
                        {errors.price?.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Flex>

                <FormControl>
                  <FormLabel>Descrição</FormLabel>
                  <Input
                    type="text"
                    placeholder="Digite uma descrição sobre o anúncio"
                    {...register('description')}
                  />
                  {errors.description && (
                    <FormHelperText color="alert.300">
                      {errors.description?.message}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel>Imagem de capa</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ex: https://image.com"
                    {...register('image')}
                  />
                  {errors.image && (
                    <FormHelperText color="alert.300">
                      {errors.image?.message}
                    </FormHelperText>
                  )}
                </FormControl>

                {fields.map((field, index) => (
                  <FormControl key={field.id} position="relative">
                    <FormLabel>{index + 1}° Imagem da galeria</FormLabel>
                    <Input
                      type="text"
                      placeholder="Ex: https://image.com"
                      {...register(`image_gallery.${index}.image_url`)}
                    />
                    <IconButton
                      w="16px"
                      h="16px"
                      top="48px"
                      right="2px"
                      position="absolute"
                      aria-label="Remove input"
                      icon={<DeleteIcon />}
                      bg="none"
                      _hover={{ color: 'alert.300' }}
                      _active={{ color: 'red' }}
                      onClick={() => remove(index)}
                    />

                    {errors.image_gallery && (
                      <FormHelperText color="alert.300">
                        {errors.image_gallery?.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                ))}

                <Button
                  alignSelf="flex-start"
                  bg="brand.100"
                  color="brand.400"
                  h="38px"
                  onClick={addFieldImage}
                >
                  Adicionar campo para imagem da galeria
                </Button>
              </VStack>
            </ModalBody>

            <ModalFooter gap="16px">
              <Button variant="lightGrey" onClick={onClose}>
                Cancelar
              </Button>
              <Button variant="default" type="submit">
                Criar anúncio
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
