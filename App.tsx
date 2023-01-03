'use strict';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootStack from './src/router/rootStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


LogBox.ignoreLogs(['Warnings...'])

LogBox.ignoreAllLogs();

const App: React.FC = () => {

 


  useEffect(() => {
  
  }, []);




  return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{flex:1}}>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </SafeAreaProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider>

  );
};

export default App;
