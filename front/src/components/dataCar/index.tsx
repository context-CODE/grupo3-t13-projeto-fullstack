import { Flex, Button,  Card, CardBody, Stack, Heading, Tag, CardFooter, 
    Image, Text   } from '@chakra-ui/react'

export const DataCar = () => {
  return (
        <Flex maxW={{ base: '90%', sm: '440px' }} flexDir={'column'} gap='1' >
            <Image
            src="/assets/CarDetailHome.png"
            alt='Car photo'
            borderRadius='lg'
            />
            <Card justifyContent={'center'} >
                <CardBody  w='100%' >
                    <Stack p={'16px'} mt={'6'} spacing={'3'}>
                        <Heading variant={'Heading-6-600'} textAlign={'center'} size='md'>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</Heading>         
                        <Flex justifyContent={'space-between'} flexDirection={{ base:'column', sm:'row'}} gap={'10'}>
                            <Flex flexDir="row" gap='2' alignItems={'center'}>
                                <Tag>2013</Tag>  
                                <Tag>0 KM</Tag>
                            </Flex>
                            <Text color={'gray.800'} variant={{ base:'Heading-6-600', sm:'Heading-7-500'}}>
                                R$ 00.000,00
                            </Text>
                        </Flex>
                    </Stack>
                </CardBody>
        
                <CardFooter >
                    <Button justifyContent={'left'} variant={'default'} height={{ base: '38px', sm: '48px' }}>
                        Comprar                 
                    </Button>
                </CardFooter>
            </Card>
        </Flex>)
}

