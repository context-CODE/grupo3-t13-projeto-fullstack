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
      bg="grey.10"
      padding={'20px'}
      borderRadius={'5px'}
    >
      <Box display="flex" gap="10px" alignItems="center">
        <Avatar src={image} />
        <Text textAlign={'center'} variant={'body-2-500'} color="grey.800">
          {name}
        </Text>
        <Text color="grey.500">•</Text>
        <Text fontSize="12px" color="grey.600">
          {date}
        </Text>
      </Box>
      <Text variant={'body-2-400'}>{comment}</Text>
    </Box>
  );
};

export default Comment;
