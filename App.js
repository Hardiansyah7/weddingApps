/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//This is an example of Tab inside Navigation Drawer in React Native//
import React, {Component} from 'react';
import 'react-native-gesture-handler';
//import react in our code.
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import images from './Screens/image/images'

//Import required react-navigation component
import {createAppContainer} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens for Drawer/ Sidebar
import HomeScreen from './Screens/HomeScreen';
import IdeasScreen from './Screens/IdeasScreen';
import AboutScreen from './Screens/AboutScreen';
import DetailScreen from './Screens/DetailScreen';
import Splash from './Screens/Splash'

//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={images.imgDr}
            style={{width: 30, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for First Option of Navigation Drawer
const Home_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Splash : {screen : Splash,navigationOptions:{header : null}},
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Home ',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#4682B4',
      },
      headerTintColor: '#fff',
    }),
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4682B4',
        elevation:0
      },
    },
  },
});

//Stack Navigator for Second Option of Navigation Drawer
const Ideas_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Ideas: {
    screen: IdeasScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Wedding Ideas',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#4682B4',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for Third Option of Navigation Drawer
const About_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  About: {
    screen: AboutScreen,
    navigationOptions: ({navigation}) => ({
      title: 'About Us',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#4682B4',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Drawer Navigator for the Navigation Drawer / Sidebar
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Home: {
    //Title
    screen: Home_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },

  Ideas: {
    //Title
    screen: Ideas_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Wedding Ideas',
    },
  },

  About: {
    //Title
    screen: About_StackNavigator,
    navigationOptions: {
      drawerLabel: 'About Us',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);