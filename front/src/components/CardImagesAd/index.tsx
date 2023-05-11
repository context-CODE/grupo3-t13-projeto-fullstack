import {
  Card,
  Grid,
  GridItem,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

export const CardImagesAd = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        bg="grey.10"
        minH="200px"
        borderRadius="base"
        p="16px"
        display={'flex'}
        flexDir={'column'}
      >
        <Heading variant="Heading-6-500" mb="16px">
          Fotos
        </Heading>
        <Grid
          h="100%"
          templateColumns="repeat(3, 1fr)"
          justifyContent="stretch"
          gap="16px"
        >
          {[0, 1, 2, 3, 4, 5].map((e) => (
            <GridItem
              key={e}
              bg="grey.200"
              borderRadius="base"
              p="8px"
              onClick={onOpen}
              cursor="pointer"
            >
              <Image
                w="100%"
                h="100%"
                src="/assets/fiat-argo-drive.webp"
                alt="image "
                objectFit="contain"
              />
            </GridItem>
          ))}
        </Grid>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Imagem do veículo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              w="100%"
              h="100%"
              src="/assets/fiat-argo-drive.webp"
              alt="image "
              objectFit="contain"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
