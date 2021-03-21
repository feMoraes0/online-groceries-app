import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ProfileImage from '../../../assets/images/profile.png';
import {AccountIcons} from '../../helpers/Icons';
import AccountListItem from '../../components/AccountListItem';
import Button from '../../components/Button';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');
const AccountTab = () => {
  const itemList = [
    {
      label: 'Orders',
      icon: <AccountIcons.OrdersIcon style={styles.icon} color={'#181725'} />,
    },
    {
      label: 'My Details',
      icon: (
        <AccountIcons.PersonalCardIcon style={styles.icon} color={'#181725'} />
      ),
    },
    {
      label: 'Delivery Address',
      icon: <AccountIcons.PinIcon style={styles.icon} color={'#181725'} />,
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
            text="Log Out"
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
    backgroundColor: '$whiteColour',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.06,
    paddingTop: screenHeight * 0.023,
    paddingBottom: screenHeight * 0.033,
    borderBottomWidth: 1.0,
    borderBottomColor: '$lightGreyColour',
  },
  headerImage: {
    width: screenHeight * 0.071,
    height: screenHeight * 0.071,
    borderRadius: 27.0,
  },
  textBox: {
    marginLeft: screenWidth * 0.05,
  },
  headerTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: '$gilroyNormal600',
    fontWeight: '600',
    fontSize: '1.125rem',
    color: '$blackColour',
    marginRight: screenWidth * 0.024,
  },
  headerSubtitle: {
    fontFamily: '$gilroyNormal',
    fontSize: '0.875rem',
    color: '$darkGreyColour',
  },
  headerIcon: {
    color: '$greenColour',
  },
  list: {
    paddingBottom: screenHeight * 0.058,
  },
  buttonBox: {
    paddingBottom: screenHeight * 0.027,
    paddingHorizontal: screenWidth * 0.06,
  },
  icon: {
    color: '#F00',
  },
});

export default {component: AccountTab, name: 'Account'};
