import { Box, Textarea, Avatar, Button, Text } from '@chakra-ui/react';

interface iBoxComment {
  name: string;
  image: string;
}

const BoxComment = ({ name, image }: iBoxComment) => {
  return (
    <Box
      display={'flex'}
      flexDir={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'20px'}
      bg="grey.10"
      padding={'20px 10px'}
      w={{ base: '100%', md: '50%' }}
      minW={{ base: '283px', md: '663px' }}
    >
      <Box display={'flex'} gap="10px" bg={'white'} w="97%" alignItems="center">
        <Avatar src={image} />
        <Text textAlign={'center'} variant={'body-2-500'}>
          {name}
        </Text>
      </Box>
      <Box
        display={'flex'}
        flexDir={'column'}
        border={{ md: '1px', base: 'none' }}
        alignItems={{ base: 'flex-start', md: 'flex-end' }}
        borderColor={{ base: 'grey.200', md: 'grey.200' }}
        borderRadius={'4px'}
        minW={'97%'}
        gap={{ base: '10px', md: 'none' }}
      >
        <Textarea
          placeholder="Escreva aqui seu comentário"
          fontSize="16px"
          size="sm"
          overflow="none"
          h={{ base: '150' }}
          borderStyle={{ md: 'none', base: '1px' }}
          borderColor={{ base: 'grey.200', md: 'none' }}
          borderRadius={{ base: '4px', md: 'none' }}
          w="97%"
          mt="2%"
          resize={'none'}
        />
        <Button
          bg="brand.400"
          _hover={{ bg: 'grey.900' }}
          p={'12px 22px'}
          color="white"
          w="20%"
          maxWidth={'108px'}
          minWidth={'108px'}
          mr="2%"
          mb="2%"
        >
          Comentar
        </Button>
      </Box>
      <Box display={'flex'} gap="10px" w={'97%'} flexWrap={'wrap'}>
        <Text
          p={'5px 10px'}
          fontSize="12px"
          borderRadius="24px"
          bg="grey.200"
          color="grey.600"
        >
          Gostei muito!
        </Text>
        <Text
          p={'5px 10px'}
          fontSize="12px"
          borderRadius="24px"
          bg="grey.200"
          color="grey.600"
        >
          Incrível
        </Text>
        <Text
          p={'5px 10px'}
          borderRadius="24px"
          fontSize="12px"
          bg="grey.200"
          color=" grey.600"
        >
          Recomendarei para meus amigos!
        </Text>
      </Box>
    </Box>
  );
};

export default BoxComment;
