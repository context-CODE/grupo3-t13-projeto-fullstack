import { Flex } from '@chakra-ui/react';
import ProductCard from '../productCard/ProductCard';

const CardList = ({ maxW = '1032px' }) => {
  return (
    <Flex
      minW={{ base: '95vw', sm: 'auto' }}
      maxW={maxW}
      columnGap={{ base: '12px', sm: '48px' }}
      rowGap={'78px'}
      wrap={{ base: 'nowrap', sm: 'wrap' }}
      justifyContent={{ base: 'flex-start', sm: 'center' }}
      alignSelf={{ base: 'flex-start', sm: 'center' }}
      p={{ base: '22px 12px 16px 0', sm: 0 }}
      m={{ base: '0 0 0 5%', sm: '52px 0 0 0' }}
      overflowX={'auto'}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Flex>
  );
};

export default CardList;
