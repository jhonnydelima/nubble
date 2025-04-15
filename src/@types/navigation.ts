import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList, AuthStackParamList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
