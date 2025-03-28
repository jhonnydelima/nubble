import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { Button } from './src/components/Button/Button';
import { TextInput } from './src/components/TextInput/TextInput';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box px="s24">
          <Text preset="headingLarge" mb="s8">Olá</Text>
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
              RightComponent={
                <Icon name="eyeOn" color="gray2" />
              }
              boxProps={{mb: 's10'}}
            />

          <Text preset="paragraphSmall" color="primary" bold>
            Esqueci minha senha
          </Text>

          <Button mt="s48" title="Entrar" />
          <Button preset="outline" mt="s12" title="Criar uma conta" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
