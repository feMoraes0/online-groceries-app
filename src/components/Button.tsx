import React from 'react';
import {TouchableOpacity, Text, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height} = Dimensions.get('screen');
interface ButtonProps {
  text: string;
  backgroundColor: string;
}

const Button = ({text, backgroundColor}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor}]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 19.0,
    paddingVertical: height * 0.027,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: '1.125rem',
    lineHeight: '1.3rem',
    height: '1.125rem',
  },
});

export default Button;
