import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Success from '../../../assets/images/order_accepted/success.png';
import Background from '../../../assets/images/order_accepted/background-accepted.png';
import Button from '../../components/Button';

const {width: widthScreen, height: heightScreen} = Dimensions.get('screen');

const OrderAccepted = () => {
  return (
    <>
      <View style={style.background}>
        <Image style={style.backgroundImage} source={Background} />
      </View>
      <View style={style.container}>
        <Image style={style.successImage} source={Success} />
        <Text style={style.title}>Your Order has been accepted</Text>
        <Text style={style.subtitle}>
          Your items has been placed and is on it's way to being processed
        </Text>
        <View style={style.buttonBox}>
          <Button
            onPress={() => null}
            txtColour="#F2F3F2"
            bgColour="#53B175"
            text="Track Offer"
          />
          <Button
            onPress={() => null}
            txtColour="#181725"
            bgColour="transparent"
            text="Back to home"
          />
        </View>
      </View>
    </>
  );
};

const style = EStyleSheet.create({
  background: {
    width: widthScreen,
    height: heightScreen,
  },
  backgroundImage: {
    resizeMode: 'contain',
  },
  container: {
    width: widthScreen,
    height: heightScreen,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  successImage: {
    height: heightScreen * 0.26,
    width: widthScreen * 0.65,
    resizeMode: 'contain',
    marginTop: heightScreen * 0.13,
    marginBottom: heightScreen * 0.074,
  },
  title: {
    fontFamily: '$gilroyNormal600',
    color: '$blackColour',
    fontSize: '1.75rem',
    lineHeight: '1.75rem',
    width: widthScreen * 0.69,
    textAlign: 'center',
    marginBottom: heightScreen * 0.022,
  },
  subtitle: {
    fontFamily: '$gilroyMedium',
    color: '$darkGreyColour',
    fontSize: '1rem',
    lineHeight: '1rem',
    width: widthScreen * 0.65,
    textAlign: 'center',
    marginBottom: heightScreen * 0.14,
  },
  buttonBox: {
    width: widthScreen,
    alignSelf: 'flex-start',
    paddingHorizontal: widthScreen * 0.06,
  },
});

export default {component: OrderAccepted, name: 'OrderAccepted'};
