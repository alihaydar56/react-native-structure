import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';

import {hp, wp} from '../utils/screenResize';
import {Text} from '../components/templates/Text';
import {Colors} from '../themes';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from '../components/scrollview/Page';

const SIZE = 90;

const WORDS = ["What's", 'Up', 'Mobile', 'Devs'];

const ScrollviewInterpolate: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const translateX = useSharedValue(0);

  const scrollAnimatedHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      onScroll={scrollAnimatedHandler}
      style={styles.container}>
      {WORDS.map((text, index) => {
        return (
          <Page
            key={index.toString()}
            title={text}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ScrollviewInterpolate;
