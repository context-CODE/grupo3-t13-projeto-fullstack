import {
  Flex,
  Heading,
  Input,
  ListItem,
  UnorderedList,
  Text,
  Button,
} from '@chakra-ui/react';

export const FilterAdvertisements = () => {
  return (
    <Flex flexDir="column" gap="16px">
      <Heading fontSize="xl">Marca</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            BMW
          </Text>
        </ListItem>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            Posrche
          </Text>
        </ListItem>
      </UnorderedList>

      <Heading fontSize="xl">Modelo</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            BMW M3 COUPE
          </Text>
        </ListItem>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            Porsche Taycan
          </Text>
        </ListItem>
      </UnorderedList>
      <Heading fontSize="xl">Cor</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            Cinza
          </Text>
        </ListItem>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            Azul
          </Text>
        </ListItem>
      </UnorderedList>

      <Heading fontSize="xl">Ano</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            2022
          </Text>
        </ListItem>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            2023
          </Text>
        </ListItem>
      </UnorderedList>

      <Heading fontSize="xl">Combustível</Heading>
      <UnorderedList>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            Flex
          </Text>
        </ListItem>
        <ListItem listStyleType="none">
          <Text
            color="gray.600"
            fontSize="small"
            _hover={{ color: 'gray.900' }}
            cursor="pointer"
          >
            Gasolina
          </Text>
        </ListItem>
      </UnorderedList>

      <Heading fontSize="xl">Km</Heading>
      <Flex gap="16px">
        <Input
          type="number"
          placeholder="Mínimo"
          variant="filled"
          bg="gray.400"
          outline="none"
          borderRadius="none"
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400' }}
        />
        <Input
          type="number"
          placeholder="Máximo"
          variant="filled"
          bg="gray.400"
          outline="none"
          borderRadius="none"
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400' }}
        />
      </Flex>

      <Heading fontSize="xl">Preço</Heading>
      <Flex gap="16px">
        <Input
          type="number"
          placeholder="Mínimo"
          variant="filled"
          bg="gray.400"
          outline="none"
          borderRadius="none"
          _hover={{ borderColor: 'brand.400' }}
          _focus={{ borderColor: 'brand.400' }}
        />
        <Input
          type="number"
          placeholder="Máximo"
          variant="filled"
          bg="gray.400"
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
