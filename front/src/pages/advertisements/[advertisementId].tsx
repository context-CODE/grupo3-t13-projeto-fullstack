/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { CardImagesAd } from '@/components/CardImagesAd';
import { DataCar } from '@/components/dataCar';
import { Box, Flex } from '@chakra-ui/react';
import { CommentList } from '@/components/CommentList';
import LayoutPage from '@/components/LayoutPage';
import ProfileCard from '@/components/productPage/ProfileCard';
import BoxComment from '@/components/BoxComment';
import { GetServerSideProps } from 'next';
import {
  iAdvertisement,
  useAdvertisementContext,
} from '@/contexts/advertisementContext';
import api from '@/services';
import { useEffect } from 'react';

interface iAdProps {
  advertisement: iAdvertisement;
}

export const getServerSideProps: GetServerSideProps<iAdProps> = async (ctx) => {
  try {
    const advertisementId = ctx.query.advertisementId;

    const { data } = await api.get<iAdvertisement>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/advertisements/${advertisementId}/`
    );

    return {
      props: {
        advertisement: data,
      },
    };
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default function Advertisement({ advertisement }: iAdProps) {
  const { setCurrentAdvertisement } = useAdvertisementContext();

  useEffect(() => {
    setCurrentAdvertisement(advertisement);
  }, []);

  return (
    <LayoutPage>
      <Box bgGradient="linear(to bottom, brand.400 40%, grey.100 40%)">
        <Flex
          w={{ base: '90%', lg: '95%' }}
          maxW="1440px"
          mx="auto"
          gap="16px"
          flexDir={{ base: 'column', lg: 'row' }}
          flexWrap="wrap"
          pt="32px"
          pb="16px"
        >
          <DataCar />

          <Flex flexDir="column" gap="32px" w={{ base: '100%', lg: '30%' }}>
            <CardImagesAd />
            <ProfileCard />
          </Flex>

          <CommentList />

          <BoxComment />
        </Flex>
      </Box>
    </LayoutPage>
  );
}
