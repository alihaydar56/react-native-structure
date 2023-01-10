import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Colors} from '../../themes';
import {Text} from '../templates/Text';

interface PageProps {
  title?: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const {width, height} = Dimensions.get('window');

const SIZE = width * 0.7;

const Page: React.FC<PageProps> = ({title, index, translateX}) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const reAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      inputRange,
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
      borderRadius,
    };
  }, []);

  const reanimatedTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(translateX.value, inputRange, [height/2, 0, -height/2]);
    const opacity=interpolate(translateX.value,inputRange,[-1,1,-1])
    return {
      transform: [{translateY: translateY}],
      opacity,
    };
  }, []);

  return (
    <View
      style={[
        styles.pageContainer,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.square, reAnimatedStyle]} />
      <Animated.View
        style={[
          {
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
          },
          reanimatedTextStyle,
        ]}>
        <Text style={styles.title} align="center">
          {title}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: `rgba(0,0,256,1)`,
  },
  title: {
    fontSize: 50,
    textTransform: 'uppercase',
    color: Colors.White,
    fontWeight: '700',
  },
});

export default Page;
