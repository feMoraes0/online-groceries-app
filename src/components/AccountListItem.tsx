import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {AccountIcons} from '../helpers/Icons';

interface AccountListItemProps {
  label: string;
  children: JSX.Element;
}

const AccountListItem = ({label, children}: AccountListItemProps) => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <View style={styles.content}>
        {children}
        <Text style={styles.text}>{label}</Text>
      </View>
      <AccountIcons.RightArrowIcon
        style={styles.arrowRight}
        color={'#181725'}
      />
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  container: {
    paddingVertical: 20.0,
    paddingHorizontal: 25.0,
    borderBottomWidth: 1.0,
    borderBottomColor: '#E2E2E2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Mulish-Regular',
    fontSize: '1rem',
    color: '#181725',
    marginLeft: 20.0,
  },
  arrowRight: {},
});

export default AccountListItem;
