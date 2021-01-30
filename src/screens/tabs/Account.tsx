import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProfileImage from '../../../assets/images/profile.png';
import {AccountIcons} from '../../helpers/Icons';

const AccountTab = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={ProfileImage} />
        <View style={styles.textBox}>
          <View style={styles.headerTitleBox}>
            <Text style={styles.headerTitle}>Fernando Moraes</Text>
            <TouchableOpacity>
              <AccountIcons.PencilIcon style={styles.headerIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerSubtitle}>fe_lopes@live.com</Text>
        </View>
      </View>
    </>
  );
};

const styles = EStyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25.0,
    paddingTop: 21.0,
  },
  headerImage: {
    width: 64.0,
    height: 64.0,
    borderRadius: 27.0,
  },
  textBox: {
    marginLeft: 25.0,
  },
  headerTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: '1.125rem',
    color: '#181725',
    marginRight: 10.0,
  },
  headerSubtitle: {
    fontFamily: 'Mulish-Regular',
    fontSize: '0.875rem',
    color: '#7C7C7C',
  },
  headerIcon: {
    color: '#53B175',
  },
});

export default {component: AccountTab, name: 'Account'};
