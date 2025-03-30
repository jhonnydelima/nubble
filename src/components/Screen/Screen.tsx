import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { useAppTheme } from '../../hooks/useAppTheme';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();
  const Container = scrollable ? ScrollView : Box;
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container
        style={{
          backgroundColor: colors.background,
          height: '100%',
        }}
      >
        <Box px="s24" style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <Box flexDirection="row" mb="s24" alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" bold ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
