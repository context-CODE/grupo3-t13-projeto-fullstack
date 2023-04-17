import CardList from '@/components/homepage/CardList';
import { Box } from '@chakra-ui/react';
export default function Home() {
  return (
    <Box display={'flex'} alignItems={'center'} w={'100vw'} >
      <Box w={'1200px'} maxW={'1200px'}>
        
        <CardList/>
      </Box>
    </Box>
  );
}
