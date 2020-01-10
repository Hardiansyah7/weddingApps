//This is an example of Tab inside Navigation Drawer in React Native//
import React from 'react';
//import react in our code.
import {createAppContainer} from 'react-navigation';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens for Tab
import TabNavScreen1 from '../TabNavScreen1';
import TabNavScreen2 from '../TabNavScreen2';

const TabScreen = createMaterialTopTabNavigator(
  {
    TabNav1: {screen: TabNavScreen1},
    TabNav2: {screen: TabNavScreen2},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#4682B4',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  },
);
const TabHelper = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
    },
  },
});
export default createAppContainer(TabHelper);
