import React, {useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  View,
  ViewToken,
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
import ListItem from '../components/flatlist/ListItem';

const data = new Array(50).fill(0).map((_, index) => ({id: index}));

const FlatListScrollAnimationScreen: React.FC = () => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <FlatList
      data={data}
      contentContainerStyle={{marginTop: hp(3)}}
      onViewableItemsChanged={({viewableItems: vItems}) => {
        //console.log(viewableItems);
        viewableItems.value = vItems;
      }}
      renderItem={({item, index}) => (
        <ListItem item={item} viewableItems={viewableItems} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default FlatListScrollAnimationScreen;
