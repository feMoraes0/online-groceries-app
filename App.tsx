/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Onboarding from './src/screens/Onboarding';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Navigator>
          <Screen name="Onboarding" component={Onboarding} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

EStyleSheet.build({
  $greenColour: '#53B175',
});

export default App;
