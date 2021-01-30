import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Account from './tabs/Account';
import Cart from './tabs/Cart';
import Explore from './tabs/Explore';
import Favourite from './tabs/Favourite';
import tabIcon from '../helpers/Icons';
import EStyleSheet from 'react-native-extended-stylesheet';

const {Navigator, Screen} = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          switch (route.name) {
            case Home.name:
              return <tabIcon.ShopIcon color={color} />;
            case Account.name:
              return <tabIcon.PersonIcon color={color} />;
            case Cart.name:
              return <tabIcon.CartIcon color={color} />;
            case Explore.name:
              return <tabIcon.ExploreSearchIcon color={color} />;
            case Favourite.name:
              return <tabIcon.HeartIcon color={color} />;
            default:
              return <tabIcon.ShopIcon color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#53B175',
        inactiveTintColor: '#181725',
        labelStyle: style.tabBarLabelStyle,
      }}>
      <Screen name={Home.name} component={Home.component} />
      <Screen name={Cart.name} component={Cart.component} />
      <Screen name={Explore.name} component={Explore.component} />
      <Screen name={Favourite.name} component={Favourite.component} />
      <Screen name={Account.name} component={Account.component} />
    </Navigator>
  );
};

const style = EStyleSheet.create({
  tabBarLabelStyle: {
    fontFamily: 'Mulish-Medium',
    fontSize: '0.75rem',
  },
});

export default {component: Tabs, name: 'Tabs'};
