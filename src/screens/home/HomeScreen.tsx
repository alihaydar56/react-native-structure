import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Text} from '../../components/templates/Text';
import {Colors} from '../../themes';
import baseStyles from '../../themes/styles/base';
import {convertHex, UUID} from '../../utils/helper';
import {hp, wp} from '../../utils/screenResize';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';

import Header from '../../components/templates/Header';
import {getProducts} from '../../services/api/product';
import {IProduct} from '../../interfaces/product';
import ProductCard from '../../components/home/ProductCard';

const _SPACING = wp(4);

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch<AppDispatch>();
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
  
    const res = await getProducts(skip, limit);
    setData(res.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onLoadMoreData=async()=>{
    const currentSkip=skip+5;
    const res = await getProducts(currentSkip, limit);
    if(res.products.length!==0){
      const newData=data.concat(res.products);
      setData(newData);
      setSkip(skip + 5);
    }
   
  }

  const RenderFooter = () => {
    return loading ? (
      <View style={{alignSelf: 'center'}}>
        <ActivityIndicator size="large" color="#aaa"></ActivityIndicator>
      </View>
    ) : null;
  };


  return (
    <SafeAreaView style={[{flex: 1,backgroundColor:Colors.White}]}>
      <Header
        title={'HomeScreen'}
        titleStyle={{color: Colors.White}}
        style={{backgroundColor: Colors.Red}}
      />
      <View style={baseStyles.content}>
        <View style={{width: wp(95), marginTop: wp(5), alignSelf: 'center'}}>
          <Text
            type="Montserrat"
            size={wp(5)}
            style={{lineHeight: 21, fontWeight: '700'}}>
            Products
          </Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          initialNumToRender={7}
          keyExtractor={(item:IProduct) => UUID()}
          renderItem={({item}) => <ProductCard {...item} />}
          style={{padding: _SPACING}}
          onEndReached={onLoadMoreData}
          onEndReachedThreshold={0.5}
          ListFooterComponent={RenderFooter}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
