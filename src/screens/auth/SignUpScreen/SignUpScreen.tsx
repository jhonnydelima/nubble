import { Button } from '../../../components/Button/Button';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { signUpFormSchema, SignUpFormType } from './signUpFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export function SignUpScreen() {
  const { control, formState, handleSubmit } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  const { reset } = useResetNavigationSuccess();

  function submitForm(formData: SignUpFormType) {
    console.log('Form Submitted', formData);
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        autoCapitalize="words"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />

      <Button
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
