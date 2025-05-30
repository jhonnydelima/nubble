import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  AppBottomTabParamList,
  AppStackParamList,
  AuthStackParamList,
} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppBottomTabScreenProps<
  RouteName extends keyof AppBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppBottomTabNavigator'>
>;
