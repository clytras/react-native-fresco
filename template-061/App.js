/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image source={require('./assets/APAA-2019_Main-Venues-and-Official-Hotels_20190924_v2.png')} />
      </SafeAreaView>
    </>
  );
};

export default App;
