import { useAdvertisementContext } from '@/contexts/advertisementContext';
import {
  Flex,
  Heading,
  Input,
  ListItem,
  UnorderedList,
  Button,
} from '@chakra-ui/react';

export const FilterAdvertisements = () => {
  const {
    brands,
    advertisements,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    addFilter,
    filter,
    filterIsActive,
    // eslint-disable-next-line @typescript-eslint/unbound-method
    toggleFilter,
  } = useAdvertisementContext();

  const colors = advertisements?.filter((ad, i, a) => {
    return a.findIndex((adv) => adv.color === ad.color) === i;
  });

  const models = advertisements?.filter((ad, i, a) => {
    return a.findIndex((adv) => adv.model === ad.model) === i;
  });

  return (
    <Flex
      flexDir="column"
      gap="16px"
      mt={'52px'}
      display={{ base: 'none', sm: 'flex' }}
    >
      <Heading variant="Heading-4-600">Marca</Heading>
      <UnorderedList>
        {brands.map((brand) => (
          <ListItem key={brand} listStyleType="none">
            <Heading
              variant="Heading-6-500"
              color={filter.brand === brand ? 'grey.900' : 'grey.600'}
              _hover={{ color: 'grey.900' }}
              cursor="pointer"
              textTransform="capitalize"
              onClick={() => addFilter({ brand: brand })}
            >
              {brand}
            </Heading>
          </ListItem>
        ))}
      </UnorderedList>

      <Heading variant="Heading-4-600">Modelo</Heading>
      <UnorderedList>
        {models?.map(({ model, id }) => (
          <ListItem key={id} listStyleType="none">
            <Heading
              variant="Heading-6-500"
              color={filter.model === model ? 'grey.900' : 'grey.600'}
              _hover={{ color: 'grey.900' }}
              cursor="pointer"
              onClick={() => addFilter({ model: model })}
            >
              {model}
            </Heading>
          </ListItem>
        ))}
      </UnorderedList>

      <Heading variant="Heading-4-600">Cor</Heading>
      <UnorderedList>
        {colors?.map(({ color, id }) => (
          <ListItem key={id} listStyleType="none">
            <Heading
              variant="Heading-6-500"
              color={filter.color === color ? 'grey.900' : 'grey.600'}
              _hover={{ color: 'grey.900' }}
              cursor="pointer"
              onClick={() => addFilter({ color: color })}
            >
              {color}
            </Heading>
          </ListItem>
        ))}
      </UnorderedList>

      <Heading variant="Heading-4-600">Ano</Heading>
      <UnorderedList>
        {[2019, 2020, 2021, 2022].map((year) => (
          <ListItem key={year} listStyleType="none">
            <Heading
              variant="Heading-6-500"
              color={filter.year === year ? 'grey.900' : 'grey.600'}
              _hover={{ color: 'grey.900' }}
              cursor="pointer"
              onClick={() => addFilter({ year: year })}
            >
              {year}
            </Heading>
          </ListItem>
        ))}
      </UnorderedList>

      <Heading variant="Heading-4-600">Combustível</Heading>
      <UnorderedList>
        {['Gasolina', 'Flex', 'Híbrido'].map((fuel) => (
          <ListItem key={fuel} listStyleType="none">
            <Heading
              variant="Heading-6-500"
              color={filter.fuel === fuel ? 'grey.900' : 'grey.600'}
              _hover={{ color: 'grey.900' }}
              cursor="pointer"
              onClick={() => addFilter({ fuel: fuel })}
            >
              {fuel}
            </Heading>
          </ListItem>
        ))}
      </UnorderedList>

      <Heading variant="Heading-4-600">Km</Heading>
      <Flex gap="16px">
        <Input
          type="number"
          placeholder="Mínimo"
          variant="filled"
          bg="grey.400"
          outline="none"
          borderRadius="none"
          onChange={(e) => addFilter({ minKm: e.target.value })}
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400' }}
        />
        <Input
          type="number"
          placeholder="Máximo"
          variant="filled"
          bg="grey.400"
          outline="none"
          borderRadius="none"
          onChange={(e) => addFilter({ maxKm: e.target.value })}
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400' }}
        />
      </Flex>

      <Heading variant="Heading-4-600">Preço</Heading>
      <Flex gap="16px">
        <Input
          type="number"
          placeholder="Mínimo"
          variant="filled"
          bg="grey.400"
          outline="none"
          borderRadius="none"
          onChange={(e) => addFilter({ minPrice: e.target.value })}
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400' }}
        />
        <Input
          type="number"
          placeholder="Máximo"
          variant="filled"
          bg="grey.400"
          outline="none"
          borderRadius="none"
          onChange={(e) => addFilter({ maxPrice: e.target.value })}
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400' }}
        />
      </Flex>
      <Button variant="default" onClick={() => toggleFilter()}>
        {!filterIsActive && 'Ver anúncios'}
        {filterIsActive && 'Limpar filtros'}
      </Button>
    </Flex>
  );
};
