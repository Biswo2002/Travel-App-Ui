import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Bottomtab } from './Layouts'


const Stack = createNativeStackNavigator()
const PrivateRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Bottomtab">
      <Stack.Screen
        name="Bottomtab"
        component={Bottomtab}
        options={{ headerShown: true }}
      />

      {/* <Stack.Screen
        name="ReadBook"
        component={ReadBook}
        // options={{headerShown: false}}
      /> */}
    </Stack.Navigator>

  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})