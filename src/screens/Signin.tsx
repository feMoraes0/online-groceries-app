import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../components/Button';
import Input from '../components/Input';
import SignScaffold from '../components/SignScaffold';

const {width: widthScreen, height: heightScreen} = Dimensions.get('screen');
const logo = require('../../assets/images/logo-colour.png');

const Signin = () => {
  return (
    <>
      <SignScaffold>
        <Image style={styles.logo} source={logo} />
        <View style={styles.form}>
          <View>
            <Text style={styles.headerTitle}>Loging</Text>
            <Text style={styles.headerSubtitle}>
              Enter your emails and password
            </Text>
          </View>
          <Input label="Email" />
          <View style={{marginTop: heightScreen * 0.011}} />
          <Input label="Password" />
          <TouchableOpacity style={styles.forgotButtonBox}>
            <Text style={styles.infoText}>Forgot your password?</Text>
          </TouchableOpacity>
          <Button onPress={() => null} text="Log in" />
          <View style={styles.footer}>
            <Text style={styles.infoText}>Don’t have an account?</Text>
            <TouchableOpacity>
              <Text style={[styles.infoText, styles.greenInfoText]}>
                Singup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SignScaffold>
    </>
  );
};

const styles = EStyleSheet.create({
  logo: {
    alignSelf: 'center',
    marginTop: heightScreen * 0.032,
    marginBottom: heightScreen * 0.112,
  },
  form: {
    paddingHorizontal: widthScreen * 0.06,
  },
  headerTitle: {
    fontSize: '1.625rem',
    lineHeight: '1.625rem',
    height: '1.625rem',
    fontFamily: 'Mulish-SemiBold',
    marginBottom: heightScreen * 0.017,
    color: '$blackColour',
  },
  headerSubtitle: {
    fontSize: '1rem',
    lineHeight: '1rem',
    height: '1rem',
    fontFamily: 'Mulish-Regular',
    marginBottom: heightScreen * 0.045,
    color: '#7C7C7C',
  },
  forgotButtonBox: {
    alignItems: 'flex-end',
    marginBottom: heightScreen * 0.033,
  },
  infoText: {
    fontFamily: 'Mulish-Medium',
    fontSize: '0.875rem',
    color: '$blackColour',
    letterSpacing: '0.05rem',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightScreen * 0.028,
  },
  greenInfoText: {
    color: '$greenColour',
    marginLeft: 5.0,
  },
});

export default {component: Signin, name: 'Signin'};
