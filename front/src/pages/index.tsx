import { FilterAdvertisements } from '@/components/FilterAd';
import CardList from '@/components/homepage/CardList';
import { Box } from '@chakra-ui/react';
export default function Home() {
  return (
    <Box display={'flex'} justifyContent={'center'} w={'100vw'} >
      <Box w={'1200px'} minW={'375px'} maxW={'1032px'} display={'flex'} justifyContent={{base: 'center', md: 'space-between' }}>
        {/* <FilterAdvertisements /> */}
        
        <CardList/>
      </Box>
    </Box>
  );
}
