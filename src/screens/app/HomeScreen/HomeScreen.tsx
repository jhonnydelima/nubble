import {Button, Screen, Text} from '@components';
import {AppBottomTabScreenProps} from '@routes';

export function HomeScreen({
  navigation,
}: AppBottomTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
      <Button
        title="Settings"
        mt="s14"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
