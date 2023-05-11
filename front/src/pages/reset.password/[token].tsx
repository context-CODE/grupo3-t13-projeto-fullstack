import LayoutPage from '@/components/LayoutPage';
import api from '@/services';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formReset = z
  .object({
    password: z
      .string()
      .max(150)
      .min(8, 'Deve ter no mínimo 8 caracteres')
      .regex(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
      .regex(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
      .regex(/\d/, 'Deve conter ao menos 1 número')
      .regex(/[\W|_]/, 'Deve conter um caractere especial')
      .nonempty('Campo obrigatório!'),
    confirmPassword: z.string().nonempty('Campo vazio'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Senhas não correspondem',
  });

type iFormReset = z.infer<typeof formReset>;

export default function ResetPassword() {
  const { query, push } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iFormReset>({
    resolver: zodResolver(formReset),
  });

  const submit = async (data: iFormReset) => {
    try {
      await api.post(`/users/resetPassword/${query.token as string}`, {
        password: data.password,
      });

      await push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutPage>
      <Flex
        minH="calc(100vh - 140px - 80px)"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          as={'form'}
          flexDir="column"
          gap="16px"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(submit)}
        >
          <FormControl>
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              placeholder="Digite sua nova senha."
              {...register('password')}
            />
            {errors?.password && (
              <Text color="red.400">{errors.password.message}</Text>
            )}
          </FormControl>

          <FormControl>
            <FormLabel>Confirmar Senha</FormLabel>
            <Input
              type="password"
              placeholder="Digite novamente sua nova senha."
              {...register('confirmPassword')}
            />
            {errors?.confirmPassword && (
              <Text color="red.400">{errors.confirmPassword.message}</Text>
            )}
          </FormControl>

          <Button variant="default" type="submit">
            Atualizar senha
          </Button>
        </Flex>
      </Flex>
    </LayoutPage>
  );
}
