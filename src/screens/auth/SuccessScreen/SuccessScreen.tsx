import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Text,
  Button,
  Screen,
  Icon,
} from '@components';
import { RootStackParamList } from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route, navigation }: ScreenProps) {
  const { title, description, icon } = route.params;

  return (
    <Screen>
      <Icon {...icon} />
      <Text preset="headingLarge" mt="s24">{title}</Text>
      <Text preset="paragraphLarge" mt="s16">{description}</Text>
      <Button onPress={navigation.goBack} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
