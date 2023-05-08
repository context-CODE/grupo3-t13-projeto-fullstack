import { Flex } from '@chakra-ui/react';
import ProductCard from '../productCard/ProductCard';
import { useAdvertisementContext } from '@/contexts/advertisementContext';

interface iCardListProps {
  maxW: string;
}

const CardList = ({ maxW }: iCardListProps) => {
  const { advertisements, filter, filterIsActive } = useAdvertisementContext();

  const filteredAdvertisements = advertisements?.filter((ad) => {
    let match = true;

    if (filter.brand && ad.brand.toLowerCase() !== filter.brand.toLowerCase()) {
      match = false;
    }

    if (filter.model && ad.model.toLowerCase() !== filter.model.toLowerCase()) {
      match = false;
    }

    if (filter.color && ad.color.toLowerCase() !== filter.color.toLowerCase()) {
      match = false;
    }

    if (filter.fuel && ad.fuel.toLowerCase() !== filter.fuel.toLowerCase()) {
      match = false;
    }

    if (filter.year && ad.year !== filter.year) {
      match = false;
    }

    if (filter.minKm && ad.kilometers < Number(filter.minKm)) {
      match = false;
    }

    if (filter.maxKm && ad.kilometers > Number(filter.maxKm)) {
      match = false;
    }

    if (filter.minPrice && ad.price < Number(filter.minPrice)) {
      match = false;
    }

    if (filter.maxPrice && ad.price > Number(filter.maxPrice)) {
      match = false;
    }

    if (!filterIsActive) {
      match = true;
    }

    return match;
  });

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
      {filteredAdvertisements?.map((ad) => (
        <ProductCard key={ad.id} advertisement={ad} />
      ))}
    </Flex>
  );
};

export default CardList;
