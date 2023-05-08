import { useAdvertisementContext } from '@/contexts/advertisementContext';
import {
  Flex,
  Button,
  Card,
  CardBody,
  Heading,
  Tag,
  Image,
  Text,
} from '@chakra-ui/react';

export const DataCar = () => {
  const { currentAdvertisement } = useAdvertisementContext();

  return (
    <Flex
      flexDir={'column'}
      gap="16px"
      w={{ base: '100%', lg: 'calc(70% - 16px)' }}
    >
      <Flex
        bg={'white'}
        w="100%"
        justifyContent={'center'}
        alignItems={'center'}
        borderRadius="base"
        padding="16px"
      >
        <Image
          src={currentAdvertisement?.image}
          alt="Car photo"
          minH="328px"
          objectFit="contain"
        />
      </Flex>

      <Card>
        <CardBody w="100%" p="16px">
          <Heading variant={'Heading-6-600'} textTransform="capitalize">
            {currentAdvertisement?.brand} {currentAdvertisement?.model}
          </Heading>

          <Flex
            flexDir="column"
            gap="16px"
            justifyContent="flex-start"
            w="100%"
            mt="16px"
          >
            <Flex gap="16px" alignItems={'center'}>
              <Tag>{currentAdvertisement?.year}</Tag>
              <Tag>{currentAdvertisement?.kilometers}</Tag>
            </Flex>

            <Text variant={{ base: 'Heading-6-600', sm: 'Heading-7-500' }}>
              {currentAdvertisement?.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </Flex>

          <Button mt="16px" variant={'default'} alignSelf="start">
            Comprar
          </Button>
        </CardBody>
      </Card>

      <Card>
        <CardBody w="100%" p="16px">
          <Heading variant="Heading-6-600">Descrição</Heading>

          <Text variant="body-1-400" mt="16px">
            {currentAdvertisement?.description}
          </Text>
        </CardBody>
      </Card>
    </Flex>
  );
};
