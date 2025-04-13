import {KeyboardAvoidingView, Platform} from 'react-native';
import { useAppTheme, useAppSafeArea } from '@hooks';
import { Box, TouchableOpacityBox, Icon, Text } from '@components';
import {useNavigation} from '@react-navigation/native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

export interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const navigation = useNavigation();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <Box px="s24" style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              flexDirection="row"
              mb="s24"
              alignItems="center"
            >
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" bold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
