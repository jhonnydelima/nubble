import { KeyboardAvoidingView, Platform } from 'react-native';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Box, TouchableOpacityBox } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useNavigation } from '@react-navigation/native';
import { ScrollViewContainer, ViewContainer } from './components/ScreenContainer';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();
  const navigation = useNavigation();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  function handleGoBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Container backgroundColor={colors.background}>
        <TouchableOpacityBox
          onPress={handleGoBack}
          px="s24"
          style={{paddingTop: top, paddingBottom: bottom}}
        >
          {canGoBack && (
            <Box flexDirection="row" mb="s24" alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" bold ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </TouchableOpacityBox>
      </Container>
    </KeyboardAvoidingView>
  );
}
