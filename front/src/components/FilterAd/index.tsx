import {
  Flex,
  Heading,
  Input,
  ListItem,
  UnorderedList,
  Button,
} from '@chakra-ui/react';

export const FilterAdvertisements = () => {
  return (
    <Flex flexDir="column" gap="16px" mt={'52px'}>
      <Heading variant="Heading-4-600">Marca</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Heading
            variant="Heading-6-500"
            color="grey.600"
            _hover={{ color: 'grey.900' }}
            cursor="pointer"
          >
            BMW
          </Heading>
        </ListItem>
      </UnorderedList>

      <Heading variant="Heading-4-600">Modelo</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Heading
            variant="Heading-6-500"
            color="grey.600"
            _hover={{ color: 'grey.900' }}
            cursor="pointer"
          >
            BMW
          </Heading>
        </ListItem>
      </UnorderedList>

      <Heading variant="Heading-4-600">Cor</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Heading
            variant="Heading-6-500"
            color="grey.600"
            _hover={{ color: 'grey.900' }}
            cursor="pointer"
          >
            BMW
          </Heading>
        </ListItem>
      </UnorderedList>

      <Heading variant="Heading-4-600">Ano</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Heading
            variant="Heading-6-500"
            color="grey.600"
            _hover={{ color: 'grey.900' }}
            cursor="pointer"
          >
            BMW
          </Heading>
        </ListItem>
      </UnorderedList>

      <Heading variant="Heading-4-600">Combustível</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Heading
            variant="Heading-6-500"
            color="grey.600"
            _hover={{ color: 'grey.900' }}
            cursor="pointer"
          >
            BMW
          </Heading>
        </ListItem>
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
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400' }}
        />
      </Flex>
      <Button variant="default">Ver anúncios</Button>
    </Flex>
  );
};
