import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react';

const ProductCard = () => {
  return (
    <Card
      display={'flex'}
      flexDirection={'column'}
      minW={'312px'}
      w={'312px'}
      maxH={'350px'}
      rowGap={'16px'}
      shadow={'none'}
    >
      <CardBody p={0} m={0}>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          h={'152px'}
          w={'312px'}
        />
        <Stack mt={'4'} spacing={'16px'}>
          <Heading isTruncated variant={'Heading-7-600'}>
            Living room Sofa f sdfsd dsf sdf sdf sdfsd sdf sdf
          </Heading>
          <Text
            noOfLines={2}
            variant={'body-2-400'}
            h={'48px'}
            maxH={'48px'}
            w={'312px'}
          >
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy ...sad asdasd as as asdasdasd asdasdasd asdasdasdas
            asdasd asdas asd as asdsada asd asdasdas d
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
            <Tag>0 KM</Tag>
            <Tag>2019</Tag>
          </Box>
          <Text variant={'Heading-7-500'} fontWeight={'bold'}>
            R$ 00.000,00
          </Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
