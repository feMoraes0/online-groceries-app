import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './tabs/Home';

const {Navigator, Screen} = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Navigator>
      <Screen name={Home.name} component={Home.component} />
    </Navigator>
  );
};

export default {component: Tabs, name: 'Tabs'};
