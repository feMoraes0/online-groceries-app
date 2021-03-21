import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Button from '../components/Button';
import Input from '../components/Input';
import SignScaffold from '../components/SignScaffold';
import SignUp from './SignUp';
import Tabs from './Tabs';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
const logo = require('../../assets/images/logo-colour.png');

interface SignInProps {
  navigation: any;
}

const Signin = ({navigation}: SignInProps) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  const goToSignUp = () => {
    navigation.navigate(SignUp.name);
  };

  const goToHome = () => {
    navigation.navigate(Tabs.name);
  };

  return (
    <SignScaffold>
      <Image style={styles.logo} source={logo} />
      <View style={styles.form}>
        <View>
          <Text style={styles.headerTitle}>Sign in</Text>
          <Text style={styles.headerSubtitle}>
            Enter your emails and password
          </Text>
        </View>
        <KeyboardAvoidingView behavior={behavior}>
          <Input label="Email" />
          <View style={{marginTop: heightScreen * 0.011}} />
          <Input label="Password" />
        </KeyboardAvoidingView>

        <TouchableOpacity style={styles.forgotButtonBox}>
          <Text style={styles.infoText}>Forgot your password?</Text>
        </TouchableOpacity>
        <Button
          onPress={goToHome}
          bgColour="#53B175"
          txtColour="#FFF"
          text="Sign in"
        />
        <View style={styles.footer}>
          <Text style={styles.infoText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={goToSignUp}>
            <Text style={[styles.infoText, styles.greenInfoText]}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SignScaffold>
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
    fontFamily: '$gilroyNormal600',
    marginBottom: heightScreen * 0.017,
    color: '$blackColour',
  },
  headerSubtitle: {
    fontSize: '1rem',
    lineHeight: '1rem',
    height: '1rem',
    fontFamily: '$gilroyMedium',
    marginBottom: heightScreen * 0.045,
    color: '$darkGreyColour',
  },
  forgotButtonBox: {
    alignItems: 'flex-end',
    marginBottom: heightScreen * 0.033,
  },
  infoText: {
    fontFamily: '$gilroyNormal600',
    fontWeight: '600',
    fontSize: '0.875rem',
    color: '$blackColour',
    letterSpacing: '0.05rem',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: heightScreen * 0.028,
  },
  greenInfoText: {
    color: '$greenColour',
    marginLeft: 5.0,
  },
});

export default {component: Signin, name: 'Signin'};
