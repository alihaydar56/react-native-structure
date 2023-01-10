import React, {useCallback, useRef} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

import {hp, wp} from '../utils/screenResize';

import {Colors} from '../themes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const DoubleTapPanHandlerScreen: React.FC = () => {
  const doubleTapRef = useRef();
  const scale = useSharedValue(0);
  const textOpacity = useSharedValue(1);

  const onDoubleTapHandle = useCallback(() => {
    console.log('DOUBLE CLİCKED');
    scale.value = withTiming(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(200, withTiming(0));
      }
    });
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });

  const onSingleTapHandler = useCallback(() => {
    console.log('SINGLE CLİCKED');
    textOpacity.value = withTiming(0,undefined,(isFinished)=>{
        if(isFinished){
            textOpacity.value=withDelay(200,withTiming(1));
        }
    });
  }, []);

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value,
    };
  });

  return (
    <View style={[styles.container, {}]}>
      <GestureHandlerRootView>
        <TapGestureHandler
          waitFor={doubleTapRef}
          onActivated={onSingleTapHandler}>
          <TapGestureHandler
            maxDelayMs={250}
            ref={doubleTapRef}
            numberOfTaps={2}
            onActivated={onDoubleTapHandle}>
            <Animated.View>
              <ImageBackground
                source={require('../assets/images/background_image.jpg')}
                style={[styles.image]}>
                <AnimatedImage
                  source={require('../assets/images/heart.png')}
                  style={[
                    styles.image,
                    animatedImageStyle,
                    {
                      resizeMode: 'center',
                      shadowOffset: {width: 0, height: 20},
                      shadowOpacity: 0.35,
                      shadowRadius: 30,
                    },
                  ]}
                />
              </ImageBackground>
              <Animated.Text style={[styles.text, animatedTextStyle]}>
                🐢 🐢 🐢
              </Animated.Text>
            </Animated.View>
          </TapGestureHandler>
        </TapGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
};
const SIZE = 100;
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width,
    height: height * 0.5,
  },
  text: {
    alignSelf: 'center',
    fontSize: wp(6),
    justifyContent: 'center',
    marginTop: hp(1),
  },
});

export default DoubleTapPanHandlerScreen;
