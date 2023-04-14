import { ChevronUpIcon } from "@chakra-ui/icons"
import { Box, IconButton, Image, Text } from "@chakra-ui/react"

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    return (
        <Box display={'flex'} flexDir={{base:'column', md: 'row'}} bg='grey.900' color={'white'} h={{base:'310px', md: '140px'}} w={'100vw'} justifyContent={'space-around'} alignItems={'center'}>
            <Image src='/assets/Motors-shop-footer.svg' alt="footer img"/>
            <Text variant={'body-2-400'}>© 2023 - Todos os direitos reservados.</Text>
            <IconButton icon={<ChevronUpIcon/>} aria-label={"Voltar ao Topo"} bg={'grey.800'} onClick={scrollToTop}/>
        </Box>
    )
}

export default Footer