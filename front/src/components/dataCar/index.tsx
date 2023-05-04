import {
  Flex,
  Button,
  Card,
  CardBody,
  Stack,
  Heading,
  Tag,
  CardFooter,
  Image,
  Text,
} from '@chakra-ui/react';

export const DataCar = () => {
  return (
    <Flex
      maxW={{ base: '90%' }}
      flexDir={'column'}
      display={'flex'}
      flexDirection={'column'}
      alignItems="center"
      justifyContent="space-between"
      gap={{ md: '50px', base: '10px' }}
    >
      <Flex
        bg={'white'}
        w={{ md: '752px', base: '351px' }}
        h={'352px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image
          src="/assets/CarDetailHome.png"
          alt="Car photo"
          borderRadius="lg"
          bg="white"
          w={{ base: '351px', md: '441px' }}
          h={'252px'}
        />
      </Flex>
      <Card justifyContent={'center'} w={{ base: '351px', md: '752px' }}>
        <CardBody w="100%">
          <Stack p={'16px'} mt={'6'} spacing={'3'}>
            <Heading variant={'Heading-6-600'} textAlign={'center'} size="md">
              Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
            </Heading>
            <Flex
              justifyContent={'space-between'}
              flexDirection={{ base: 'column', sm: 'row' }}
              gap={'10'}
            >
              <Flex flexDir="row" gap="2" alignItems={'center'}>
                <Tag>2013</Tag>
                <Tag>0 KM</Tag>
              </Flex>
              <Text
                color={'grey.800'}
                variant={{ base: 'Heading-6-600', sm: 'Heading-7-500' }}
              >
                R$ 00.000,00
              </Text>
            </Flex>
          </Stack>
        </CardBody>

        <CardFooter>
          <Button
            justifyContent={'left'}
            variant={'default'}
            height={{ base: '38px', sm: '48px' }}
          >
            Comprar
          </Button>
        </CardFooter>
      </Card>
    </Flex>
  );
};
