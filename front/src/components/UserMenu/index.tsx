// /* eslint-disable @typescript-eslint/no-unsafe-call */
// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

// import ModalUpdateUser from '../modalUpdateUser';
// import { useState } from 'react';
// import { HamburgerIcon } from '@chakra-ui/icons';
// import { GetServerSideProps } from 'next';
// import { getSession } from 'next-auth/react';
// import nookies from 'nookies';

// export const UserMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const onOpen = () => setIsOpen(true);
//   const onClose = () => setIsOpen(false);

//   const handleLogout = () => {
//     onClose();
//   };

//   return (
//     <Menu>
//       <MenuButton as={Button} rightIcon={<HamburgerIcon />} borderRadius="full">
//         UB
//       </MenuButton>
//       <MenuList>
//         <MenuItem onClick={onClose}>
//           <ModalUpdateUser isOpen={isOpen} onClose={onClose} />
//           Editar Perfil
//         </MenuItem>
//         <MenuItem>Editar Endereço</MenuItem>
//         <MenuItem>Meus Anúncios</MenuItem>
//         <MenuItem onClick={handleLogout}>Sair</MenuItem>
//       </MenuList>
//     </Menu>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const cookies = nookies.get(ctx);
//   const session = await getSession(ctx);

//   if (!cookies['car.token'] && !session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       name: cookies['cars.user'],
//     },
//   };
// };
