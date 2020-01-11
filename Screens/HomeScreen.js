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

export default class HomeScreen extends Component {
  //Return Tab Navigator from here to render tab in option one of navigation drawer
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
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
        id:1,
        im: images.imgB1,
        nama: 'Betawi Modern',
        code: '#2ecc71',
        hrg: 'Rp.100.000',
        jdl: 'Wedding Decoration Betawi Modern',
        upd: 'Updated 10 January 2020',
        loc: 'Jakarta',
        k1:'Wedding Planner: @mors.wedding',
        k2:'Venue: @ambharajakarta',
        k3:'Catering: @ambharajakarta',
        k4:'Photography & Videography: Fadli',
        k5:'Entertainment: @sausalitowedding',
        k6:'Brides MUA: @fidelhertamakeup',
        k7:'Brides Attire: @hilda.jusnita',
        k8:'Bride Suntiang: @anggunbusana',
        k9:'Grooms & Family Attire: @anggunbusana',
        k10:'',
        k11:'',
        wa: '081510431134',
        ig: 'nonamanis.creativeplanner',
        eml: 'nonamaniscreative.com',
      },
      {
        id:2,
        im: images.imgS1,
        nama: 'Sunda Modern',
        code: '#34495e',
        hrg: 'Rp.200.000',
        jdl: 'Wedding org4',
        loc:'Jakarta',
        upd: 'Updated 10 January 2020',
        k1:'Decor and Sangjit Box by @levinedecor',
        k2:'Dress by @sokowiyanto',
        k3:'Cheongsam by @pizzarosensationdesign',
        k4:'Makeup by @kunsoomakeupartist',
        k5:'Hairdo by @chennysulistyo',
        k6:'Shoes by @regisbridalshoes',
        k7:'Accessories by @rinaldyyunardi',
        k8:'Organized by @amoretti_awp',
        k9:'Photography by @aspictura_ @aldosinarta',
        k10:'MC by @laurence.jehezquiell',
        k11:'Hongbao by @viviang_co',
        wa: '+628121880823',
        ig: 'levinedecor',
        eml: 'Asklevinedecor@gmail.com',
        },
      {
        id:3,
        im: images.imgJ1,
        nama: 'Jawa Modern',
        code: '#9b59b6',
        hrg: 'Rp.100000',
        upd: 'updated on Oct 2019',
        loc: 'Jakarta',
        k1:'Decor and Sangjit Box by @levinedecor',
        k2:'Dress by @sokowiyanto',
        k3:'Cheongsam by @pizzarosensationdesign',
        k4:'Makeup by @kunsoomakeupartist',
        k5:'Hairdo by @chennysulistyo',
        k6:'Shoes by @regisbridalshoes',
        k7:'Accessories by @rinaldyyunardi',
        k8:'Organized by @amoretti_awp',
        k9:'Photography by @aspictura_ @aldosinarta',
        k10:'MC by @laurence.jehezquiell',
        k11:'Hongbao by @viviang_co',
        wa: '+628121880823',
        ig: 'levinedecor',
        eml: 'Asklevinedecor@gmail.com',
      },
      {
        id:4,
        im: images.imgM1,
        nama: 'Minang Modern',
        code: '#1abc9c',
        hrg: 'Rp.100000',
        loc:'Jakarta',
        upd: 'Updated 10 January 2020',
        k1:'Wedding Planner: @mors.wedding',
        k2:'Venue: @ambharajakarta',
        k3:'Catering: @ambharajakarta',
        k4:'Photography & Videography: Fadli',
        k5:'Entertainment: @sausalitowedding',
        k6:'Brides MUA: @fidelhertamakeup',
        k7:'Brides Attire: @hilda.jusnita',
        k8:'Bride Suntiang: @anggunbusana',
        k9:'Grooms & Family Attire: @anggunbusana',
        k10:'',
        k11:'',
        wa: '081510431134',
        ig: 'nonamanis.creativeplanner',
        eml: 'nonamaniscreative.com',
      },
    ];
    return (
      <View style={{flex: 1}}>

        <Modal
          isVisible={this.state.modal}
          onBackButtonPress={() => this.setState({modal: false})}
          onBackdropPress={() => this.setState({modal: false})}>
          <View
            style={{
              height: 200,
              width: '95%',
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
                Anda yakin ingin keluar aplikasi ini?
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                flexDirection: 'row',
                height: 125,
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
                onPress={() =>
                  this.setState({modal: false}, () => this.closeApp())
                }>
                <Text style={{alignSelf: 'center'}}>Keluar</Text>
              </TouchableOpacity>
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
                <Text style={{alignSelf: 'center'}}>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* CONTENT */}
        <ScrollView style={{flex: 1}}>
          <View style={{display: 'flex', justifyContent: 'center'}}>
            <Text style={{padding: 10, textAlign:'center',fontSize: 30,fontFamily:'serif'}}>Top of The Week</Text>
          </View>
          <FlatGrid
            itemDimension={150}
            spacing={20}
            itemWidth={200}
            items={items}
            style={styles.gridView}
            renderItem={({item, index}) => (
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={[styles.itemContainer]}
                  onPress={() =>
                    this.props.navigation.navigate('Detail', {
                      id:item.id,
                      im: item.im,
                      nama: item.nama,
                      code: item.code,
                      hrg: item.hrg,
                      jdl: item.jdl,
                      upd: item.upd,
                      desc: item.desc,
                      loc: item.loc,
                      wa: item.wa,
                      ig: item.ig,
                      eml: item.eml,
                      k1:item.k1,
                      k2:item.k2,
                      k3:item.k3,
                      k4:item.k4,
                      k5:item.k5,
                      k6:item.k6,
                      k7:item.k7,
                      k8:item.k8,
                      k9:item.k9,
                      k10:item.k10,
                      k11:item.k11,
                    })
                  }
                  activeOpacity={0.4}>
                  <Image
                    source={item.im}
                    style={{width: '100%', height: 200}}
                    resizeMode={'cover'}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.itemName}>{item.nama}</Text>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding:10,
    fontFamily: "serif",
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
    alignSelf: 'center',
  },
});
