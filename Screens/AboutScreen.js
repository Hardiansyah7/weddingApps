import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, BackHandler } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';

export default class AboutScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        const items = [
            { nama: "Muhammad Arrafi",code: '#2ecc71' },
            { nama: "Shantika Ardita",code: '#9b59b6' },
            { nama: "Sri Hartati W", code: '#1abc9c' },
        ]
        return (
            <View style={{ flex: 1 }}>

                {/* CONTENT */}
                {/* <View style={{flex: 1}}> */}
                <View style={{justifyContent:'center',alignItems:"center"}}>
                <Text style={{fontSize:40,fontFamily:'sans-serif-thin',padding:10}}>WE ARE A TEAM</Text>
                </View>
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
        fontFamily:"serif",
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
        alignSelf:"center",
    }
});