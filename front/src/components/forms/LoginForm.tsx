// import {
//   Flex,
//   FormControl,
//   FormErrorMessage,
//   FormHelperText,
//   FormLabel,
//   Heading,
//   Input,
// } from '@chakra-ui/react';
// import React, { useContext, useEffect, useCallback } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { AuthContext } from '@/contexts/AuthContext';
// import { iLoginReq } from '@/types/services/loginService.types';
// import { loginClientSchema } from '@/schemas';

// const { loginSubmit, loginError, loading, userData } = useContext(AuthContext);

// const {
//   register,
//   handleSubmit,
//   reset,
//   formState: { errors },
// } = useForm({
//   resolver: yupResolver(loginClientSchema),
//   mode: 'onSubmit',
// });

// // const memorizedReset = useCallback(reset, [reset]);
// // useEffect(() => {
// //   userData && memorizedReset({ email: userData.email });
// // }, [userData, memorizedReset]);

// const emailError: boolean =
//   errors.email ||
//   Object.keys(loginError).includes('email') ||
//   (loginError.message?.toLowerCase().includes('email') as boolean) ||
//   (loginError.message?.toLowerCase().includes('client') as boolean);

// const passwordError =
//   errors.password ||
//   Object.keys(loginError).includes('password') ||
//   loginError.message?.toLowerCase().includes('password');

// // const onFormSubmit: SubmitHandler<iLoginReq> = (formData): void => {
// //   void loginSubmit(formData, () => {
// //     reset();
// //   });
// // };

// const onFormSubmit = (formData: iLoginReq) => {
//   void loginSubmit(formData, () => {
//     reset();
//   });
// };

// const LoginForm = () => {
//   return (
//     <Flex>
//       <Heading variant={'Heading-5-500'}>Login</Heading>
//       <FormControl id={'email'} isRequired isInvalid={emailError}>
//         <FormLabel>Usuário</FormLabel>
//         <Input
//           required
//           type={'email'}
//           placeholder={'Digitar usuário'}
//           variant={'filled'}
//           // mb={!emailError ? 6 : 0}
//           {...register('email')}
//         />
//         {!emailError ? (
//           <FormHelperText mb={6} fontSize={12} pl={1}>
//             Digite seu e-mail
//           </FormHelperText>
//         ) : (
//           <FormErrorMessage mb={6} fontSize={12} pl={1}>
//             {/* Errors aqui */}
//           </FormErrorMessage>
//         )}
//       </FormControl>
//       <FormControl id={'password'} isRequired isInvalid={passwordError}>
//         <FormLabel>Senha</FormLabel>
//         <Input
//           required
//           type={'password'}
//           placeholder={'********'}
//           variant={'filled'}
//           // mb={!passwordError ? 6 : 0}
//           {...register('password')}
//         />
//         {!passwordError ? (
//           <FormHelperText mb={6} fontSize={12} pl={1}>
//             Digite sua senha
//           </FormHelperText>
//         ) : (
//           <FormErrorMessage mb={6} fontSize={12} pl={1}>
//             {/* Errors aqui */}
//           </FormErrorMessage>
//         )}
//       </FormControl>
//     </Flex>
//   );
// };

// export default LoginForm;
