
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/Routes';
import { TravelCity } from './src/Screen';
// import { TravelCity } from './src/Screen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {
  return (
    <NavigationContainer>
      <TravelCity/>
   {/* <Routes/> */}
   </NavigationContainer>
  );
};



export default App;
