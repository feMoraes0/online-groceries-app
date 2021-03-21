import React from 'react';
import {ScrollView, View, Image, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {width: screenWidth} = Dimensions.get('screen');
const backgroundTop = require('../../assets/images/sign/background-top.png');

interface SignScaffoldProps {
  children: React.ReactNode;
}

const SignScaffold = ({children}: SignScaffoldProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <Image style={styles.backgroundImage} source={backgroundTop} />
      </View>
      <View>{children}</View>
    </ScrollView>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$whiteColour',
  },
  background: {
    position: 'absolute',
    width: screenWidth,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default SignScaffold;
