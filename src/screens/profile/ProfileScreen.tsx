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
import {hp, wp} from '../../utils/screenResize';
import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../components/templates/Header';
import Avatar from '../../components/Avatar';
import images from '../../utils/images';




const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const route=useRoute();
  const user=route?.params?.user;

  return (
    <SafeAreaView style={[{flex: 1,backgroundColor:Colors.White}]}>
      <Header
        title={'User Detail'}
        withBack
        onBackPress={()=>navigation.goBack()}

      />
      <View style={baseStyles.content}>
      <ScrollView style={{ paddingHorizontal: wp(5) }}>
            <View style={{ width:wp(90),backgroundColor: Colors.Blue, paddingTop: wp(6), borderRadius: wp(4),marginVertical:hp(3) }}>
              <View style={{ alignSelf: 'center',alignItems:'center' }}>
                <View style={{ width: wp(30), height: wp(30), borderRadius: wp(100),alignItems:'center' }}>
                  <Avatar photoFile={user?.image}  />
                </View>
                <Text align='center' color='White' size={wp(4.5)} type='Montserrat'>{user?.firstName + ', ' + user?.lastName}</Text>
              </View>
              <View  style={styles.dataListItem}>
                <Text size={wp(4)} align='left' style={{width:'40%',fontWeight:'700'}} type='Montserrat' color='White'>{'Phone Number'}</Text>
                <Text color='White' size={wp(4)} align='right' style={{width:'60%'}} type='Montserrat'>{user?.phone}</Text>
              </View>
              <View  style={styles.dataListItem}>
                <Text size={wp(4)} align='left' style={{width:'30%',fontWeight:'700'}} type='Montserrat' color='White' >{'Gender'}</Text>
                <Text color='White' size={wp(4)} align='right' style={{width:'70%'}} type='Montserrat'>{user?.gender}</Text>
              </View>
              <View  style={styles.dataListItem}>
                <Text size={wp(4)} align='left' style={{width:'30%',fontWeight:'700'}} type='Montserrat' color='White'>{'Password'}</Text>
                <Text color='White' size={wp(4)} align='right' style={{width:'70%'}} type='Montserrat'>{user?.password}</Text>
              </View>
             
              <View  style={styles.dataListItem}>
                <Text size={wp(4)} align='left' style={{width:'30%',fontWeight:'700'}} type='Montserrat' color='White'>{'Blood Group'}</Text>
                <Text color='White' size={wp(4)} align='right' style={{width:'70%'}} type='Montserrat'>{user?.bloodGroup}</Text>
              </View>
              <View  style={styles.dataListItem}>
                <Text size={wp(4)} align='left' style={{width:'30%',fontWeight:'700'}} type='Montserrat' color='White'>{'Age'}</Text>
                <Text color='White' size={wp(4)} align='right' style={{width:'70%'}} type='Montserrat'>{user?.age}</Text>
              </View>
              <View  style={[styles.dataListItem,{borderBottomWidth:0}]}>
                <Text size={wp(4)} align='left' style={{width:'30%',fontWeight:'700'}} type='Montserrat' color='White'>{'Email'}</Text>
                <Text color='White' size={wp(4)} align='right' style={{width:'70%'}} type='Montserrat'>{user?.email}</Text>
              </View>
            </View>
          </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  dataListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(80),
    alignSelf: 'center',
    borderBottomColor: Colors.Disabled,
    borderBottomWidth: 1.1,
    paddingVertical: wp(3)
  },
});
