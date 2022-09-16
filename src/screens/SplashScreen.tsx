import React, {useEffect} from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';

import baseStyles from '../themes/styles/base';
import { hp, wp } from '../utils/screenResize';
import { AnadoluLogo } from '../components/Icons';
import { Text } from '../components/templates/Text';
import { Colors } from '../themes';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();

  // useEffect(() => {
  // //dispatch({type:CLEAR_DATA})
  //   setTimeout(async () => {
  //     if (true) {
  //       // if (isExpJwt(userToken)) {
  //       //     navigation.navigate('AuthStack')
  //       //     return;
  //       // }
  //       const data = true;
  //       if (data) {
  //         // getUser(userInformation.id)
  //         //   .then(data => {
  //         //     dispatch({type: SET_USER_DATA, payload: data.data});
  //         //   })
  //         //   .catch(err => {
  //         //     console.log('splash screen error :', err.message);
  //         //   });
  //         navigation.navigate('TabStack');
  //       } else {
  //         navigation.navigate('AuthStack');
  //       }
  //     } else {
  //       navigation.navigate('AuthStack');
  //     }
  //   }, 2000);
  // }, []);

  return (
    <View style={{ flex: 1, paddingHorizontal: wp(5), justifyContent: 'center', backgroundColor: Colors.Background }}>
            <View style={{ flex: 1, justifyContent: 'center',alignItems:'center' }}>
                <AnadoluLogo />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: wp(12), alignItems: 'center' }}>
                <Text type='ExtraBold' style={{ marginRight: wp(2), fontSize: wp(4)}}>{'Powered By İdeaBilisim'}</Text>
                {/* <ExtratikLogo /> */}
            </View>
        </View>
  );
};

export default SplashScreen;
