import { useAdvertisementContext } from '@/contexts/advertisementContext';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Heading,
  // Image,
  Text,
} from '@chakra-ui/react';

const ProfileCard = () => {
  const { currentAdvertisement } = useAdvertisementContext();
  return (
    <Card
      minW={'270px'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={7}
      paddingY={{ base: 10, md: 9, lg: 9 }}
      borderRadius={4}
    >
      <Avatar name={currentAdvertisement?.user?.name} />
      <CardBody
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'space-between'}
        paddingY={0}
        gap={{ base: 7, md: 8, lg: 8 }}
      >
        <Heading variant={'Heading-6-600'}>
          {currentAdvertisement?.user?.name}
        </Heading>
        <Text variant={'body-1-400'} textAlign="center">
          {currentAdvertisement?.user?.description}
        </Text>
        <Button variant={'darkGrey'}>Ver todos anúncios</Button>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
