import React from 'react';
import {ViewToken} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {wp} from '../../utils/screenResize';

interface IListItem {
  item: {id: number};
  viewableItems: Animated.SharedValue<ViewToken[]>;
}

const ListItem = ({item, viewableItems}: IListItem) => {
  const animatedStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(item => item.isViewable)
        .find(viewableItem => viewableItem.item.id === item.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform:[
        {scale:withTiming(isVisible?1:0)}
      ]
    };
  });

  return (

      <Animated.View
        style={[{
          backgroundColor: '#FACAD2',
          height: 80,
          width: '90%',
          alignSelf: 'center',
          marginVertical: wp(2),
          borderRadius: 10,
        },animatedStyle]}></Animated.View>
   
  );
};

export default React.memo(ListItem);
