import CardList from '@/components/CardList';
import { FilterAdvertisements } from '@/components/FilterAd';
import LayoutPage from '@/components/LayoutPage';
import ControlPagination from '@/components/controlPagination';
import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <LayoutPage>
      <Flex
        direction={'column'}
        alignItems={'center'}
        w={'100%'}
        minH={{ base: 'calc(100vh - 390px)', md: 'calc(100vh - 220px)' }}
      >
        <Flex
          justifyContent={{ base: 'flex-start', sm: 'center' }}
          alignItems={'center'}
          direction={'column'}
          gap={'16px'}
          w={'100%'}
          h={{ base: '625px', sm: '535px' }}
          maxH={{ base: '625px', sm: '535px' }}
          position={'relative'}
          bgImage={'/assets/Photo.svg'}
          bgSize={'contain'}
          bgPosition={'center'}
          bgRepeat={'no-repeat'}
          overflow={'hidden'}
        >
          <Box
            position={'absolute'}
            w={'100%'}
            h={'100%'}
            bgGradient={['linear(to-t, #000000, rgba(0, 0, 0, 0.29))']}
            zIndex={1}
          />
          <Heading
            variant={{ base: 'Heading-3-500-white', md: 'Heading-1-700-white' }}
            color={'white'}
            zIndex={2}
            mt={{ base: '75px', md: 0 }}
          >
            Motors Shop
          </Heading>
          <Heading
            variant={{ base: 'Heading-5-500-white', md: 'Heading-2-600-white' }}
            color={'white'}
            zIndex={2}
            px={'5%'}
          >
            A melhor plataforma de anúncios de carros do país
          </Heading>
        </Flex>
        <Flex justifyContent={'space-between'} gap={'100px'} mx={'60px'}>
          <FilterAdvertisements />
          <CardList />
        </Flex>
        <ControlPagination />
      </Flex>
    </LayoutPage>
  );
}
