import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text style={{color: 'red'}}>React Native</Text>
        <Text variant="headingLarge">React Native</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
