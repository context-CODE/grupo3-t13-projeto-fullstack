import { useAdvertisementContext } from '@/contexts/advertisementContext';
import { useAuthContext } from '@/contexts/authContext';
import { Box, Textarea, Avatar, Button, Text, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';

const BoxComment = () => {
  const { user } = useAuthContext();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { addCommentAd } = useAdvertisementContext();
  const [comment, setComment] = useState('');

  const {
    query: { advertisementId },
  } = useRouter();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addCommentAd(comment, advertisementId);
    setComment('');
  };

  return (
    <Flex
      flexDir={'column'}
      bg="grey.10"
      padding="16px"
      borderRadius="base"
      gap="16px"
      w={{ base: '100%', lg: 'calc(70% - 16px)' }}
    >
      {Object.keys(user).length > 0 && (
        <Box
          display={'flex'}
          gap="10px"
          bg={'white'}
          w="97%"
          alignItems="center"
        >
          <Avatar name={user.name} />
          <Text variant={'body-2-500'}>{user.name}</Text>
        </Box>
      )}

      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
      <form onSubmit={(e) => submit(e)}>
        <Box pos="relative">
          <Textarea
            disabled={Object.keys(user).length > 0 ? false : true}
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            fontSize="16px"
            h={{ base: '150' }}
            resize={'none'}
            borderWidth="2px"
            pt="16px"
            _focusVisible={{
              borderColor: 'brand.400',
            }}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <Button
            disabled={Object.keys(user).length > 0 ? false : true}
            variant={Object.keys(user).length > 0 ? 'default' : 'disable'}
            pos="absolute"
            bottom="12px"
            right="12px"
            type="submit"
          >
            Comentar
          </Button>
        </Box>
      </form>

      {/* <Box display={'flex'} gap="10px" w={'97%'} flexWrap={'wrap'}>
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
      </Box> */}
    </Flex>
  );
};

export default BoxComment;
