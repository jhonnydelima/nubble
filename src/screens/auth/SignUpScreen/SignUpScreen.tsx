import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from '../../../components/Button/Button';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({ navigation }: ScreenProps) {
  function submitForm() {
    navigation.navigate('SuccessScreen');
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput label="Seu username" placeholder="@" boxProps={{ mb: 's20' }} />
      <TextInput label="Nome completo" placeholder="Digite seu nome completo" boxProps={{ mb: 's20' }} />
      <TextInput label="E-mail" placeholder="Digite seu e-mail" boxProps={{ mb: 's20' }} />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{ mb: 's48' }}
      />
      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
