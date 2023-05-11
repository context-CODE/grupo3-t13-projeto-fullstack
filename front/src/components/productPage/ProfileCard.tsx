import { useAdvertisementContext } from '@/contexts/advertisementContext';
import { Avatar, Card, CardBody, Heading, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

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
        <Link
          as={NextLink}
          variant={'btnOutlineGrey'}
          px="16px"
          href={`/advertiser/${currentAdvertisement?.user?.id as string}`}
        >
          Ver todos anúncios
        </Link>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
