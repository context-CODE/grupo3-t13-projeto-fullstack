import LayoutPage from '@/components/LayoutPage';
import CardList from '@/components/CardList';
import { Box, Flex } from '@chakra-ui/react';

const ProfilePage = () => {
  return (
    <LayoutPage>
      <Flex
        position={'relative'}
        bg={'white'}
        minH={'100vh'}
        w={'100vw'}
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
        <CardList />
      </Flex>
    </LayoutPage>
  );
};

export default ProfilePage;
