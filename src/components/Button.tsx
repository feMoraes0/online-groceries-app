import React from 'react';
import {TouchableOpacity, Text, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height: screenHeight} = Dimensions.get('screen');
interface ButtonProps {
  text: string;
  bgColour: string;
  txtColour: string;
  onPress: () => void;
}

const Button = ({text, bgColour, txtColour, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: bgColour}]}>
      <Text style={[styles.buttonText, {color: txtColour}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 19.0,
    paddingVertical: screenHeight * 0.027,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '$greenColour',
  },
  buttonText: {
    fontFamily: '$gilroyNormal600',
    color: 'white',
    fontSize: '1.125rem',
    lineHeight: '1.25rem',
    height: '1.25rem',
  },
});

export default Button;
