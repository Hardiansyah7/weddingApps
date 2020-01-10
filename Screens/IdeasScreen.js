//This is an example of Tab inside Navigation Drawer in React Native//
import React, {Component} from 'react';
//import react in our code.
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Image,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Modal from 'react-native-modal'; // import all basic components
import images from './image/images';

import TabHelper from './tabnav/tabhelper/TabHelper';

export default class IdeasScreen extends Component {
  //Return Tab Navigator from here to render tab in option one of navigation drawer
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackEvent);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackEvent);
  }

  onBackEvent = () => {
    this.setState({modal: true});
    return true;
  };

  closeApp() {
    BackHandler.exitApp();
  }

  render() {
    // return <TabHelper />;
    const items = [
      {
        im: images.img1,
        nama: 'Wedding1',
        code: '#2ecc71',
        cap: 'dasdasdasdasddasdasmdaksjldsd',
        hrg: 'Rp.100000',
      },
      {
        im: images.img2,
        nama: 'Wedding2',
        code: '#9b59b6',
        cap: 'dasdasdasdasdasnkdnasjdbasbdasbdasdd',
        hrg: 'Rp.100000',
      },
      {
        im: images.img1,
        nama: 'Wedding3',
        code: '#1abc9c',
        cap: 'dasdasdasdasdajkdbajsbdabdaiubdd',
        hrg: 'Rp.100000',
      },
      {
        im: images.img2,
        nama: 'Wedding4',
        code: '#34495e',
        cap: 'dasdasdasdasd',
        hrg: 'Rp.100000',
      },
    ];
    return (
      <View style={{flex: 1}}>

        {/* CONTENT */}
            <ScrollView style={{flex:1}}>
              <Text>Under Constraction</Text>
            </ScrollView>
      </View>
    );
  }
}
