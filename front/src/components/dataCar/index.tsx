import { Flex, Box, Button,  Card, CardHeader, CardBody, Stack, Heading, Tag, Divider, CardFooter, 
    Image, Text   } from '@chakra-ui/react'



export const DataCar = () => {
  return (
        <Flex flexDir={'column'} gap='1' >
            <Image
            src="/assets/CarDetailHome.png"
            alt='Car photo'
            borderRadius='lg'
            />
            <Card justifyContent={'center'} alignItems={'center'}>
                <CardBody  w='100%' >
                    <Stack p='16px' mt='6' spacing='3'>
                        <Heading textAlign={'center'} size='md' color={'gray.800'}>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</Heading>         
                        <Flex justifyContent={'space-between'}>
                            <Flex flexDir="row" gap='2' alignItems={'center'}>
                                <Tag>2013</Tag>  
                                <Tag>0 KM</Tag>
                            </Flex>
                            <Text color={'gray.800'} fontSize='2xl'>
                                R$ 00.000,00
                            </Text>
                        </Flex>
                    </Stack>
                </CardBody>
        
                <CardFooter>
                    <Button variant='default'>
                        Comprar                 
                    </Button>
                </CardFooter>
            </Card>
        </Flex>)
}

