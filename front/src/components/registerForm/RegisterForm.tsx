import { iAuthContext } from '@/contexts/authContext';
import { registerFormSchema } from '@/schemas/auth.schema';
import { iRegisterFormData } from '@/types/auth.context'
import {Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers';
import { AuthContext } from "../../contexts/authContext";
import * as z from 'zod';


const RegisterForm = () => {
    const [value, setValue] = React.useState('')

    const {register, handleSubmit, formState:{errors}} = 
    useForm<iRegisterFormData>({resolver: zodResolver(registerFormSchema)})

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const {registerUser} = useContext<iAuthContext>(AuthContext)

    const onSubmitForm = (event) => {
        event.preventDefault()
        const formData = event.target.value
        registerUser(formData)    
    };

   
    return (
        <Flex flexDir="column" gap="16px" padding={'48px'}>
            <Heading variant="Heading-5-500">Cadastro</Heading>
            <form onSubmit={handleSubmit(onSubmitForm)}>
            <Heading variant="body-2-500">Informações pesooais</Heading>
            
            <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input placeholder='Ex: Samuel Leão' {...register('name')}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input placeholder='Ex: samuel@kenzie.com.br' {...register('email')} />
            </FormControl>

            <FormControl isRequired>
                <FormLabel>CPF</FormLabel>
                <Input placeholder='000.000.000-00' {...register('cpf')}/>
            </FormControl>
         
            <FormControl isRequired>
                <FormLabel>Celular</FormLabel>
                <Input placeholder='(DDD) 90000-0000' {...register('phone_number')}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Data de nascimento</FormLabel>
                <Input placeholder='00/00/00' {...register('birthdate')}/>
            </FormControl>  
        
            <Text mb='8px'>Descrição: {value}</Text>
                <Textarea
                    placeholder='Digitar descrição'
                    {...register('description')}
                    size='sm'
                />
        
            <Heading variant="body-2-500">Informações de endereço</Heading>

            <FormControl isRequired>
                <FormLabel>CEP</FormLabel>
                <Input placeholder='00000-000'   {...register('cep')}/>
            </FormControl>

            <Box
                display="flex"
                gap="10px"
                flexDir="row"
                maxW={{ base: '374px', md: '411px' }}
                minW={{ base: '315px', md: '411px' }}
                bg="grey.10"
                padding={'48px'}
                >

                <FormControl isRequired>
                    <FormLabel>Estado</FormLabel>
                    <Input placeholder='Digitar Estado' {...register('state')}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Cidade</FormLabel>
                    <Input placeholder='Digitar cidade' {...register('city')}/>
                </FormControl>
            </Box>
            
            <FormControl isRequired>
                <FormLabel>Rua</FormLabel>
                <Input placeholder='Digitar rua' {...register('street')}/>
            </FormControl>

            <Box
                display="flex"
                gap="10px"
                flexDir="row"
                maxW={{ base: '374px', md: '411px' }}
                minW={{ base: '315px', md: '411px' }}
                bg="grey.10"
                padding={'48px'}
                >
                <FormControl isRequired>
                    <FormLabel>Número</FormLabel>
                    <Input placeholder='-000' {...register('number')}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Complemento</FormLabel>
                    <Input placeholder='Ex: apart 307' {...register('complement')}/>
                </FormControl>
            </Box>           

            <Heading variant="body-2-500">Tipo de conta</Heading>
            <Button variant="default">Comprador</Button>
            <Button variant="disable">Anunciante</Button>

            <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <Input placeholder='Digitar senha' {...register('password')}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Confirmar Senha</FormLabel>
                <Input placeholder='Confirmar senha' {...register('confirm_password')}/>
            </FormControl>

             <Button type='submit' onClick={()=>'onSubmitForm'} variant="disable">Finalizar cadastro</Button>
             </form>
        </Flex>
    )
}
export default RegisterForm