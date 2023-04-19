import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

interface IHeaderProps {
  name?: string;
  isLogged?: boolean;
}

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      w={'100vw'}
      h={'80px'}
      bg={'grey.10'}
      borderBottom={'2px solid'}
      borderColor={'grey.300'}
      fontSize={24}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Box w={'70vw'} pl={'60px'}>
        <Box
          w={'160px'}
          bgGradient={'linear(to right,#0B0D0D, #4529E6)'}
          bgClip={'text'}
        >
          <Image src="/assets/Motors-shop-header.svg" alt="header img" />
        </Box>
      </Box>
      <HStack
        display={{ base: 'none', md: 'flex' }}
        w={'390px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        borderLeft={'2px solid'}
        borderColor={'grey.300'}
        h={'100%'}
        pr={'60px'}
        pl={'44px'}
      >
        <HeaderLoggedContent name={'User Shop'} isLogged={false} />
      </HStack>
      <Box
        display={{ base: 'flex', md: 'none' }}
        w={'30vw'}
        justifyContent={'flex-end'}
        pr={'0'}
      >
        <ResponsiveMenu />
      </Box>
    </Box>
  );
};

const HeaderLoggedContent = ({ name, isLogged }: IHeaderProps) => {
  const splitedName = name?.split(' ');
  const initials: string =
    splitedName && splitedName.length >= 2
      ? splitedName[0][0] + splitedName[1][0]
      : '';

  return isLogged ? (
    <HStack _hover={{ cursor: 'pointer' }}>
      <Box
        bg={'brand.300'}
        w={'32px'}
        h={'32px'}
        color={'white'}
        borderRadius={'180px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text fontWeight={'bold'} fontSize={18}>
          {initials}
        </Text>
      </Box>
      <Text variant={'body-1-400'}>{name}</Text>
    </HStack>
  ) : (
    <>
      <Text variant={'body-1-600'} _hover={{ cursor: 'pointer' }}>
        Fazer Login
      </Text>
      <Button variant={'outlineLight'}>Cadastrar</Button>
    </>
  );
};

const ResponsiveMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} bg={'grey-10'}>
        <HamburgerIcon />
      </MenuButton>
      <MenuList w={'100vw'} justifyContent={'center'} py={2}>
        <MenuItem bg={'grey.10'}>
          <Text variant={'body-1-600'}>Fazer Login</Text>
        </MenuItem>
        <MenuItem>
          <Button variant={'outlineLight'} w={'374px'}>
            Cadastrar
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Header;
