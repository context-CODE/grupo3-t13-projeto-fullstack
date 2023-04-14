import { Card, Grid, GridItem, Heading, Image } from '@chakra-ui/react';

export const CardImagesAd = () => {
  return (
    <Card bg="grey.10" w="440px" h="292px" borderRadius="base" p="16px">
      <Heading variant="Heading-6-500" mb="32px">
        Fotos
      </Heading>
      <Grid
        h="100%"
        templateColumns="repeat(3, 1fr)"
        justifyContent="stretch"
        gap="16px"
      >
        {[0, 1, 2, 3, 4, 5].map((e) => (
          <GridItem key={e}>
            <Image w="100%" h="100%" src="" alt="image " />
          </GridItem>
        ))}
      </Grid>
    </Card>
  );
};
