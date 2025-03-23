import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { Box } from './src/components/Box/Box';
import { Icon } from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24" gap="s12">
          <Text preset="headingLarge">Heading Large</Text>
          <Text preset="paragraphMedium">Paragraph Medium</Text>
          <Text preset="paragraphCaption">Paragraph Caption</Text>
          <Button title="Primary" />
          <Button title="Primary Loading" loading />
          <Button title="Primary Disabled" disabled />
          <Button title="Outline" preset="outline" />
          <Button title="Outline Loading" preset="outline" loading />
          <Button title="Outline Disabled" preset="outline" disabled />
          <Box flexDirection="row" justifyContent="space-between">
            <Icon name="eyeOn" />
            <Icon name="eyeOff" />
          </Box>
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
