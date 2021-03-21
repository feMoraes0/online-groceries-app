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
import Tabs from './Tabs';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');
const logo = require('../../assets/images/logo-colour.png');

interface SignUpProps {
  navigation: any;
}

const SignUp = ({navigation}: SignUpProps) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

  const goToSignIn = () => {
    navigation.pop();
  };

  const goToHome = () => {
    navigation.navigate(Tabs.name);
  };

  return (
    <SignScaffold>
      <Image style={styles.logo} source={logo} />
      <View style={styles.form}>
        <View>
          <Text style={styles.headerTitle}>Sign up</Text>
          <Text style={styles.headerSubtitle}>
            Enter your credentials to continue
          </Text>
        </View>
        <KeyboardAvoidingView behavior={behavior}>
          <Input label="Username" />
          <View style={{marginTop: heightScreen * 0.011}} />
          <Input label="Email" />
          <View style={{marginTop: heightScreen * 0.011}} />
          <Input label="Password" />
        </KeyboardAvoidingView>

        <View style={styles.termsBox}>
          <Text style={styles.infoText}>
            By continuing you agree to our{' '}
            <Text style={[styles.infoText, styles.greenInfoText]}>
              Terms of Service
            </Text>{' '}
            and{' '}
            <Text style={[styles.infoText, styles.greenInfoText]}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
        <Button
          onPress={goToHome}
          bgColour="#53B175"
          txtColour="#FFF"
          text="Sign up"
        />
        <View style={styles.footer}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={goToSignIn}>
            <Text style={[styles.infoText, styles.greenInfoText]}>Sign in</Text>
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
  termsBox: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: heightScreen * 0.033,
  },
  infoText: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default {component: SignUp, name: 'SignUp'};
