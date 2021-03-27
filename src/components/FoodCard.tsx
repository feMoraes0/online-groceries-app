import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import DefaultImage from '../../assets/images/products/fruits/apple.png';
import PlusIcon from '../../assets/icons/commons/plus.svg';

const {width: widthScreen, height: heightScreen} = Dimensions.get('screen');

const FoodCard = () => {
  return (
    <TouchableOpacity onPress={() => null} style={styles.card}>
      <View style={styles.imageBox}>
        <Image source={DefaultImage} />
      </View>
      <Text style={styles.title}>Red Apple</Text>
      <Text style={styles.subtitle}>1kg, Price</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>$4.99</Text>
        <TouchableOpacity onPress={() => null} style={styles.button}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  card: {
    width: widthScreen * 0.42,
    maxHeight: heightScreen * 0.28,
    borderWidth: 1.0,
    borderColor: '$lightGreyColour',
    borderRadius: 10.0,
    padding: 15.0,
    flexDirection: 'column',
    marginRight: 15.0,
  },
  imageBox: {
    height: heightScreen * 0.11,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: '$blackColour',
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
  },
  subtitle: {
    color: '$darkGreyColour',
    fontFamily: '$gilroyMedium',
    fontSize: '0.825rem',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: heightScreen * 0.02,
  },
  price: {
    color: '$blackColour',
    fontFamily: '$gilroyNormal600',
    fontSize: '1.125rem',
  },
  button: {
    backgroundColor: '$greenColour',
    borderRadius: 15.0,
    padding: 12.0,
  },
});

export default FoodCard;
