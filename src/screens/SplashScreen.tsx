import React, {useEffect} from 'react';
import { View} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {hp, wp} from '../utils/screenResize';
import {Logo} from '../components/Icons';
import {Text} from '../components/templates/Text';
import {Colors} from '../themes';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(async () => {
      navigation.navigate('HomeScreen');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: wp(5),
        justifyContent: 'center',
        backgroundColor: Colors.Background,
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Logo />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: wp(12),
          alignItems: 'center',
        }}>
        <Text type="ExtraBold" style={{marginRight: wp(2), fontSize: wp(4)}}>
          {'Powered By amir'}
        </Text>
        {/* <ExtratikLogo /> */}
      </View>
    </View>
  );
};

export default SplashScreen;
