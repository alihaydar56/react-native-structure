import React, {useEffect, useState} from 'react';
import {StyleSheet, Switch, View} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from '../themes';

const SIZE = 90;

const themes = {
  light: {
    background: Colors.Red,
    text:Colors.White
  },
  dark: {
    background: Colors.DarkGrey,
    text:Colors.Green
  },
};

type Themes = 'dark' | 'light';

const InterpolateColorsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [theme, setTheme] = useState<Themes>('light');
  const themeValue = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  },[theme]);

  const animatedBgStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      themeValue.value,
      [0, 1],
      [themes.light.background, themes.dark.background],
    );
    return {
      backgroundColor: backgroundColor,
    };
  }, []);

  const animatedTextStyle=useAnimatedStyle(()=>{
    const textColor=interpolateColor(themeValue.value,[0,1],[themes.light.text,themes.dark.text])
    return{
       color:textColor
    }
  },[])

  return (
    <Animated.View style={[styles.container, animatedBgStyle]}>
      <Animated.Text style={[animatedTextStyle,{}]}>Hello World</Animated.Text>
      <Switch
        value={theme === 'dark'}
        onValueChange={toggled => {
          setTheme(toggled ? 'dark' : 'light');
        }}></Switch>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InterpolateColorsScreen;
