import { iAdvertisement } from '@/contexts/advertisementContext';
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
  useDisclosure,
  Avatar,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ModalUpdateAd } from '../modalAd/modalUpdateAd';

interface IProductCardsProps {
  advertisement: iAdvertisement;
}

const ProductCard = ({ advertisement }: IProductCardsProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link
        as={NextLink}
        href={`/advertisements/${advertisement.id}`}
        _hover={{ textDecor: 'unset' }}
      >
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
        </Card>
      </Link>

      <ModalUpdateAd isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

export default ProductCard;
