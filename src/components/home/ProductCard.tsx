import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {IProduct} from '../../interfaces/product';
import Colors from '../../themes/colors';
import baseStyles from '../../themes/styles/base';
import {hp, wp} from '../../utils/screenResize';
import {Text} from '../templates/Text';

const ProductCard = (props: IProduct) => {
    const navigation = useNavigation<NavigationProp<any>>();
    const onPressCard=()=>{
        navigation.navigate('ProductDetailScreen',{product:props})
    }
  return (
    <TouchableOpacity style={styles.card} onPress={onPressCard}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.thumbnail}>
          <Image
            source={{uri: props.thumbnail}}
            style={{flex: 1, resizeMode: 'contain'}}
          />
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', marginVertical: wp(1)}}>
            <Text
              size={wp(4)}
              type="SemiBold"
              style={{
                width: '30%',
                fontWeight: '700',
              }}>
              {'Brand :'}
            </Text>
            <Text style={{width: '60%'}}>{props.brand}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              size={wp(4)}
              type="SemiBold"
              style={{
                fontWeight: '700',
              }}>
              {'Description :'}
            </Text>
            <Text style={{width: '60%', marginLeft: wp(1)}} numberOfLines={2}>
              {props.description}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: wp(1)}}>
            <Text
              size={wp(4)}
              type="SemiBold"
              style={{
                width: '30%',
                fontWeight: '700',
              }}>
              {'Category :'}
            </Text>
            <Text style={{width: '60%'}}>{props.category}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: hp(15),
    backgroundColor: Colors.White,
    width: wp(90),
    alignSelf: 'center',
    marginBottom: wp(2),
    paddingHorizontal: wp(2),
    borderRadius: 10,
    ...baseStyles.shadow,
  },
  thumbnail: {
    width: wp(15),
    height: hp(15),
    borderRadius: wp(100),
    marginRight: wp(1),
  },
});

export default ProductCard;
