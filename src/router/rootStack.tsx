import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { ServerErrorModal } from '../components/ServerErrorModal';
import SplashScreen from '../screens/SplashScreen';


const Stack = createNativeStackNavigator();



const RootStack = () => {
  return (
    <>
    <ServerErrorModal />
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
    </Stack.Navigator>

    </>
  );
};

export default RootStack;
