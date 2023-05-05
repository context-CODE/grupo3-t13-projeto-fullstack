/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

import ModalUpdateUser from '../modalUpdateUser';
import { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const handleLogout = () => {
    onClose();
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<HamburgerIcon />} borderRadius="full">
        UB
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onClose}>
          <ModalUpdateUser isOpen={isOpen} onClose={onClose} />
          Editar Perfil
        </MenuItem>
        <MenuItem>Editar Endereço</MenuItem>
        <MenuItem>Meus Anúncios</MenuItem>
        <MenuItem onClick={handleLogout}>Sair</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
