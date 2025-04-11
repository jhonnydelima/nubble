import { Text, Button, Screen, FormPasswordInput, FormTextInput } from '@components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { loginFormSchema, LoginFormType } from './loginFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const { control, formState, handleSubmit } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
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
