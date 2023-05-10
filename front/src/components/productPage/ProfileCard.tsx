import { useAdvertisementContext } from '@/contexts/advertisementContext';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
} from '@chakra-ui/react';

const ProfileCard = () => {
  const { currentAdvertisement } = useAdvertisementContext();
  return (
    <Card
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      borderRadius="base"
    >
      <CardBody
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        p="0"
        py="16px"
        gap="16px"
      >
        <Avatar name={currentAdvertisement?.user?.name} />
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
