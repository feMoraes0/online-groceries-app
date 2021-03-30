import React from 'react';
import {TouchableOpacity, Text, Image, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const {width: widthScreen, height: heightScreen} = Dimensions.get('screen');
interface CategoryCardProps {
  bgColour: String;
  borderColour: String;
  image: any;
  title: String;
  onPress: Function;
}

const CategoryCard = ({
  bgColour,
  borderColour,
  image,
  title,
  onPress,
}: CategoryCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        styles.card,
        {backgroundColor: bgColour, borderColor: borderColour},
      ]}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  card: {
    width: widthScreen * 0.42,
    height: heightScreen * 0.21,
    borderWidth: 1.0,
    marginHorizontal: 7.5,
    marginBottom: 15.0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 18.0,
    borderColor: '#000',
    padding: 15.0,
  },
  image: {},
  text: {
    color: '$blackColour',
    fontFamily: '$gilroyNormal600',
    fontSize: '1rem',
    letterSpacing: 0.1,
  },
});

export default CategoryCard;
