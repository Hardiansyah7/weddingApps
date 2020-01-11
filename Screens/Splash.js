import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Container } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';
import images from './image/images';


export default class splash extends Component {

    componentDidMount() {
        this.navigateToHome()
    }

    navigateToHome() {
      setTimeout(() => {
          const navigation = this.props.navigation;
          const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'Home' })],
          });
          navigation.dispatch(resetAction)
      }, 2000)
  }

    render() {
        return (
          <Container style={styles.container}>
            <View style={{width:400,height:400}} >
              <Image source={images.imgSP} 
                style={styles.imageFitView}/>
             </View>
          </Container>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
      },
      imageFitView: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
      }
    });