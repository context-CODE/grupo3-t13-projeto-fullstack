import { iAdvertiser } from '@/contexts/advertisementContext';
import { useAuthContext } from '@/contexts/authContext';
import { Avatar, Button, Flex, Heading, Tag, Text } from '@chakra-ui/react';

interface IUserInfoCardProps {
  advertiserData: iAdvertiser;
  onOpen: () => void;
}

const UserInfoCard = ({ advertiserData, onOpen }: IUserInfoCardProps) => {
  const { user } = useAuthContext();

  return (
    <Flex
      zIndex={'10'}
      flexDirection={'column'}
      rowGap={{ base: '16px', md: '40px' }}
      w={'90%'}
      maxW={'1240px'}
      h={{ base: 'fit-content', md: '406px' }}
      p={{ base: '40px 22px 40px 29px', md: '44px 70px 42px 41px' }} // se n anunciante md3 50px
      mt={'155px'}
      mb={{ base: '44px', sm: '65px' }}
      bg={'white'}
    >
      <Flex flexDirection={'column'} rowGap={'20px'}>
        <Avatar
          // borderRadius={'full'}
          // boxSize={'104px'}
          name={advertiserData.name}
          src={advertiserData.profile_img}
          // alt={advertiserData.name}
        />
        <Flex gap={'10px'} flexWrap={'wrap'} alignItems={'center'}>
          <Heading variant={'Heading-6-600'}>{advertiserData.name}</Heading>
          <Tag>Anunciante</Tag>
        </Flex>
        <Text
          minH={{ base: 'fit-content', md: '56px' }}
          noOfLines={{ base: 5, md: 2 }}
          variant={'body-1-400'}
        >
          {advertiserData.description}
        </Text>
      </Flex>
      {advertiserData.id === user.id && (
        <Button variant={'outline'} maxW={'160px'} onClick={() => onOpen()}>
          Criar anuncio
        </Button>
      )}
    </Flex>
  );
};
export default UserInfoCard;
