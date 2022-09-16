import { StyleProp, TextInputProps, TextProps, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import { ColorTypes, FontTypes } from "../../../themes";

export interface IButton extends TouchableOpacityProps {
    title?: string;
    textStyle?: StyleProp<TextStyle>;
    textColor?: ColorTypes;
    textType?: FontTypes;
    color?: ColorTypes;
    icon?: React.ReactElement;
    shadow?: boolean;
    transparent?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
}

export interface IIconButton extends TouchableOpacityProps {
    icon: React.ReactElement;
    size: number;
}

export interface IText extends TextProps {
    type?: FontTypes;
    color?: ColorTypes;
    size?: number;
    children?: React.ReactElement | string | any;
    align?: 'center' | 'left' | 'right'
}

export interface IInput extends TextInputProps {
    type?: 'primary' | 'secondary';
    editable?: boolean;
    renderIcon?: JSX.Element;
    renderAction?: JSX.Element;
    containerStyle?: StyleProp<ViewStyle>;
    secure?:boolean
}