import { NavigationAction, useNavigation } from '@react-navigation/native';
import React, { ReactElement } from 'react';
import { StyleProp, View,
    TouchableOpacity, 
    TextStyle} from 'react-native';
import { ViewStyle } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import baseStyles from '../../themes/styles/base';
import { IconButton } from './Button';
import BackIcon from '../BackIcon';
import { Text } from './Text';
import { wp } from '../../utils/screenResize';
import { BackWhite } from '../Icons';


interface Props {
    style?: StyleProp<ViewStyle>;
    title?: string | null;
    withBack?: boolean;
    leftComponent?: React.ReactElement;
    rightComponent?: React.ReactElement;
    drawer?: boolean;
    navigation?:any;
    onBackPress?: (() => void) | null;
}

const Header = (props: Props) => {
    const navigation = useNavigation();
   
    return (
        <View style={[baseStyles.header, props.style]}>
            <View style={baseStyles.headerLeft}>
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'space-evenly'}}>
                    {(props.leftComponent) || (props.withBack && <BackWhite onPress={props.onBackPress} />)}
                </View>
            </View>
            <Text type="Bold" style={[baseStyles.headerTitle]}>{props.title}</Text>
            <TouchableOpacity style={baseStyles.headerRight} onPress={()=>{}}>
                {props.rightComponent}
            </TouchableOpacity>
        </View>
    );
};

export default Header;