import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../components/Button';
import SignScaffold from '../components/SignScaffold';

const logo = require('../../assets/images/logo-colour.png');

const Signin = () => {
  return (
    <>
      <SignScaffold>
        <Image style={styles.logo} source={logo} />
        <View style={styles.headerText}>
          <Text>Logging</Text>
          <Text>Enter your emails and password</Text>
        </View>
        <View style={styles.form}>
          <Button onPress={() => null} text="Log in" />
        </View>
        <View style={styles.footerText}>
          <Text>Don’t have an account?</Text>
          <Text>Singup</Text>
        </View>
      </SignScaffold>
    </>
  );
};

const styles = EStyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
});

export default {component: Signin, name: 'Signin'};
