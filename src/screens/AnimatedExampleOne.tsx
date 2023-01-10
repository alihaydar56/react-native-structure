import React, {useEffect} from 'react';
import {ActivityIndicator, Dimensions, ImageBackground, StyleSheet, View} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';

import baseStyles from '../themes/styles/base';
import {hp, wp} from '../utils/screenResize';
import {AnadoluLogo} from '../components/Icons';
import {Text} from '../components/templates/Text';
import {Colors} from '../themes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SIZE = 50;


// worklet kullandık çünkü reanimated javascript fonksiyonlarını handle ederken
// bunun bir worklet çatısı altında olması gerekmektedir.
// reanimated UI tarafında çalışmaktadır bu yüzden reanimated içinde bir js fonksiyonu kullanmak istersek 
// bunun worklet oldugunu belirtmemiz gerekmektedir.
const handleRotate=(progress:Animated.SharedValue<number>)=>{
  'worklet'
  return `${progress.value * 2 * Math.PI}rad`;
}

const AnimatedExampleOne: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();

  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius:(progress.value*SIZE)/2,
      transform: [
        {scale: scale.value},
        {rotate: handleRotate(progress)},
      ],
    };
  }, []);

  useEffect(() => {
   // progress.value = withRepeat(withSpring(0.5), 3);
    scale.value = withRepeat(withTiming(1,{duration:1000}), 6,true);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: wp(5),
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.Background,
      }}>
      <Animated.View
        style={[
          {
            width: SIZE,
            height: SIZE,
            backgroundColor: Colors.Grey,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems:'center'
          },
          reanimatedStyle,
        ]}>
          <ActivityIndicator size={'large'} color='White' />
        </Animated.View>
    </View>
  );
};

export default AnimatedExampleOne;
