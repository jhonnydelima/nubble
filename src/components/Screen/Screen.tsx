import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Box, TouchableOpacityBox } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useNavigation } from '@react-navigation/native';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({ children, canGoBack = false, scrollable = false }: ScreenProps) {
  const { top, bottom } = useAppSafeArea();
  const { colors } = useAppTheme();
  const navigation = useNavigation();
  const Container = scrollable ? ScrollView : Box;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <Container
        style={{
          backgroundColor: colors.background,
          flex: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacityBox
          onPress={navigation.goBack}
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
