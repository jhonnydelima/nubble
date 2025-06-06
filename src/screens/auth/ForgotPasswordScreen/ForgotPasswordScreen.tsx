import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, FormTextInput, Screen, Text} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {
  forgotPasswordFormSchema,
  ForgotPasswordFormType,
} from './forgotPasswordFormSchema';

export function ForgotPasswordScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  const {reset} = useResetNavigationSuccess();

  function submitForm(formData: ForgotPasswordFormType) {
    console.log('Form Submitted', formData);

    reset({
      title: `Enviamos as instruções para seu ${'\n'}e-mail`,
      description:
        'Clique no link enviado para o seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button
        disabled={!formState.isValid}
        title="Recuperar senha"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
