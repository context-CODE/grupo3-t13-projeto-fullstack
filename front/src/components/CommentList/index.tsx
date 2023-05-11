import { useAdvertisementContext } from '@/contexts/advertisementContext';
import { useAuthContext } from '@/contexts/authContext';
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Card,
  CardBody,
  Flex,
  Heading,
  IconButton,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import moment from 'moment';
import { useState } from 'react';

export const CommentList = () => {
  const { user } = useAuthContext();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { currentAdvertisement, editComment, deleteComment } =
    useAdvertisementContext();
  const [commentId, setCommentId] = useState('');
  const [newComment, setNewComment] = useState('');

  const toggleComment = (id: string) => {
    setCommentId(id);

    if (id === commentId) setCommentId('');
  };

  const sendComment = async (commentId: string) => {
    await editComment(currentAdvertisement?.id, commentId, newComment);
  };

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
          {currentAdvertisement?.comments?.map((comment) => (
            <ListItem
              key={comment.id}
              display="flex"
              flexDir="column"
              gap="16px"
            >
              <Flex alignItems="center" gap="8px">
                <Avatar name={comment.user.name} />
                <Text variant="body-2-500">{comment.user.name}</Text>
                <Text color="grey.500">•</Text>
                <Text fontSize="12px" color="grey.600">
                  {moment().startOf('day').from(comment.created_at)}
                </Text>
              </Flex>

              <Flex flexDir="column" gap="4px">
                {commentId !== comment.id && (
                  <Text variant={'body-2-400'} h="24px">
                    {comment.comment}
                  </Text>
                )}
                {commentId === comment.id && (
                  <Input
                    variant="unset"
                    defaultValue={comment.comment}
                    p="0"
                    h="24px"
                    color="grey.700"
                    fontSize="0.875rem"
                    fontWeight="400"
                    lineHeight="24px"
                    border="1px solid"
                    borderColor="grey.500"
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                )}

                {user.id === comment.user.id && (
                  <Flex gap="16px">
                    {commentId === comment.id ? (
                      <>
                        <IconButton
                          bg="brand.300"
                          color="white"
                          aria-label="Confirm Edit comment"
                          icon={<CheckIcon />}
                          h="24px"
                          _hover={{
                            bg: 'brand.400',
                          }}
                          onClick={() => {
                            void sendComment(commentId);
                            toggleComment('');
                          }}
                        />
                        <IconButton
                          colorScheme="red"
                          aria-label="Cancel Edit comment"
                          onClick={() => toggleComment(comment.id)}
                          icon={<CloseIcon />}
                          h="24px"
                        />
                      </>
                    ) : (
                      <>
                        <IconButton
                          bg="brand.300"
                          color="white"
                          aria-label="Edit comment"
                          icon={<EditIcon />}
                          h="24px"
                          _hover={{
                            bg: 'brand.400',
                          }}
                          onClick={() => toggleComment(comment.id)}
                        />
                        <IconButton
                          colorScheme="red"
                          aria-label="Delete comment"
                          onClick={() =>
                            void deleteComment(
                              currentAdvertisement?.id,
                              comment.id
                            )
                          }
                          icon={<DeleteIcon />}
                          h="24px"
                        />
                      </>
                    )}
                  </Flex>
                )}
              </Flex>
            </ListItem>
          ))}
        </UnorderedList>
      </CardBody>
    </Card>
  );
};
