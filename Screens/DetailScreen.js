import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, BackHandler,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from 'react-native-modal';
import { SliderBox } from "react-native-image-slider-box";
import images from './image/images';

export default class DetailScreen extends Component {
    constructor(props){
        super(props)
            this.state={
                img: this.props.navigation.state.params.im,
                modal: false,
            }
    }

    setModalVisible(visible,a) {
        this.setState({modal: visible,a});
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
        const imB = [
            images.imgB1,
            images.imgB2,
            images.imgB3,
            images.imgB4
        ]
        const imJ = [
            images.imgJ1,
            images.imgJ2,
            images.imgJ3,
            images.imgJ4
        ]
        const imS = [
            images.imgS1,
            images.imgS2,
            images.imgS3,
            images.imgS4
        ]
        const imM =[
            images.imgM1,
            images.imgM2,
            images.imgM3,
            images.imgM4
        ]
        let alamat  = this.props.navigation.state.params.id
        return (
            <View style={{flex: 1}}>
        <Modal
          isVisible={this.state.modal}
          onBackButtonPress={() => this.setState({modal: false})}
          onBackdropPress={() => this.setState({modal: false})}>
          <View
            style={{
              height: 150,
              width: '90%',
              backgroundColor: 'white',
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            <View
              style={{
                height: 75,
                width: '100%',
                backgroundColor: '#458cff',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                justifyContent: 'center',
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                    Contact Us : {this.state.a === 'wa' ? this.props.navigation.state.params.wa : this.state.a === 'ig' ? this.props.navigation.state.params.ig : this.props.navigation.state.params.eml}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                height: 70,
                paddingHorizontal: 20,
              }}>
              <TouchableOpacity
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#e3e3e3',
                  width: 80,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 10,
                  elevation: 10,
                }}
                onPress={() => this.setState({modal: false})}>
                <Text style={{alignSelf: 'center'}}>Kembali</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

                <ScrollView style={{ flex: 1 }}>
                <SliderBox   
                    images={alamat == 1 ? imB : alamat === 2 ? imS : alamat === 3 ? imJ : imM }
                    sliderBoxHeight={250}
                    dotColor="#FFEE58"   
                    inactiveDotColor="#90A4AE"   
                    paginationBoxVerticalPadding={20}   
                    autoplay   
                    circleLoop />

                <View style={{padding:10}}>
                    <Text style={{fontSize:30,fontWeight:'bold',fontFamily:"serif"}}>{this.props.navigation.state.params.nama}</Text>
                    <Text style={styles.dt}>{this.props.navigation.state.params.upd}</Text>
                    <Text style={styles.dt}>{this.props.navigation.state.params.loc}</Text>
                    <Text style={styles.kontent}>{this.props.navigation.state.params.k1}</Text>
                    <Text style={styles.kontent}>{this.props.navigation.state.params.k2}</Text>
                    <Text style={styles.kontent}>{this.props.navigation.state.params.k3}</Text>
                    <Text style={styles.kontent}>{this.props.navigation.state.params.k4}</Text>
                    <Text style={styles.kontent}>{this.props.navigation.state.params.k5}</Text>
                    <Text style={styles.kontent}>{this.props.navigation.state.params.k6}</Text>
                    <Text style={styles.kontent}>{this.props.navigation.state.params.k7}</Text>
                    <Text style={styles.kontent}>{this.props.navigation.state.params.k8}</Text>
                    <Text style={styles.kontent}>{this.props.navigation.state.params.k9}</Text>
                    {this.props.navigation.state.params.k10 !== '' ? <Text style={styles.kontent}>{this.props.navigation.state.params.k10}</Text> : null}
                    {this.props.navigation.state.params.k11 !== '' ? <Text style={styles.kontent}>{this.props.navigation.state.params.k11}</Text> : null}
                </View>
                <View style={{ flexDirection: "row"}}>
                <View style={{ backgroundColor: '#00BFFF', justifyContent: 'center', alignItems: "center", height: 80, width: '30%' }}>
                    <TouchableOpacity style={styles.ct} activeOpacity={0.4} onPress={() => {this.setModalVisible(true,'wa');}}>
                        <Ionicons name='logo-whatsapp' size={30} color='#ffff' style={styles.ic} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#9370DB', justifyContent: "center", alignItems: "center", height: 80, width: '40%' }}>
                    <TouchableOpacity style={styles.ct} activeOpacity={0.4} onPress={() => {this.setModalVisible(true,'ig');}}>
                        <Ionicons name='logo-instagram' size={30} color='#ffff' style={styles.ic} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#1abc9c', justifyContent: "center", alignItems: "center", height: 80, width: '30%' }}>
                    <TouchableOpacity style={styles.ct} activeOpacity={0.4} onPress={() => {this.setModalVisible(true,'mail');}}>
                        <Ionicons name='ios-mail' size={30} color='#ffff' style={styles.ic} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    kontent:{
        fontSize:18,marginTop:5,color: '#545454',fontFamily:'sans-serif-light'
    },
    dt:{
        fontSize:12,color: '#808080',fontFamily:'sans-serif-light'
    },
    ct:{
        width: '25%', justifyContent: 'center',
    },
    ic:{
        alignSelf: 'center'
    }
});