import LayoutPage from '@/components/LayoutPage';
import CardList from '@/components/CardList';
import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import UserInfoCard from '@/components/profilePage/UserInfoCard';
import ControlPagination from '@/components/controlPagination';
import { ModalRegisterAd } from '@/components/modalRegisterAd';
import ModalUpdateUser from '@/components/modalUpdateUser';
import api from '@/services';
import { useRouter } from 'next/router';
import {
  iAdvertisement,
  iAdvertiser,
  useAdvertisementContext,
} from '@/contexts/advertisementContext';
import { useEffect } from 'react';

interface iAdvertiserPage {
  advertiserData: iAdvertiser;
  advertisementsData: iAdvertisement[];
}

const AdvertiserPage = ({
  advertiserData,
  advertisementsData,
}: iAdvertiserPage) => {
  const router = useRouter();
  const { setAdvertisements } = useAdvertisementContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setAdvertisements(advertisementsData);
  }, []);
  // }, [advertisementsData, setAdvertisements]);

  if (router.isFallback) {
    return <div>Carregando ...</div>;
  }

  return (
    <>
      <LayoutPage>
        <Flex
          p={0}
          position={'relative'}
          bg={'grey.50'}
          // minH={'100vh'}
          w={'100%'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Box
            pos="absolute"
            top="0"
            left="0"
            bottom="0"
            w="100%"
            bgColor="#4529E6"
            maxH={{ base: '331px', sm: '357px' }}
          />
          <UserInfoCard advertiserData={advertiserData} onOpen={onOpen} />
          <Heading
            alignSelf={{ base: 'flex-start', md: 'center' }}
            marginLeft={{ base: '60px', md: 0 }}
            variant={'Heading-5-600'}
          >
            Anúncios
          </Heading>
          <CardList maxW="1392px" />
          <ControlPagination />
        </Flex>
      </LayoutPage>
      <ModalRegisterAd isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <ModalUpdateUser isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const { data } = await api.get(`/users/${id}/advertisements`);

  const advertisementData: iAdvertisement[] | undefined = data.advertisements;

  const advertiserData: iAdvertiser = data;

  return {
    props: {
      advertiserData,
      advertisementData,
    },

    revalidate: 1800,
  };
}

export default AdvertiserPage;
