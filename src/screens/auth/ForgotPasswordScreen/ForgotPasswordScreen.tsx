import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';

export function ForgotPasswordScreen() {
  const { reset } = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: `Enviamos as instruções para seu ${'\n'}e-mail`,
      description: 'Clique no link enviado para o seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">Esqueci minha senha</Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="Digite seu e-mail"
        placeholder="Digite seu e-mail"
        errorMessage="mensagem de erro"
        boxProps={{mb: 's40'}}
      />
      <Button title="Recuperar senha" onPress={submitForm} />
    </Screen>
  );
}
