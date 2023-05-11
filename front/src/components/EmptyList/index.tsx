import { Flex, Heading } from '@chakra-ui/react';

interface iEmptyList {
  message: string;
}

export const EmptyList = ({ message }: iEmptyList) => {
  return (
    <Flex w="100%" justifyContent="center" mt="52px" pt="30px">
      <Heading variant={'Heading-1-700'}>{message}</Heading>
    </Flex>
  );
};
