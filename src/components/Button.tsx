import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 19.0,
    paddingVertical: 24.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 18.0,
  },
});

export default Button;
