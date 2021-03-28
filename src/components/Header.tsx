import React from 'react';
import {View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

interface HeaderProps {
  title: String;
}

const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 8.1,
    paddingBottom: 30.0,
    paddingHorizontal: 25.0,
  },
  text: {
    alignSelf: 'center',
    color: '$blackColour',
    fontFamily: '$gilroyNormal600',
    fontSize: '1.125rem',
  },
});

export default Header;
