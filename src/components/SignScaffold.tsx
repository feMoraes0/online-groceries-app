import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
const backgroundTop = require('../../assets/images/sign/background-top.png');
const backgroundBottom = require('../../assets/images/sign/background-bottom.png');

interface SignScaffoldProps {
  children: React.ReactNode;
}

const SignScaffold = ({children}: SignScaffoldProps) => {
  return (
    <>
      <View style={styles.background}>
        <Image source={backgroundTop} />
        <Image source={backgroundBottom} />
      </View>
      <View style={styles.container}>{children}</View>
    </>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  background: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default SignScaffold;
