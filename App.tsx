import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { Box } from './src/components/Box/Box';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" fontStyle="italic">React Native</Text>
        <Box marginBottom="s20">
          <Button title="Entrar" />
        </Box>
        <Button title="Sair" loading />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
