import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { ServerErrorModal } from '../components/ServerErrorModal';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ProductDetailScreen from '../screens/productDetail/ProductDetailScreen';


const Stack = createNativeStackNavigator();



const RootStack = () => {
  return (
    <>
    <ServerErrorModal />
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'ProductDetailScreen'} component={ProductDetailScreen} />
    </Stack.Navigator>

    </>
  );
};

export default RootStack;
