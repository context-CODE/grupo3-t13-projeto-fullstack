import { iAdvertisement, iAdvertiser } from '@/contexts/advertisementContext';
import { useAuthContext } from '@/contexts/authContext';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Link,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  Avatar,
  useDisclosure,
  Flex,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ModalUpdateAd } from '../modalAd/modalUpdateAd';

interface IProductCardsProps {
  advertisement: iAdvertisement;
  advertiser?: iAdvertiser;
}

const ProductCard = ({ advertisement, advertiser }: IProductCardsProps) => {
  const { user } = useAuthContext();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
        <Link
          as={NextLink}
          href={`/advertisements/${advertisement.id}`}
          _hover={{ textDecor: 'unset' }}
        >
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
                <Avatar name={advertisement.user.name} h="32px" w="32px" />
                <Text variant={'body-2-500'}>{advertisement.user.name}</Text>
              </HStack>
            </Stack>
          </CardBody>
          <CardFooter p={0}>
            <HStack
              w={'100%'}
              display={'flex'}
              justifyContent={'space-between'}
            >
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

      <ModalUpdateAd isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

export default ProductCard;
