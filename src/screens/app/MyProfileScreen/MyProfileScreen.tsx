import {Screen, Text} from '@components';
import {AppBottomTabScreenProps} from '@routes';

export function MyProfileScreen(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: AppBottomTabScreenProps<'MyProfileScreen'>,
) {
  return (
    <Screen>
      <Text preset="headingSmall">My Profile Screen</Text>
    </Screen>
  );
}
