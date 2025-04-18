import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen} from '@screens';

import {
  AppBottomTabNavigator,
  AppBottomTabParamList,
} from './AppBottomTabNavigator';

export type AppStackParamList = {
  AppBottomTabNavigator: NavigatorScreenParams<AppBottomTabParamList>;
  SettingsScreen: undefined;
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
    </Stack.Navigator>
  );
}
