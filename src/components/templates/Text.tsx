import React from 'react'
import {Text as RNText} from 'react-native'
import { Colors, Fonts } from '../../themes'
import { IText } from './types'

export const Text = (props: IText)=>{
    return <RNText {...props} style={[{textAlign: props.align || 'left', color: props.color ? Colors[props.color] : Colors.MainText, fontSize: props.size}, props.style, {fontFamily: props.type ? Fonts[props.type] : Fonts.Regular}]}>
        {props.children}
    </RNText>
}