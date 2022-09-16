'use strict';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button} from './src/components/templates/Button';
import {Text} from './src/components/templates/Text';
import RootStack from './src/router/rootStack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

import { LogBox } from 'react-native';
import { wp } from './src/utils/screenResize';

LogBox.ignoreLogs(['Warnings...'])

LogBox.ignoreAllLogs();

const App: React.FC = () => {

 
  const onError = (error: Error, stackTrace: string) => {
    /* Log the error to an error reporting service */
    console.log('Error :', error.message, stackTrace);
  };

  const CustomFallback = (props: {error: Error; resetError: () => void}) => (
    <View style={{flex: 1, justifyContent: 'center',alignItems:'center'}}>
      <Text>Something went wrong</Text>
      {/* <Text>{props.error.toString()}</Text> */}
      <Button style={{width:wp(60),marginTop:wp(3)}} onPress={props.resetError} title={'Try again'} />
    </View>
  );



  useEffect(() => {
  
  }, []);




  return (
    <ErrorBoundary onError={onError} FallbackComponent={CustomFallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
