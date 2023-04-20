import { Button, Flex, Text } from '@chakra-ui/react';

const ControlPagination = ({ page = 1, maxPage = 2 }) => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      gap={{ base: 6, md: 14 }}
      m={{ base: '120px 0 45px 0', md: '84px 0 62px 0' }}
      fontSize={'24px'}
      fontWeight={'600'}
      lineHeight={'30px'}
    >
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        gap={2}
        color={'grey.500'}
      >
        <Text fontSize={'24px'} fontWeight={'600'} lineHeight={'30px'}>
          {page} de {maxPage}
        </Text>
      </Flex>
      <Flex alignItems={'center'} color={'brand.400'}>
        <Button fontSize={'24px'} fontWeight={'600'} lineHeight={'30px'}>
          &lt;{' '}
        </Button>
        <Text fontSize={'24px'} fontWeight={'600'} lineHeight={'30px'}>
          Seguinte
        </Text>
        <Button fontSize={'24px'} fontWeight={'600'} lineHeight={'30px'}>
          {' '}
          &gt;
        </Button>
      </Flex>
    </Flex>
  );
};

export default ControlPagination;
