import React, {useCallback, useEffect, useRef} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';

import {Colors} from '../themes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Text} from '../components/templates/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import {wp} from '../utils/screenResize';
import ListItem from '../components/swipe/ListItem';

const items = [
  'lorem ipsum dolar sit amet 1',
  'lorem ipsum dolar sit amet 2',
  'lorem ipsum dolar sit amet 3',
  'lorem ipsum dolar sit amet 4',
];

const SwipeToDeleteAnimationScreen: React.FC = () => {


  return (
    <SafeAreaView style={[styles.container, {}]}>
      <Text style={[styles.title]}>Tasks</Text>
      <ScrollView>
        {items.map((item, index) => {
          return <ListItem key={index} task={item}  />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  title: {
    fontSize: wp(7),
    marginVertical: wp(3),
    paddingHorizontal: wp(3),
  },
});

export default SwipeToDeleteAnimationScreen;
