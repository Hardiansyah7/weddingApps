import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, BackHandler,Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class DetailScreen extends Component {
    constructor(props){
        super(props)
            this.state={
                img: this.props.navigation.state.params.im
            }
    }


      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackEvent)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackEvent)
    }

    onBackEvent = () => {
        this.props.navigation.goBack()
        return true
    }


    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                {/* <View style={{ backgroundColor: '#ff9800', justifyContent: 'center', alignItems: "center", textAlign:'center',height: 150 }}>
                    <Text style={styles.textUtama}> {this.props.navigation.state.params.nama} </Text>
                </View> */}
                    <View style={{ height:300,marginTop:-3}}>
                        <Image source={this.state.img} style={{height: 300,width:'100%',padding:20}} resizeMode={"cover"}/>
                    </View>
                    <View >
                        <Text style={{fontSize:20,padding:5,fontWeight:'bold'}}>{this.props.navigation.state.params.nama}</Text>
                        <Text style={{fontSize:12,paddingLeft:10}}>{this.props.navigation.state.params.upd}</Text>
                        <Text style={{fontSize:12,paddingLeft:10}}>{this.props.navigation.state.params.loc}</Text>
                        <Text style={{fontSize:20,paddingLeft:10,marginTop:3}}>{this.props.navigation.state.params.desc}</Text>
                    </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({

});