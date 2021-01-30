import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';
import Account from './tabs/Account';
import Cart from './tabs/Cart';
import Explore from './tabs/Explore';
import Favourite from './tabs/Favourite';
import ShopIcon from '../../assets/icons/shop.svg';
import PersonIcon from '../../assets/icons/person.svg';
import CartIcon from '../../assets/icons/cart.svg';
import ExploreSearchIcon from '../../assets/icons/explore-search.svg';
import HeartIcon from '../../assets/icons/heart.svg';

const {Navigator, Screen} = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          switch (route.name) {
            case Home.name:
              return <ShopIcon />;
            case Account.name:
              return <PersonIcon />;
            case Cart.name:
              return <CartIcon />;
            case Explore.name:
              return <ExploreSearchIcon />;
            case Favourite.name:
              return <HeartIcon />;
            default:
              return <ShopIcon />;
          }
        },
      })}>
      <Screen name={Home.name} component={Home.component} />
      <Screen name={Cart.name} component={Cart.component} />
      <Screen name={Explore.name} component={Explore.component} />
      <Screen name={Favourite.name} component={Favourite.component} />
      <Screen name={Account.name} component={Account.component} />
    </Navigator>
  );
};

export default {component: Tabs, name: 'Tabs'};
