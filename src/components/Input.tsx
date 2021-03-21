import React from 'react';
import {Text, TextInput, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {height: heightScreen} = Dimensions.get('screen');

interface InputProps {
  label: string;
}

const Input = ({label}: InputProps) => {
  return (
    <>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={styles.input} />
    </>
  );
};

const styles = EStyleSheet.create({
  inputLabel: {
    fontSize: '1rem',
    lineHeight: '1rem',
    height: '1rem',
    fontFamily: '$gilroyMedium',
    color: '$darkGreyColour',
  },
  input: {
    fontFamily: '$gilroyMedium',
    fontSize: '1.125rem',
    lineHeight: '1.125rem',
    paddingVertical: heightScreen * 0.012,
    borderBottomWidth: 1.0,
    borderBottomColor: '$lightGreyColour',
    marginBottom: heightScreen * 0.022,
  },
});

export default Input;
