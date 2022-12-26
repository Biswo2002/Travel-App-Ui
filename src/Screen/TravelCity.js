import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const TRAVEL = [
  {
    id: 'Hotel-1',
    title: 'The Gudvangen Village',
    subName: 'EPIC-REACT',
    rate: 5.01,
    image: require('../assets/Image/Bg11.jpg'),
    location: 'London',
  },
  {
    id: 'Hotel-2',
    title: 'The Gudvangen Village',
    subName: 'EPIC-REACT',
    rate: 4.9,
    image: require('../assets/Image/Bg5.jpg'),
    location: 'London',
  },
  {
    id: 'Hotel-3',
    title: 'The Gudvangen Village',
    subName: 'EPIC-REACT',
    rate: 4.9,
    image: require('../assets/Image/Bg4.jpg'),
    location: 'London',
  },
];
const TravelCity = () => {
  return (
    <SafeAreaView>
      <View style={styles.FirstContainer}>
        <View style={styles.HeadIcon}>
          <AntDesign name="bars" size={30} color={'#fff'} />
          <Fontisto name="bell" size={30} color={'#fff'} />
        </View>
        <View style={styles.FirstText}>
          <Text style={styles.HeadText}>Explore the beautiful places</Text>
        </View>
      </View>
      <View style={styles.SecondContainer}>
        <View style={styles.SearchBox}>
          <View style={styles.Box}>
            <EvilIcons name="search" size={30} color={'#000'} />
            <TextInput placeholder="Search place" style={{fontSize: 18}} />
          </View>
        </View>
      </View>
      <View style={styles.ThirdContainer}>
        <View style={styles.SecondIcon}>
          <TouchableOpacity>
            <View style={styles.Icon1}>
              <Entypo name="aircraft" color={'#05555C'} size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Icon1}>
              <FontAwesome5 name="umbrella-beach" color={'#05555C'} size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Icon1}>
              <Ionicons name="bonfire-outline" color={'#05555C'} size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.Icon1}>
              <Fontisto name="cocktail" color={'#05555C'} size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.FourthContainer}>
        <View>
          <Text style={styles.Recommended}>Recommended</Text>
        </View>
      </View>
      {/* <FlatList/> */}

      <View style={{marginHorizontal:20,marginVertical:30}}>
        <FlatList
          data={TRAVEL}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{padding: 10}}>
              <ImageBackground
                source={item?.image}
                style={styles.Hotel}
                imageStyle={{borderRadius: 30}}>
                <View style={styles.Hotel1}>
                  <Text style={styles.TextImg}>{item?.title}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 25,
                    marginTop: 130,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons
                      name="location-outline"
                      size={20}
                      color={'#fff'}
                    />
                    <Text style={{color: '#ffff', fontSize: 18}}>
                      {item?.location}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Entypo name="star-outlined" size={20} color={'#fff'} />
                    <Text style={{color: 'yellow', fontSize: 18}}>
                      {item?.rate}
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default TravelCity;

const styles = StyleSheet.create({
  FirstContainer: {
    backgroundColor: '#04555C',
    height: 250,
  },
  HeadIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    // paddingHorizontal:20,
    marginTop: 30,
  },
  FirstText: {
    width: 250,
    marginHorizontal: 20,
    paddingVertical: 50,
  },
  HeadText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  SecondContainer: {
    backgroundColor: '#f2f8f9',
    height: 80,
  },
  SearchBox: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ffffff',
    marginHorizontal: 25,
    backgroundColor: '#ffffff',
    marginTop: -30,
    // width:350,
  },
  Box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ThirdContainer: {
    backgroundColor: '#fffff',
  },
  SecondIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    paddingVertical: 20,
    marginTop: -40,
  },
  Icon1: {
    backgroundColor: '#E5EDEE',
    width: 65,
    height: 60,
    padding: 15,
    borderRadius: 10,
  },
  Recommended: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  FourthContainer: {
    marginHorizontal: 25,
    paddingTop: 25,
  },
  FivethContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  HotelIMG: {
    marginHorizontal: 10,
    paddingTop: 30,
  },
  Hotel: {
    width: 230,
    height: 260,
  },
  Hotel1: {
    marginTop: 25,
    marginHorizontal: 25,
  },
  TextImg: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
