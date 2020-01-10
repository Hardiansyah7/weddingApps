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

import TabHelper from '../Screens/tabnav/tabhelper/TabHelper';

export default class HomeScreen extends Component {
  //Return Tab Navigator from here to render tab in option one of navigation drawer
  constructor(props) {
    super(props);
    this.state = {
      nama: 'MUHAMMAD SAW.',
      alias: 'Muhammad bin Abdullah.',
      usia: '63 tahun.',
      periode: '570-632 M.',
      tempat_diutus: 'Mekkah.',
      disebut: 'Al-Quran menyebutkan namanya sebanyak 25 kali.',
      keturunan:
        '7 anak; 3 laki-laki Qasim, Abdullah dan Ibrahim, dan 4 perempuan Zainab, Ruqayyah, Ummi Kultsum dan Fatimah az-Zahra.',
      kaum: 'Bangsa Arab.',
      tempat_wafat: 'Madinah.',
      code: '#2c3e50',
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
        im: images.imgB1,
        nama: 'Betawi Modern',
        code: '#2ecc71',
        hrg: 'Rp.100.000',
        jdl: 'Wedding Decoration Betawi Modern',
        upd: 'Updated 10 January 2020',
        loc: 'Jakarta',
        desc:
          'Wedding Planner: @mors.wedding,Venue: @ambharajakarta,Catering: @ambharajakarta,Photography & Videography: Fadli,Entertainment: @sausalitowedding,Brides MUA: @fidelhertamakeup,Brides Attire: @hilda.jusnita,Bride Suntiang: @anggunbusana,Grooms & Family Attire: @anggunbusana',
        wa: '081510431134',
        ig: 'nonamanis.creativeplanner',
        eml: 'nonamaniscreative.com',
      },
      {
        im: images.imgS1,
        nama: 'Sunda Modern',
        code: '#34495e',
        hrg: 'Rp.200.000',
        jdl: 'Wedding org4',
        loc:'Jakarta',
        upd: 'Updated 10 January 2020',
        desc:
          'Decor and Sangjit Box by @levinedecor,Dress by @sokowiyanto,Cheongsam by @pizzarosensationdesign,Makeup by @kunsoomakeupartist,Hairdo by @chennysulistyo,Shoes by @regisbridalshoes.Accessories by @rinaldyyunardi,Organized by @amoretti_awp,Photography by @aspictura_ @aldosinarta,MC by @laurence.jehezquiell,Hongbao by @viviang_co',
        wa: '+628121880823',
        ig: 'levinedecor',
        eml: 'Asklevinedecor@gmail.com',
        },
      {
        im: images.imgJ1,
        nama: 'Jawa Modern',
        code: '#9b59b6',
        hrg: 'Rp.100000',
        upd: 'updated on Oct 2019',
        loc: 'Jakarta',
        desc:
        'Decor and Sangjit Box by @levinedecor,Dress by @sokowiyanto,Cheongsam by @pizzarosensationdesign,Makeup by @kunsoomakeupartist,Hairdo by @chennysulistyo,Shoes by @regisbridalshoes.Accessories by @rinaldyyunardi,Organized by @amoretti_awp,Photography by @aspictura_ @aldosinarta,MC by @laurence.jehezquiell,Hongbao by @viviang_co',
        wa: '+628121880823',
          ig: 'levinedecor',
          eml: 'Asklevinedecor@gmail.com',
      },
      {
        im: images.imgM1,
        nama: 'Minang Modern',
        code: '#1abc9c',
        hrg: 'Rp.100000',
        loc:'Jakarta',
        upd: 'Updated 10 January 2020',
        desc:
        'Wedding Planner: @mors.wedding,Venue: @ambharajakarta,Catering: @ambharajakarta,Photography & Videography: Fadli,Entertainment: @sausalitowedding,Brides MUA: @fidelhertamakeup,Brides Attire: @hilda.jusnita,Bride Suntiang: @anggunbusana,Grooms & Family Attire: @anggunbusana',
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
            <Text style={{padding: 10, fontSize: 30}}>Top of The Week</Text>
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
                  <Text style={styles.itemhrg}>{item.hrg}</Text>
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
    // padding: 5,
    height: 200,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  itemCap: {
    fontSize: 15,
  },
  itemhrg: {
    fontSize: 15,
    color: 'green',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
    alignSelf: 'center',
  },
});
