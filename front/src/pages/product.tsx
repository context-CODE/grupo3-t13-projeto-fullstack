/* eslint-disable react/no-unescaped-entities */
import BoxComment from '@/components/BoxComment';
import { CardImagesAd } from '@/components/CardImagesAd';
import Comment from '@/components/Comment';
import { DataCar } from '@/components/dataCar';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import ProfileCard from '@/components/productPage/ProfileCard';
import { Box, Text } from '@chakra-ui/react';

export default function Product() {
  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'grey.200'}
      maxH={'100%'}
      gap={'10px'}
    >
      <Header />
      <Box
        display={'flex'}
        flexDir={{ base: 'column', lg: 'row' }}
        justifyContent={'space-around'}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        width={'90%'}
        marginTop={'100px'}
        maxW={{ md: '1252px', base: '351px' }}
        gap={{ base: '10px', lg: '0px', md: '100px' }}
      >
        <DataCar />
        <Box
          display={'flex'}
          flexDir={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'20px'}
          maxW={{ md: '752px', base: '351px' }}
        >
          <CardImagesAd />
          <ProfileCard />
        </Box>
      </Box>
      <Box
        w={{ base: '90%', lg: '90%' }}
        maxW={{ base: '351px', md: '752px', lg: '1365px' }}
        display={'flex'}
        flexDir={'column'}
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justifyContent={'center'}
        gap={'10px'}
      >
        <Box
          bg={'white'}
          w={{ base: '100%', md: '90%' }}
          // display={'flex'}
          // justifyContent={'center'}
          // alignItems={'center'}
          borderRadius={'4px'}
        >
          <Text bg={'white'} paddingTop={{ base: '10px', lg: '10px' }}>
            <Text
              variant={'Heading-2-600'}
              marginBottom={'10px'}
              color={'black'}
              bg={'white'}
            >
              Descrição
            </Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </Box>
        <Box>
          <Comment
            name={'Lucas'}
            image="teste"
            date="02/04/2000"
            comment="Teste"
          />
        </Box>
        <BoxComment name={'Lucas'} image={'vasco'} />
      </Box>
      <Footer />
    </Box>
  );
}
