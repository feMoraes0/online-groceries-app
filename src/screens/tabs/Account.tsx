import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProfileImage from '../../../assets/images/profile.png';
import {AccountIcons} from '../../helpers/Icons';
import AccountListItem from '../../components/AccountListItem';
import Button from '../../components/Button';
import {ScrollView} from 'react-native-gesture-handler';

const AccountTab = () => {
  const itemList = [
    {
      label: 'Orders',
      icon: <AccountIcons.OrdersIcon color={'#181725'} />,
    },
    {
      label: 'My Details',
      icon: <AccountIcons.PersonalCardIcon color={'#181725'} />,
    },
    {
      label: 'Delivery Address',
      icon: <AccountIcons.PinIcon color={'#181725'} />,
    },
    {
      label: 'Payment Methods',
      icon: <AccountIcons.PaymentIcon color={'#181725'} />,
    },
    {
      label: 'Promo Card',
      icon: <AccountIcons.TicketIcon color={'#181725'} />,
    },
    {
      label: 'Notifications',
      icon: <AccountIcons.BellIcon color={'#181725'} />,
    },
    {
      label: 'Help',
      icon: <AccountIcons.HelpIcon color={'#181725'} />,
    },
    {
      label: 'About',
      icon: <AccountIcons.AboutIcon color={'#181725'} />,
    },
  ];

  return (
    <>
      <ScrollView style={styles.scrollContainer}>
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
        <View style={styles.list}>
          {itemList.map((item, index) => {
            return (
              <AccountListItem
                key={index}
                label={item.label}
                children={item.icon}
              />
            );
          })}
        </View>
        <View style={styles.buttonBox}>
          <Button
            onPress={() => null}
            text="Log out"
            bgColour="#F2F3F2"
            txtColour="#53B175"
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = EStyleSheet.create({
  scrollContainer: {
    backgroundColor: '#FFF',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25.0,
    paddingTop: 21.0,
    paddingBottom: 30.0,
    borderBottomWidth: 1.0,
    borderBottomColor: '#E2E2E2',
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
  list: {
    paddingBottom: 52.0,
  },
  buttonBox: {
    paddingBottom: 25.0,
    paddingHorizontal: 25.0,
  },
});

export default {component: AccountTab, name: 'Account'};
