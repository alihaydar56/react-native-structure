import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Colors } from '../themes';

const imageUri =
  'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

const {width, height} = Dimensions.get('screen');




// focalX ve focalY nedir ne için kullanılır
// focalX ve focalY iki parmaığımız ile resim e zoom yaparken iki parmağımız arasında ki ortak noktadır.
// eğer zoom yaparken focalX ve focalY değerlerini kullanmaz isek resmin hangi noktasına zoom yaparsak yapalım
// resim her zaman resmin merkezine zoom olacaktır.
// focalX ve focalY kullanarak bunun önüne geçiyoruz ve resmin neresine zoom yaparsak ,zoom yaptıgımız noktaya zoom yapılacaktır.




// GestureHandlerRootView neden kullandık
// react native de zoom yapabilmemiz için ilgili ekranı  GestureHandlerRootView componenti ile kaplamamız lazım
// aksi takdirde PinchGestureHandler çalışmayacaktır.


// PinchGestureHandler içine birden fazla child component alamaz,bu yüzden PincGestureHandler kullanırken,içinde eğer birden fazla component kullanacak isek bu component leri bir component ile wrap etmeliyiz.
const AnimatedImage = Animated.createAnimatedComponent(Image);

const PinGestureHandlerScreen: React.FC = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: event => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: event => {
        scale.value = withTiming(1);
      },
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View style={{flex:1}}>
        <AnimatedImage
          source={{uri: imageUri}}
          style={[animatedStyle, {flex: 1}]}
        />
        {/* <Animated.View style={[styles.focalPoint]}></Animated.View> */}
        </Animated.View>
      
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focalPoint:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:Colors.Black,
    width:20,
    height:20,
    borderRadius:100,
  }
});

export default PinGestureHandlerScreen;
