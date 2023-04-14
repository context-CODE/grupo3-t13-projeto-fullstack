import { Avatar, Box, Text } from '@chakra-ui/react';

interface iComment {
  name: string;
  comment: string;
  date: string;
  image: string;
}

const Comment = ({ name, comment, date, image }: iComment) => {
  return (
    <Box
      display="flex"
      gap="10px"
      flexDir="column"
      maxW={{ base: '283px', md: '663px' }}
      minW={{ base: '283px', md: '663px' }}
      bg={'white'}
      padding={'20px'}
      borderRadius={'5px'}
    >
      <Box display="flex" gap="10px" alignItems="center">
        <Avatar src={image} />
        <Text textAlign={'center'} variant={'body-2-500'}>
          {name}
        </Text>
        <Text color="#ADB5BD">•</Text>
        <Text fontSize="12px" color="#868E96">
          {date}
        </Text>
      </Box>
      <Text variant={'body-2-400'}>{comment}</Text>
    </Box>
  );
};

export default Comment;
