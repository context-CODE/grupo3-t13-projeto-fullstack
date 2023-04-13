import { Button, Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'

const ProfileCard = () => {
  return (
    <Card maxW={{ base: '90%', sm: '440px' }} display={'flex'} flexDirection={'column'} alignItems={"center"} gap={7} paddingY={{base: 10, md: 9, lg: 9}} borderRadius={4} backgroundColor={'brand.100'}>
      <Image borderRadius='full' boxSize={{ base: '77px', sm: '104px' }} src='https://bit.ly/kent-c-dodds' alt='Avatar'/> 
      <CardBody display={'flex'} flexDirection={'column'} alignItems={"center"} gap={{base: 7, md: 8, lg: 8}} >
        <Heading color={'gray.700'} fontSize={{base: 20, sm: 24}} fontWeight={600}>
          User Shop
        </Heading>
        <Text maxW={352} maxH={84} color={'gray.700'} fontSize={16} fontWeight={400} alignSelf={'center'}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </Text>
        <Button variant={'darkGray'} text={'body-2-500'} fontSize={16} fontWeight={600}>Ver todos anúncios</Button>
      </CardBody>
    </Card>
  )
}

export default ProfileCard