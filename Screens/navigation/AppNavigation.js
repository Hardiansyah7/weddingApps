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

//Import required react-navigation component
import {createAppContainer} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Import all the screens for Drawer/ Sidebar
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingScreen from './Screens/SettingScreen';

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
            source={require('./Screens/image/drawer.png')}
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
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'HomeScreen',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#4682B4',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Stack Navigator for Second Option of Navigation Drawer
const Profile_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Profile: {
    screen: ProfileScreen,
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
const Setting_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Setting: {
    screen: SettingScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Setting',
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

  Profile: {
    //Title
    screen: Profile_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Wedding Ideas',
    },
  },

  Setting: {
    //Title
    screen: Setting_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Tentang Kami',
    },
  },
});

export default createAppContainer(DrawerNavigatorExample);