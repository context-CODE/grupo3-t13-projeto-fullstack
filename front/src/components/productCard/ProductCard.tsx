import { Box, Card, CardBody, CardFooter, HStack, Heading, Image, Stack, Tag, Text } from "@chakra-ui/react"

const ProductCard = () => {
    return (
        <Card maxW='312px' maxH={'350px'} gap={1}>
        <CardBody p={0}>
            <Image
            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            alt='Green double couch with wooden legs'
            h={'150px'}
            w={'312px'}
            />
            <Stack mt={'5'} spacing={'1'}>
            <Heading variant={'Heading-7-600'}>Living room Sofa</Heading>
            <Text variant={'body-2-400'}>
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy  ...
            </Text>
            <HStack _hover={{cursor: 'pointer'}}>
                <Box bg={'brand.300'} w={'32px'} h={'32px'} color={'white'} borderRadius={'180px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontWeight={'bold'} fontSize={18}>RP</Text>
                </Box>
                <Text variant={'body-2-500'}>
                    Roberto Pontes
                </Text>
            </HStack>
            </Stack>
        </CardBody>
        <CardFooter p={0}>
            <HStack w={'100%'} display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} gap={'2'}>
                    <Tag>0 KM</Tag>
                    <Tag>2019</Tag>
                </Box>
                <Text variant={'heading-7-500'}>R$ 00.000,00</Text>
            </HStack>
        </CardFooter>
        </Card>
    )
}

export default ProductCard