import React, {useRef} from 'react'
import {TextInput, View, TouchableOpacity} from 'react-native'
import { Colors, Fonts } from '../../themes'
import { convertHex } from '../../utils/helper'
import { hp, wp } from '../../utils/screenResize'
import { IInput } from './types'

export const Input = (props: IInput)=>{
    const myRef = useRef(null)
    let type = props.type || 'secondary'
    let isPrimary = type === 'primary'
    return (
        <TouchableOpacity
            onPress={() => myRef.current?.focus()}
            activeOpacity={1}
            style={[{
                marginVertical: isPrimary ? wp(2) : wp(3),
                borderBottomColor: Colors.DarkGrey,
                borderBottomWidth: isPrimary ? 1 : 0,
                paddingHorizontal: isPrimary ? 0 : wp(2),
                borderRadius: isPrimary ? 0 : 7,
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                alignSelf: 'center',
                minHeight: wp(12),
                paddingBottom: !props.multiline ? wp(1) : wp(3),
                backgroundColor: isPrimary ? 'transparent' : convertHex(Colors.Disabled, 40),
            }, props.containerStyle]}>
            {Boolean(props.renderIcon) && <View style={{marginHorizontal: wp(1)}}>{props.renderIcon}</View>}
            <TextInput
                placeholderTextColor={isPrimary ? Colors.Black : convertHex(Colors.DarkGrey, 60)}
                autoCorrect={false}
                ref={myRef}
                {...props}
                secureTextEntry={props.secure?true:false}
                style={[{paddingHorizontal: wp(2), color: Colors.MainText, fontFamily: Fonts.Regular, fontSize: wp(3.8),width:"100%"}, props.style]}
            />
            {Boolean(props.renderAction) && <View style={{marginHorizontal: wp(1)}}>{props.renderAction}</View>}
        </TouchableOpacity>
    )    
}