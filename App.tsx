import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={{color: 'red'}}>React Native</Text>
      <Text variant="headingLarge">React Native</Text>
    </SafeAreaView>
  );
}

export default App;
