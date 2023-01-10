import React, {useCallback, useEffect, useRef} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {
  GestureHandlerGestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import Colors from '../../themes/colors';
import {hp, wp} from '../../utils/screenResize';
import {AnadoluLogo} from '../Icons';
import {IconButton} from '../templates/Button';
import {Text} from '../templates/Text';

interface TaskItem {
  task: string;
}

type ContextType = {
  translateX: number;
};

const {width, height} = Dimensions.get('window');

const MAX_SWIPE_TRANSLATE_X = -width * 0.3;

const ListItem = (props: TaskItem) => {
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);

  const onGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onActive: (event, context) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      if (MAX_SWIPE_TRANSLATE_X <= translateX.value) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(-width / 3);
      }
    },
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    opacity.value = translateX.value >= MAX_SWIPE_TRANSLATE_X ? 0 : 1;
    return {
      opacity: opacity.value,
    };
  });

  const onPressTrashIcon=(task:string)=>{

  }

  return (
    <View style={styles.taskContainer}>
      <GestureHandlerRootView style={{flex: 1}}>
        <PanGestureHandler onGestureEvent={onGestureHandler}>
          <Animated.View style={[styles.task, animatedContainerStyle]}>
            <Text>{props.task}</Text>
          </Animated.View>
        </PanGestureHandler>
        <Animated.View style={[styles.trashIconContainer, animatedIconStyle]}>
          <IconButton icon={AnadoluLogo} size={wp(9)} onPress={()=>onPressTrashIcon(props.task)} />
        </Animated.View>
      </GestureHandlerRootView>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    marginVertical: wp(3),
    width: wp(90),
    alignSelf: 'center',
  },
  task: {
    justifyContent: 'center',
    backgroundColor: Colors.White,
    paddingHorizontal: wp(3),
    height: hp(7),
    borderRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 20},
    elevation: 8,
  },
  title: {
    fontSize: wp(7),
    marginVertical: wp(3),
    paddingHorizontal: wp(3),
  },
  trashIconContainer: {
    width: hp(7),
    height: hp(7),
    position: 'absolute',
    right: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItem;
