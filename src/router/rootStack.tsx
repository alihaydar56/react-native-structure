import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { ServerErrorModal } from '../components/ServerErrorModal';
<<<<<<< HEAD
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ProductDetailScreen from '../screens/productDetail/ProductDetailScreen';
=======
import AnimatedExampleOne from '../screens/AnimatedExampleOne';
import PanGestureHandlerScreen from '../screens/PanGestureHandler';
import ScrollviewInterpolate from '../screens/ScrollviewInterpolate';
import InterpolateColorsScreen from '../screens/InterpolateColors';
import PinGestureHandlerScreen from '../screens/PinGestureHandler';
import DoubleTapPanHandlerScreen from '../screens/DoubleTapPanHandler';
import SwipeToDeleteAnimationScreen from '../screens/SwipeToDeleteAnimation';
import FlatListScrollAnimationScreen from '../screens/FlatlistScrollAnimation';
>>>>>>> 32512d2 (animation trainings)


const Stack = createNativeStackNavigator();



const RootStack = () => {
  return (
    <>
    <ServerErrorModal />
    <Stack.Navigator screenOptions={{headerShown: false}}>
<<<<<<< HEAD
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'ProductDetailScreen'} component={ProductDetailScreen} />
=======
      <Stack.Screen name={'FlatListScrollAnimationScreen'} component={FlatListScrollAnimationScreen} />
      <Stack.Screen name={'SwipeToDeleteAnimationScreen'} component={SwipeToDeleteAnimationScreen} />
      <Stack.Screen name={'DoubleTapPanHandlerScreen'} component={DoubleTapPanHandlerScreen} />
      <Stack.Screen name={'PinGestureHandlerScreen'} component={PinGestureHandlerScreen} />
      <Stack.Screen name={'InterpolateColorsScreen'} component={InterpolateColorsScreen} />
      <Stack.Screen name={'ScrollviewInterpolate'} component={ScrollviewInterpolate} />
      <Stack.Screen name={'PanGestureHandlerScreen'} component={PanGestureHandlerScreen} />
      <Stack.Screen name={'AnimatedExampleOne'} component={AnimatedExampleOne} />
>>>>>>> 32512d2 (animation trainings)
    </Stack.Navigator>

    </>
  );
};

export default RootStack;
