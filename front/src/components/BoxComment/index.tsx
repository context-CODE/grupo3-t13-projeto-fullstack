import { Box, Textarea, Avatar, Button, Text } from '@chakra-ui/react';

const BoxComment = () => {
  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      alignItems={'start'}
      justifyContent={'space-evenly'}
      bg={'white'}
      h="400px"
      padding={'20px'}
      w="90%"
    >
      <Box display={'flex'} gap="20px" bg={'white'} w="90%" alignItems="center">
        <Avatar src="https://bit.ly/broken-link" />
        <Text textAlign={'center'} fontSize="19px" fontWeight="bold">
          Samuel Leão
        </Text>
      </Box>
      <Box
        display={'flex'}
        flexDir={'column'}
        border={'1px'}
        alignItems="end"
        borderColor="#E9ECEF"
        borderRadius={'4px'}
        maxW={'6724px'}
        minW={'6724px'}
      >
        <Textarea
          placeholder="Escreva aqui seu comentário"
          fontSize="16px"
          size="sm"
          overflow="none"
          borderStyle={'none'}
          w="97%"
          mt="2%"
          resize={'none'}
        />
        <Button
          bg={'#4529E6'}
          _hover={{ bg: 'black' }}
          p={'12px 22px'}
          color={'white'}
          w="20%"
          maxWidth={'100px'}
          mr="2%"
          mb="2%"
        >
          Comentar
        </Button>
      </Box>
      <Box display={'flex'} gap="5px">
        <Text
          p={'5px 10px'}
          fontSize="12px"
          borderRadius="24px"
          bg="#E9ECEF"
          color=" #868E96"
        >
          Gostei muito!
        </Text>
        <Text
          p={'5px 10px'}
          fontSize="12px"
          borderRadius="24px"
          bg="#E9ECEF"
          color=" #868E96"
        >
          Incrível
        </Text>
        <Text
          p={'5px 10px'}
          borderRadius="24px"
          fontSize="12px"
          bg="#E9ECEF"
          color=" #868E96"
        >
          Recomendarei para meus amigos!
        </Text>
      </Box>
    </Box>
  );
};

export default BoxComment;
