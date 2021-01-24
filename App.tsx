/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Onboarding from './src/screens/Onboarding';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Onboarding />
    </>
  );
};

EStyleSheet.build({
  $greenColour: '#53B175',
});

export default App;
