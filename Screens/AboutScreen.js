import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, BackHandler } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import Modal from "react-native-modal";

export default class AboutScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackEvent)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackEvent)
    }

    onBackEvent = () => {
        this.setState({ modal: true })
        return true
    }

    closeApp() {
        BackHandler.exitApp()
    }

    render() {
        const items = [
            { nama: "Muhammad Arrafi",code: '#2ecc71' },
            { nama: "Shantika Ardita",code: '#9b59b6' },
            { nama: "Sri Hartati W", code: '#1abc9c' },
        ]
        return (
            <View style={{ flex: 1 }}>
                
                <Modal
                    isVisible={this.state.modal}
                    onBackButtonPress={() => this.setState({ modal: false })}
                    onBackdropPress={() => this.setState({ modal: false })}
                >
                    <View style={{ height: 200, width: '95%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10 }}>
                        <View style={{ height: 75, width: '100%', backgroundColor: '#458cff', borderTopRightRadius: 10, borderTopLeftRadius: 10, justifyContent: 'center', paddingHorizontal: 20 }}>
                            <Text style={{ alignSelf: 'center', fontSize: 16, color: 'white', fontWeight: 'bold' }}>Anda yakin ingin keluar aplikasi ini?</Text>
                        </View>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row', height: 125, paddingHorizontal: 20 }}>
                            <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#e3e3e3', width: 80, height: 30, justifyContent: 'center', borderRadius: 10, elevation: 10 }} onPress={()=> this.setState({ modal: false }, ()=> this.closeApp())}>
                                <Text style={{ alignSelf: 'center' }}>Keluar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#e3e3e3', width: 80, height: 30, justifyContent: 'center', borderRadius: 10, elevation: 10 }}  onPress={()=> this.setState({ modal: false })} >
                                <Text style={{ alignSelf: 'center' }}>Batal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/* CONTENT */}
                {/* <View style={{flex: 1}}> */}
                    <FlatGrid
                        itemDimension={200}
                        spacing={10}
                        itemWidth={200}
                        items={items}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]} activeOpacity={.4}>
                                <Text style={styles.itemName}>{item.nama}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
        alignSelf:"center",
    }
});