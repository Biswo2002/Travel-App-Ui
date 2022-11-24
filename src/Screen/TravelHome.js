import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TravelHome = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/Image/Bg2.jpg')}
        style={styles.Background}>
        <View style={styles.MainText}>
          <Text style={styles.Headline}>Discover World with us</Text>
        </View>
        <View style={styles.SubText}>
          <Text style={styles.SubLine}>
            Client in attained hungrier from and the to before their of for
            grateful keep the feel parents.
          </Text>
        </View>
        <TouchableOpacity style={styles.Touchable}>
          <Text style={styles.Started}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default TravelHome;

const styles = StyleSheet.create({
  Background: {
    height: Dimensions.get('window').height,
  },
  MainText: {
    marginHorizontal: 40,
    paddingTop: 350,
  },
  Headline: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  SubText: {
    paddingHorizontal: 40,
    paddingTop: 25,
  },
  SubLine: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Touchable:{
    marginTop:50,
    backgroundColor:'#fff',
    width:150,
    height:50,
    alignItems:'center',
    borderRadius:10,
    marginHorizontal: 40,

  },
  Started:{
    textAlign:'center',
    fontSize:22,
    fontWeight:'bold',
    paddingVertical:10,
    color:'#000'
  }

});
