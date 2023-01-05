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
} from 'react-native';

import {Text} from '../../components/templates/Text';
import {Colors} from '../../themes';
import baseStyles from '../../themes/styles/base';
import {convertHex, UUID} from '../../utils/helper';
import {hp, wp} from '../../utils/screenResize';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import axios from 'axios';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      await axios
        .get('https://dummyjson.com/users')
        .then(res => res.data)
        .then(res => {
          console.log('ressss .', res);
          setUsers(res?.users);
        });
    } catch (error) {
      console.log('error while fetch users');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={[{flex: 1}]}>
      {/* Header part */}
      <StatusBar backgroundColor={Colors.Blue} />
      <View style={baseStyles.content}>
        <View
          style={{
            width: wp(95),
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: wp(5),
            alignSelf: 'center',
          }}>
          <Text
            type="Montserrat"
            size={wp(5)}
            style={{lineHeight: 21, fontWeight: '700'}}>
            Users
          </Text>
        </View>

        <FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                width: wp(90),
                backgroundColor: Colors.White,
                paddingHorizontal: wp(3),
                paddingVertical: wp(2),
                borderRadius: 10,
                marginVertical: wp(2),
              }}
              onPress={()=>navigation.navigate('ProfileScreen',{user:item})}>
              <Text>
                {'name surname :' + item?.firstName + ', ' + item?.lastName}
              </Text>
              <Text>{'email :' + item?.email}</Text>
              <Text>{'gender :' + item?.gender}</Text>
              <Text>{'phone :' + item?.phone}</Text>
            </TouchableOpacity>
          )}
          style={[{marginBottom: hp(2)}]}
          contentContainerStyle={[
            {
              paddingTop: wp(2),
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            },
          ]}
          snapToInterval={Dimensions.get('window').width}
          ListEmptyComponent={() => (
            <View style={{justifyContent: 'center', alignSelf: 'center'}}>
              <Text>No Data</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
