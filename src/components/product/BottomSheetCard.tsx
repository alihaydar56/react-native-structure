import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  StyleSheet,
  View,

  TouchableOpacity,

} from 'react-native';

import {Colors} from '../../themes';
import {wp, hp} from '../../utils/screenResize';

import {IconButton} from '../templates/Button';
import {Text} from '../templates/Text';
import BottomSheet, {
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IProduct } from '../../interfaces/product';



const BottomSheetCard = (props:IProduct) => {
  const navigation=useNavigation<NavigationProp<any>>();

 

 

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // variables
  const snapPoints = useMemo(() => ['42%', '70%'], []);


 



  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      style={{flex: 1}}>
      <BottomSheetScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}>
             <View style={styles.placeTitle}>
          
          <Text
            type="Montserrat"
            size={28}
            style={{
              fontWeight: '700',
              lineHeight: 42,
              marginBottom: 6,
              marginLeft: -2,
            }}>
            {props.title}
          </Text>

         
        </View>
        <View style={styles.placeTitle}>

          <Text
            type="Montserrat"
            size={wp(5)}
            style={{
              fontWeight: '700',
              lineHeight: 42,
              marginBottom: 6,
              marginLeft: -2,
            }}>
            {"Price : "}<Text>{props.price}</Text>
          </Text>

         
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 15,
          }}
         >
          <Text
            color="Black"
            type="Montserrat"
            size={14}
            style={{
              textDecorationLine: 'underline',
              fontWeight: '700',
              width: wp(75),
              lineHeight: 21,
            }}>
            {"Category :"}<Text>{props.brand}</Text>
          </Text>
        </TouchableOpacity>

       

       

       

       

        <Text
          type="Montserrat"
          size={18}
          color="Black"
          style={{
            fontWeight: '700',
            lineHeight: 27,
            marginBottom: 11,
            marginTop: 27,
            marginLeft: 15,
          }}>
          {'About'}
        </Text>
        <Text
          type="Montserrat"
          size={14}
          color="Black"
          style={{
            paddingBottom: wp(4),
            lineHeight: 21,
            fontWeight: '400',
            marginLeft: 15,
          }}>
          {props.description}
        </Text>
      </BottomSheetScrollView>

    </BottomSheet>
  );
};

const styles = StyleSheet.create({

  placeTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
  },
  rightHeaderIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 20,
  },
  casbackLeftContainer: {
    alignItems: 'center',
    backgroundColor: Colors.Background,
    borderRadius: 4,
    width: 124,
    height: 18,
    marginRight: 8,
  },
  casbackRightContainer: {
    alignItems: 'center',
    backgroundColor: Colors.DarkGrey,
    borderRadius: 4,
    width: 97,
    height: 18,
  },
  rightHeaderGridText: {lineHeight: 18, fontWeight: '500'},
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
  },
});

export default BottomSheetCard;
