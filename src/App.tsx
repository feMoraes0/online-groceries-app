import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import theme from './theme';
import Onboarding from './screens/Onboarding';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Tabs from './screens/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OrderAccepted from './screens/status/OrderAccepted';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Navigator
          // initialRouteName={OrderAccepted.name}
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name={Onboarding.name} component={Onboarding.component} />
          <Screen name={SignIn.name} component={SignIn.component} />
          <Screen name={SignUp.name} component={SignUp.component} />
          <Screen name={Tabs.name} component={Tabs.component} />

          {/* Temporary */}
          <Screen
            name={OrderAccepted.name}
            component={OrderAccepted.component}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

EStyleSheet.build({...theme});

export default App;
