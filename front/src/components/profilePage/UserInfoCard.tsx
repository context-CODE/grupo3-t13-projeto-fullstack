import { Button, Flex, Heading, Image, Tag, Text } from '@chakra-ui/react';

interface IUserInfoCardProps {
  onOpen: () => void;
}

const UserInfoCard = ({ onOpen }: IUserInfoCardProps) => {
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
        <Image
          borderRadius={'full'}
          boxSize={'104px'}
          src={'https://bit.ly/kent-c-dodds'}
          alt={'Avatar'}
        />
        <Flex gap={'10px'} flexWrap={'wrap'} alignItems={'center'}>
          <Heading variant={'Heading-6-600'}>Arlindo Cunha</Heading>
          <Tag>Anunciante</Tag>
        </Flex>
        <Text
          minH={{ base: 'fit-content', md: '56px' }}
          noOfLines={{ base: 5, md: 2 }}
          variant={'body-1-400'}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry is standard dummy text
          ever since the 1500s sada sdd asdsadsad asdsad asdsadsa sad sadasd
        </Text>
      </Flex>
      <Button variant={'outline'} maxW={'160px'} onClick={() => onOpen()}>
        Criar anuncio
      </Button>
      <Button variant={'outline'} maxW={'160px'} onClick={() => onOpen()}>
        Editar perfil
      </Button>
    </Flex>
  );
};
export default UserInfoCard;
