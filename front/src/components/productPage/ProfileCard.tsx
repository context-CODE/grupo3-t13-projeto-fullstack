import { Button, Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'

const ProfileCard = () => {
  return (
    <Card minW={'270px'} maxW={{ base: '90%', sm: '440px' }} display={'flex'} flexDirection={'column'} alignItems={"center"} gap={7} paddingY={{base: 10, md: 9, lg: 9}} borderRadius={4} backgroundColor={'brand.100'}>
      <Image borderRadius='full' boxSize={{ base: '77px', sm: '104px' }} src='https://bit.ly/kent-c-dodds' alt='Avatar'/> 
      <CardBody display={'flex'} flexDirection={'column'} alignItems={"center"} justifyContent={'space-between'} paddingY={0} gap={{base: 7, md: 8, lg: 8}} >
        <Heading variant={'Heading-6-600'}>
          User Shop
        </Heading>
        <Text maxW={352} maxH={84} variant={'body-1-400'} alignSelf={'center'} overflow={'hidden'}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
        </Text>
        <Button variant={'darkGrey'}>Ver todos anúncios</Button>
      </CardBody>
    </Card>
  )
}

export default ProfileCard