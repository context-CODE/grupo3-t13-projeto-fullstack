import {
  iAdvertisement,
  useAdvertisementContext,
} from '@/contexts/advertisementContext';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import {
  iModalRegisterAdSchema,
  modalRegisterAdSchema,
} from './modalRegisterAd';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';

interface iCar {
  id: string;
  name: string;
  brand: string;
  year: number;
  fuel: number;
  value: number;
}

interface Fuel {
  [key: number]: string;
}

interface iFormProps {
  submit(dataAd: iModalRegisterAdSchema): Promise<void>;
  onClose(): void;
  formUpdate?: boolean;
  ad?: iAdvertisement | null;
}

export const FormAdv = ({
  submit,
  onClose,
  formUpdate = false,
  ad = null,
}: iFormProps) => {
  const { brands } = useAdvertisementContext();
  const [carList, setCarList] = useState<iCar[]>([]);
  const [filterBrand, setFilterBrand] = useState('');
  const [filterModel, setFilterModel] = useState('');
  const [fipeValue, setFipeValue] = useState<string>();
  const [isAvaliabe, setIsAvaliable] = useState(ad?.is_available);

  const brandFiltered: string[] = brands.filter((e) =>
    filterBrand === '' ? false : e.includes(filterBrand.toLowerCase())
  );

  const modelFiltered: iCar[] = carList.filter((e) =>
    filterModel === '' ? false : e.name.includes(filterModel.toLowerCase())
  );

  let defaultValues = {
    image_gallery: [{ image_url: '' }],
  };

  if (ad) {
    defaultValues = {
      ...ad,
      image_gallery: [],
    };
  }

  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<iModalRegisterAdSchema>({
    defaultValues: { ...defaultValues },
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

    const fuel: Fuel = {
      1: 'flex',
      2: 'híbrido',
      3: 'elétrico',
    };

    setValue('fuel', fuel[car.fuel]);
  };

  const getfilterBrand = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterBrand(e.target.value);
  };

  const getFilterModel = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterModel(e.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { deleteAd } = useAdvertisementContext();

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(submit)}>
      <VStack>
        <FormControl position="relative">
          <FormLabel>Marca</FormLabel>
          <Input
            type="text"
            placeholder="Ex: Mercedes Benz"
            {...register('brand')}
            onBlur={() => void getCarList()}
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
            <Input type="number" placeholder="Ex: 2018" {...register('year')} />
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

        {formUpdate && (
          <FormControl>
            <FormLabel>Publicado</FormLabel>
            <Stack spacing={5} direction="row">
              <Button
                w="50%"
                variant={isAvaliabe ? 'default' : 'outlineGrey'}
                onClick={() => {
                  setValue('is_available', true);
                  setIsAvaliable(true);
                }}
              >
                Sim
              </Button>

              <Button
                w="50%"
                variant={!isAvaliabe ? 'default' : 'outlineGrey'}
                onClick={() => {
                  setValue('is_available', false);
                  setIsAvaliable(false);
                }}
              >
                Não
              </Button>
            </Stack>
          </FormControl>
        )}

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

        <Flex
          w="100%"
          gap="16px"
          justifyContent={formUpdate ? 'space-between' : 'end'}
        >
          {!formUpdate && (
            <>
              <Button variant="lightGrey" onClick={onClose}>
                Cancelar
              </Button>
              <Button variant="default" type="submit">
                Criar anúncio
              </Button>
            </>
          )}
          {formUpdate && (
            <>
              <Button
                variant="lightGrey"
                onClick={() => {
                  void deleteAd();
                  onClose();
                }}
              >
                Excluir anúncio
              </Button>
              <Button variant="default" type="submit">
                Salvar alterações
              </Button>
            </>
          )}
        </Flex>
      </VStack>
    </form>
  );
};
