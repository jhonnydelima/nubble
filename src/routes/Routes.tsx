import {NavigationContainer} from '@react-navigation/native';

import {AppStackNavigator} from './AppStackNavigator';
import {AuthStackNavigator} from './AuthStackNavigator';

export function Router() {
  const authenticated = true;

  return (
    <NavigationContainer>
      {authenticated ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
