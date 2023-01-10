import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import {hp, wp} from '../utils/screenResize';
import {Colors} from '../themes';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Text } from '../components/templates/Text';

const SIZE = 90;
const CIRCLE_RADİUS = SIZE * 2;

type ContextType = {
  translateX: number;
  translateY: number;
};

const PanGestureHandlerScreen: React.FC = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const PanGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance=Math.sqrt(translateX.value**2 + translateY.value**2);
      if(distance<CIRCLE_RADİUS +SIZE/2){
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
   
    },
  });

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Text align='center' type='Montserrat' size={wp(5)} style={{marginBottom:hp(5)}}>PanGestureHandler</Text>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={PanGestureEvent}>
          <Animated.View style={[styles.square, reanimatedStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Background,
  },
  circle: {
    width: CIRCLE_RADİUS * 2,
    height: CIRCLE_RADİUS * 2,
    borderRadius: CIRCLE_RADİUS,
    borderWidth: 5,
    borderColor: 'rgba(0,0,256,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0,0,256,0.5)',
    borderRadius: SIZE / 4,
  },
});

export default PanGestureHandlerScreen;
