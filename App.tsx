import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Onboarding from './src/screens/Onboarding';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Tabs from './src/screens/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Screen name={Onboarding.name} component={Onboarding.component} />
          <Screen name={SignIn.name} component={SignIn.component} />
          <Screen name={SignUp.name} component={SignUp.component} />
          <Screen name={Tabs.name} component={Tabs.component} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

EStyleSheet.build({
  $greenColour: '#53B175',
  $blackColour: '#181725',
});

export default App;
