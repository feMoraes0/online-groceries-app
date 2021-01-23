import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Button from '../components/Button';

const {width} = Dimensions.get('screen');
const backgroundImage = require('../../assets/images/onboarding-background.png');
const logoImage = require('../../assets/images/logo.png');

const Onboarding = () => {
  return (
    <>
      <Image style={styles.backgroundImage} source={backgroundImage} />
      <View style={styles.footer}>
        <Image source={logoImage} />
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour
        </Text>
        <Button text="Get Started" backgroundColor="#53B175" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: width * 1.005,
    resizeMode: 'cover',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    alignItems: 'center',
    paddingHorizontal: 30.5,
    paddingBottom: 50.84,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    marginTop: 35.66,
    fontSize: 48.0,
    color: 'white',
    textAlign: 'center',
    width: width / 1.5,
  },
  subtitle: {
    marginBottom: 40.88,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(252, 252, 252, 0.7)',
    fontSize: 16.0,
  },
});

export default Onboarding;
