import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Onboarding from './src/screens/Onboarding';
import Signin from './src/screens/Signin';
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
          <Screen name={Signin.name} component={Signin.component} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

EStyleSheet.build({
  $greenColour: '#53B175',
});

export default App;
