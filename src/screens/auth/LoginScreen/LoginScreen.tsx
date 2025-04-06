import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useForm, Controller } from 'react-hook-form';
import { Alert } from 'react-native';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

type LoginFormType = {
  email: string;
  password: string;
}

export function LoginScreen({navigation}: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({ email, password }: LoginFormType) {
    // Handle form submission

    Alert.alert('Form Submitted', `Email: ${email}\nPassword: ${password}`);
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text preset="headingLarge" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha é obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            errorMessage={fieldState.error?.message}
            value={field.value}
            onChangeText={field.onChange}
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mb: 's10'}}
          />
        )}
      />

      <Text
        onPress={navigateToForgotPasswordScreen}
        preset="paragraphSmall"
        color="primary"
        bold
      >
        Esqueci minha senha
      </Text>

      <Button
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        title="Criar uma conta"
        preset="outline"
        mt="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
