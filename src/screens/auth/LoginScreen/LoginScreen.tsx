import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        errorMessage="mensagem de erro"
        boxProps={{mb: 's20'}}
      />

      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon name="eyeOn" color="gray2" />}
        boxProps={{mb: 's10'}}
      />

      <Text preset="paragraphSmall" color="primary" bold>
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" />
      <Button preset="outline" mt="s12" title="Criar uma conta" />
    </Screen>
  );
}
