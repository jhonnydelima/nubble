import { Button } from '../../../components/Button/Button';
import { Icon } from '../../../components/Icon/Icon';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';

export function SuccessScreen() {
  function goBackToLogin() {
    // TODO: navegar para a tela de login
  }

  return (
    <Screen>
      <Icon name="bookmark" />
      <Text preset="headingLarge" mt="s24">Title</Text>
      <Text preset="paragraphLarge" mt="s16">description</Text>
      <Button onPress={goBackToLogin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
