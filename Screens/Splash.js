import React, { Component } from 'react';
import { Text, View, ImageBackground,StyleSheet } from 'react-native';
import { Container } from 'native-base';
import { BarIndicator } from 'react-native-indicators'
import { StackActions, NavigationActions } from 'react-navigation';


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
            <Container style={{ flex: 1 ,backgroundColor:'#4682B4'}}>
                {/* <ImageBackground source={images.imgSP} style={{ flex: 1, width: null, height: null }} resizeMode='stretch'> */}
                    <View style={{ flex: 1, paddingBottom: 50}}>
                        <BarIndicator color='white' size={50} style={{ justifyContent: 'center', alignItems: "center" }} />
                    </View>
                {/* </ImageBackground> */}
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    txt:{
        justifyContent: 'center', 
        alignItems: "center"
    }
  });