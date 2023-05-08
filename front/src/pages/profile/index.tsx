import LayoutPage from '@/components/LayoutPage';
import CardList from '@/components/CardList';
import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import UserInfoCard from '@/components/profilePage/UserInfoCard';
import ControlPagination from '@/components/controlPagination';
import { ModalRegisterAd } from '@/components/modalRegisterAd';
import ModalUpdateUser from '@/components/modalUpdateUser';

const ProfilePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <UserInfoCard onOpen={onOpen} />

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
      {/* <ModalUpdateUser isOpen={isOpen} onClose={onClose} onOpen={onOpen} /> */}
    </>
  );
};

export default ProfilePage;
