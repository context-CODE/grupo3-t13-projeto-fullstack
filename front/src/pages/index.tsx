import { Box, Heading, Input } from '@chakra-ui/react';
export default function Home() {
  return (
    <Box p="16px">
      <Heading color="gray.900">Home</Heading>
      <Input variant="default" placeholder="placeholder" />
    </Box>
  );
}
