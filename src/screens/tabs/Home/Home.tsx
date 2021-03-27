import React from 'react';
import {Text, View, ScrollView, Dimensions, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LogoColour from '../../../../assets/images/logo-colour.png';
import LocationPin from '../../../../assets/icons/home_screen/location-pin.svg';
import Banner from '../../../../assets/images/home_screen/banner.png';
import SearchBar from '../../../components/SearchBar';
import SectionTitle from './SectionTitle';
import FoodCard from '../../../components/FoodCard';

const {width: widthScreen, height: heightScreen} = Dimensions.get('window');

interface HomeProps {
  navigation: any;
}

const Home = ({navigation}: HomeProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoColour} style={styles.logo} />
        <View style={styles.locationBox}>
          <LocationPin style={styles.locationIcon} />
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>
      </View>
      <View style={[styles.localBox, styles.searchBox]}>
        <SearchBar navigation={navigation} navigateTo="search-page" />
      </View>
      <View style={styles.localBox}>
        <Image style={styles.banner} source={Banner} />
      </View>
      <View style={styles.localBox}>
        <SectionTitle
          navigation={navigation}
          title="Exclusive Offer"
          linkPage=""
        />
      </View>
      <ScrollView style={styles.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styles.localBox}>
        <SectionTitle
          navigation={navigation}
          title="Best Selling"
          linkPage=""
        />
      </View>
      <ScrollView style={styles.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styles.localBox}>
        <SectionTitle navigation={navigation} title="Groceries" linkPage="" />
      </View>
      <ScrollView style={styles.horizontalScroll} horizontal={true}>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ScrollView>
      <View style={styles.scrollFooter} />
    </ScrollView>
  );
};

const styles = EStyleSheet.create({
  localBox: {
    paddingHorizontal: 25.0,
  },
  container: {
    width: widthScreen,
    minHeight: heightScreen,
    paddingTop: 35.0,
    backgroundColor: '$whiteColour',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 26.48,
    height: 30.0,
  },
  locationBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontFamily: 'gilroyNormal600',
    fontSize: '1.125rem',
  },
  locationIcon: {
    marginRight: 5.0,
  },
  searchBox: {
    marginTop: 20.0,
  },
  banner: {
    marginTop: 20.0,
    width: widthScreen * 0.87,
    resizeMode: 'contain',
  },
  horizontalScroll: {
    paddingLeft: 20.0,
  },
  scrollFooter: {
    marginBottom: heightScreen * 0.15,
  },
});

export default {component: Home, name: 'Home'};
