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

interface ResponsiveMenuProps {
  isOpen: boolean;
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
      pos="fixed"
      top="0"
      left="0"
      zIndex={'1000'}
    >
      <Box w={'70vw'} pl={'60px'}>
        <Box
          w={'160px'}
          bgGradient={'linear(to right,#0B0D0D, #4529E6)'}
          bgClip={'text'}
        >
          {/* tem que envolver em um link para '/' */}
          <Image src="/assets/Motors-shop-header.svg" alt="header img" />
        </Box>
      </Box>
      <HStack
        display={{ base: 'none', md: 'flex' }}
        // w={'390px'}
        alignItems={'center'}
        gap={'44px'}
        // justifyContent={'space-between'}
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
        <ResponsiveMenu isOpen={isOpen} />
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
        {' '}
        {/* tem que fazer outra variant de Link*/}
        Fazer Login
      </Text>
      <Link variant={'btnOutlineGreyHeader'} px={'18px'} href="/register">
        Cadastrar
      </Link>
    </>
  );
};

const ResponsiveMenu = ({ isOpen }: ResponsiveMenuProps) => {
  return (
    <Menu>
      <MenuButton as={Button} bg={'grey-10'} position={'relative'}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </MenuButton>
      <MenuList
        w={{ base: '100vw', sm: '90%' }}
        display={'flex'}
        flexDirection="column"
        gap={'18px'}
        p={'20px 12px'}
        m={0}
        // position={'relative'}
        // top={0}
        // left={0}
      >
        <MenuItem bg={'grey.10'}>
          <Link variant={'simple_1'} href="/login">
            Fazer Login
          </Link>
        </MenuItem>
        <MenuItem>
          <Link variant={'btnOutlineGreyHeader'} w={'374px'} href="/register">
            Cadastrar
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Header;
