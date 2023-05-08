import { useAdvertisementContext } from '@/contexts/advertisementContext';
import {
  Avatar,
  Card,
  CardBody,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import moment from 'moment';

export const CommentList = () => {
  const { currentAdvertisement } = useAdvertisementContext();

  return (
    <Card borderRadius="base" w={{ base: '100%', lg: 'calc(70% - 16px)' }}>
      <CardBody w="100%" p="16px">
        <Heading variant="Heading-6-600" mb="32px">
          Comentários
        </Heading>

        <UnorderedList
          display="flex"
          flexDir="column"
          listStyleType="none"
          m="0"
          gap="32px"
        >
          {currentAdvertisement?.comments?.map((comment) => {
            return (
              <ListItem
                key={comment.id}
                display="flex"
                flexDir="column"
                gap="16px"
              >
                <Flex alignItems="center" gap="8px">
                  <Avatar name={comment.user.name} h="32px" w="32px" />
                  <Text variant="body-2-500">{comment.user.name}</Text>
                  <Text color="grey.500">•</Text>
                  <Text fontSize="12px" color="grey.600">
                    {moment().startOf('day').from(comment.created_at)}
                  </Text>
                </Flex>

                <Text variant={'body-2-400'}>{comment.comment}</Text>
              </ListItem>
            );
          })}
        </UnorderedList>
      </CardBody>
    </Card>
  );
};
