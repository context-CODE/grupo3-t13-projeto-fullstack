import { iAdvertisement, iAdvertiser } from '@/contexts/advertisementContext';
import { useAuthContext } from '@/contexts/authContext';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Link,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface IProductCardsProps {
  advertisement: iAdvertisement;
  advertiser?: iAdvertiser;
}

const ProductCard = ({ advertisement, advertiser }: IProductCardsProps) => {
  const { user } = useAuthContext();
  return (
    <Card
      display={'flex'}
      flexDirection={'column'}
      minW={'312px'}
      w={'312px'}
      maxH={'350px'}
      rowGap={'16px'}
      shadow={'none'}
      bgColor={'transparent'}
    >
      <Link as={NextLink} href={`/advertisements/${advertisement.id}`}>
        <CardBody p={0} m={0}>
          <Image
            src={advertisement.image}
            alt="Green double couch with wooden legs"
            h={'152px'}
            w={'312px'}
            objectFit={'cover'}
          />
          <Stack mt={'4'} spacing={'16px'}>
            <Heading
              isTruncated
              variant={'Heading-7-600'}
              textTransform={'capitalize'}
            >
              {advertisement.brand} - {advertisement.model}
            </Heading>
            <Text
              noOfLines={2}
              variant={'body-2-400'}
              h={'48px'}
              maxH={'48px'}
              w={'312px'}
            >
              {advertisement.description}
            </Text>
            <HStack _hover={{ cursor: 'pointer' }}>
              <Flex
                bg={'brand.300'}
                w={'32px'}
                h={'32px'}
                color={'white'}
                borderRadius={'full'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text variant={'body-2-500'} color={'white'}>
                  RP
                </Text>
              </Flex>
              <Text variant={'body-2-500'}>User Shop</Text>
            </HStack>
          </Stack>
        </CardBody>
        <CardFooter p={0}>
          <HStack w={'100%'} display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} columnGap={'2'}>
              <Tag>{advertisement.kilometers} KM</Tag>
              <Tag>{advertisement.year}</Tag>
            </Box>
            <Text variant={'Heading-7-500'} fontWeight={'bold'}>
              {advertisement.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
          </HStack>
        </CardFooter>
      </Link>
      {advertiser?.id === user.id && (
        <Flex gap={'16px'}>
          <Button variant={'outlineDark'} px={'20px'}>
            Editar
          </Button>
          <Button variant={'outlineDark'} px={'20px'}>
            Ver Detalhes
          </Button>
        </Flex>
      )}
    </Card>
  );
};

export default ProductCard;
