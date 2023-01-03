import {
    NavigationProp,
    useIsFocused,
    useNavigation,
    useRoute,
  } from '@react-navigation/native';
  import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
  import {View, FlatList, StyleSheet, Platform, StatusBar} from 'react-native';
import { BackWhite } from '../../components/Icons';
import BottomSheetCard from '../../components/product/BottomSheetCard';
import PlaceCarousel from '../../components/product/PlaceCarousel';
import { IconButton } from '../../components/templates/Button';
import { hp, wp } from '../../utils/screenResize';

  
  const ProductDetailScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const myRef = useRef<FlatList>(null);
    const route = useRoute();
    const isFocused = useIsFocused();
    const product=route.params?.product;
  
   
  
    return (
      <View style={{flex:1}}>
        {/* <Header withBack /> */}
        <View style={{height:'60%'}}>
          {/* <StatusBar hidden /> */}
          {/* carousel for place images */}
           
          <PlaceCarousel key={product?.id} {...product} />
          <IconButton
            icon={BackWhite}
            size={wp(7)}
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
        </View>
  
        <BottomSheetCard {...product} />
      
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wrap: {
      width: wp(100),
      height:Platform.select({ios:hp(100) * 0.63,android: hp(100) * 0.60}),
    },
    backIcon: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? wp(12) : wp(4),
      left: wp(3),
    },
  });
  
  export default ProductDetailScreen;
  