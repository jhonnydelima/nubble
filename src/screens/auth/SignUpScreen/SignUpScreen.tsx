import { Button } from '../../../components/Button/Button';
import { FormPasswordInput } from '../../../components/Form/FormPasswordInput';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';

type SignUpFormType = {
  username: string;
  fullName: string;
  email: string;
  password: string;
}

export function SignUpScreen() {
  const { control, formState, handleSubmit } = useForm<SignUpFormType>({
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
        rules={{
          required: 'Username obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9._-]+$/,
            message: 'Username inválido',
          },
        }}
        label="Seu username"
        placeholder="@"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="fullName"
        rules={{required: 'Nome obrigatório'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        autoCapitalize="words"
        boxProps={{ mb: 's20' }}
      />

      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{ mb: 's20' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
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
