import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen, PostCommentsScreen, ProfileScreen} from '@screens';

import {
  AppBottomTabNavigator,
  AppBottomTabParamList,
} from './AppBottomTabNavigator';

export type AppStackParamList = {
  AppBottomTabNavigator: NavigatorScreenParams<AppBottomTabParamList>;
  SettingsScreen: undefined;
  PostCommentsScreen: {
    postId: number;
    postAuthorId: number;
  };
  ProfileScreen: {
    userId: number;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="AppBottomTabNavigator">
      <Stack.Screen
        name="AppBottomTabNavigator"
        component={AppBottomTabNavigator}
      />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentsScreen" component={PostCommentsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
