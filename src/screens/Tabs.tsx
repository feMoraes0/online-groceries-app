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
        tabBarIcon: ({color}) => {
          switch (route.name) {
            case Home.name:
              return <ShopIcon color={color} />;
            case Account.name:
              return <PersonIcon color={color} />;
            case Cart.name:
              return <CartIcon color={color} />;
            case Explore.name:
              return <ExploreSearchIcon color={color} />;
            case Favourite.name:
              return <HeartIcon color={color} />;
            default:
              return <ShopIcon color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#53B175',
        inactiveTintColor: '#181725',
      }}>
      <Screen name={Home.name} component={Home.component} />
      <Screen name={Cart.name} component={Cart.component} />
      <Screen name={Explore.name} component={Explore.component} />
      <Screen name={Favourite.name} component={Favourite.component} />
      <Screen name={Account.name} component={Account.component} />
    </Navigator>
  );
};

export default {component: Tabs, name: 'Tabs'};
