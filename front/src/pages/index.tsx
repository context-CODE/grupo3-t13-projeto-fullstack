import BoxComment from '@/components/BoxComment';
import Comment from '@/components/Comment';
import { Box } from '@chakra-ui/react';
export default function Home() {
  return (
    <Box
      p="16px"
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'center'}
      bg={'#E9ECEF'}
      gap={'10px'}
      w={{ base: '100%', md: '100%' }}
    >
      <Comment
        name="Roberto"
        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
        date="há 7 dias"
        image="https://bit.ly/ryan-florence"
      />
      <Comment
        name="Angélica"
        comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
        date="há 4 dias"
        image="https://bit.ly/ryan-florence"
      />
      <BoxComment name="Lucas" image="https://bit.ly/ryan-florence" />
    </Box>
  );
}
