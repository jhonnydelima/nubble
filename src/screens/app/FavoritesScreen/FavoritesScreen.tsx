import {Screen, Text} from '@components';
import {AppBottomTabScreenProps} from '@routes';

export function FavoritesScreen(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: AppBottomTabScreenProps<'FavoritesScreen'>,
) {
  return (
    <Screen>
      <Text preset="headingSmall">Favorites Screen</Text>
    </Screen>
  );
}
