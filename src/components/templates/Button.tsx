import React from 'react';
import { TouchableOpacity, View } from "react-native";
import { Colors } from '../../themes';
import { wp } from '../../utils/screenResize'
import { Text } from './Text';
import { IButton, IIconButton } from './types';

export const Button = (props: IButton) => {
    const SIcon: React.ReactElement = props.icon
    return (
        <View style={[(props.shadow && !props.disabled) ? {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            alignSelf: 'center'
        } : {}, props.containerStyle]}>
            <TouchableOpacity
                style={[{
                    marginVertical: wp(1),
                    elevation: 0,
                    width: '100%',
                    height: wp(12),
                    borderRadius: wp(100),
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderWidth: props.transparent ? 1.5 : 0,
                    borderColor: Colors.DarkGrey,
                    backgroundColor: props.transparent ? 'transparent' : props.disabled ? Colors.Disabled : Colors[props.color] || Colors.Primary,
                }, props.style]}
                disabled={props.disabled}
                onPress={props.onPress}>
                {Boolean(props.icon) && <View style={{ position: 'absolute', left: wp(5) }}><SIcon width={wp(5)} height={wp(5)} /></View>}
                <Text type={props.textType ? props.textType : 'SemiBold'} color={props.textColor ? props.textColor : props.transparent ? 'DarkGrey' : 'White'} style={[{ fontSize: wp(4), width: '100%', textAlign: 'center', alignSelf: 'center' }, props.textStyle]}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export const IconButton = (props: IIconButton) => {
    const SIcon: React.ReactElement = props.icon
    return (
        <TouchableOpacity
            {...props}
            style={props.style || {}}
            onPress={props.onPress}>
            {props.size ? <SIcon width={props.size} height={props.size} /> : SIcon}
        </TouchableOpacity>
    );
};