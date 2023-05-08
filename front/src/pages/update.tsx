/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

// import ModalUpdateUser from '../modalUpdateUser';
import { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ModalUpdateUser from '@/components/modalUpdateUser';
import ModalUpdateAddress from '@/components/modalUpdateAddress';

const UserMenu = () => {
  const [isOpenUpdateUser, setIsOpenUpdateUser] = useState(false);
  const [isOpenUpdateAddress, setIsOpenUpdateAddress] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onOpenUpdateUser = () => setIsOpenUpdateUser(true);
  const onCloseUpdateUser = () => setIsOpenUpdateUser(false);

  const onOpenUpdateAddress = () => setIsOpenUpdateAddress(true);
  const onCloseUpdateAddress = () => setIsOpenUpdateAddress(false);

  const handleLogout = () => {
    onCloseUpdateUser();
    onCloseUpdateAddress();
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<HamburgerIcon />}
          borderRadius="full"
        >
          UB
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onOpenUpdateUser}>Editar Perfil</MenuItem>
          <MenuItem onClick={onOpenUpdateAddress}>Editar Endereço</MenuItem>
          <MenuItem>Meus Anúncios</MenuItem>
          <MenuItem onClick={handleLogout}>Sair</MenuItem>
        </MenuList>
      </Menu>
      <ModalUpdateUser isOpen={isOpenUpdateUser} onClose={onCloseUpdateUser} />
      <ModalUpdateAddress
        isOpen={isOpenUpdateAddress}
        onClose={onCloseUpdateAddress}
      />
    </>
  );
};
export default UserMenu;
