import { Box, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, HStack, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { ReactNode } from "react"

interface IHeaderProps {
    name?: string
    isLogged?: boolean
}

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Box w={'100vw'} h={'80px'} bg={'grey.10'} borderBottom={'2px solid'} borderColor={'grey.300'} fontSize={24} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Box w={'70vw'} pl={'60px'}>
                <Box w={'160px'} bgGradient={'linear(to right,#0B0D0D, #4529E6)'} bgClip={'text'}>
                    <Text fontWeight={"bold"}> 
                        Motors <Text as={'span'} color={'brand.400'} fontSize={16}>shop</Text>
                    </Text>
                </Box>
            </Box>
            <HStack display={{base:'none', md:'flex'}} w={'30vw'} alignItems={'center'} justifyContent={'space-around'} borderLeft={'2px solid'} borderColor={'grey.300'} h={'100%'}>
                <HeaderLoggedContent name={'Roberto Pontes'} isLogged={false}/>
            </HStack>
            <Box display={{base:'flex', md:'none'}} w={'30vw'} justifyContent={'flex-end'} pr={'6px'}>
                <ResponsiveMenu isOpen={isOpen} onClose={onClose}/>
            </Box>
        </Box>
    )
}

const HeaderLoggedContent = ({name, isLogged}: IHeaderProps) => {
    const splitedName = name?.split(' ')
    const initials: string = splitedName && splitedName.length >= 2 ? splitedName[0][0] + splitedName[1][0] : ''

    return (
        isLogged?(
            <HStack _hover={{cursor: 'pointer'}}>
                <Box bg={'brand.300'} w={'32px'} h={'32px'} color={'white'} borderRadius={'180px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Text fontWeight={'bold'} fontSize={18}>{initials}</Text>
                </Box>
                <Text fontSize={'md'}>
                    {name}
                </Text>
            </HStack>
        ) : (
            <>
                <Link fontSize={'16px'} color={'brand.400'} fontWeight={600}>Fazer Login</Link>
                <Button variant={'outlineDark'}>Cadastrar</Button>
            </>
        )
    )   
}

const ResponsiveMenu = ({isOpen, onClose}: any) => {
    return (
        <Menu>
            <MenuButton as={Button} bg={'grey-10'}>
                <HamburgerIcon/>
            </MenuButton>
            <MenuList>
                <MenuItem bg={'grey-10'} fontSize={'sm'}>Fazer Login</MenuItem>
                <MenuItem><Button variant={'outlineDark'}>Cadastrar</Button></MenuItem>
            </MenuList>
        </Menu>
    )
}
export default Header