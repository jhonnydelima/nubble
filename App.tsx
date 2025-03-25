import React from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/Box/Box';
import { Button } from './src/components/Button/Button';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box px="s24">
          <Text preset="headingLarge" mb="s8">Olá</Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <Box mb="s20">
            <TextInput
              placeholder="Digite seu e-mail"
              style={{borderWidth: 1, height: 50 }}
            />
          </Box>

          <Box mb="s20">
            <TextInput
              placeholder="Digite sua senha"
              style={{borderWidth: 1, height: 50 }}
            />
          </Box>

          <Text preset="paragraphSmall" color="primary" mt="s10" bold>
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
