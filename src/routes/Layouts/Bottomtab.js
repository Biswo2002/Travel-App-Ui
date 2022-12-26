import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TravelCity } from '../../Screen';

const Tab = createBottomTabNavigator();
const Bottomtab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TravelCity"
        component={TravelCity}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 20,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomtab;

const styles = StyleSheet.create({});
