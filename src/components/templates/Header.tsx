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
import { Back, Menu } from '../Icons';
import { wp } from '../../utils/screenResize';


interface Props {
    style?: StyleProp<ViewStyle>;
    title?: string | null;
    withBack?: boolean;
    leftComponent?: React.ReactElement;
    rightComponent?: React.ReactElement;
    drawer?: boolean;
    navigation?:any;
    titleStyle?: StyleProp<TextStyle>;
    onBackPress?: (() => void) | null;
}

const Header = (props: Props) => {
    const navigation = useNavigation();
   
    return (
        <View style={[baseStyles.header, props.style]}>
            <View style={baseStyles.headerLeft}>
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent:'space-evenly'}}>
                    {props.drawer && <IconButton icon={Menu} size={wp(6)} style={{marginRight: wp(2)}} onPress={()=>{navigation.dispatch(DrawerActions.openDrawer());}} />}
                    {(props.leftComponent) || (props.withBack && <BackIcon onPress={props.onBackPress} />)}
                </View>
            </View>
            <Text type="Bold" style={[baseStyles.headerTitle,props.titleStyle]}>{props.title}</Text>
            <TouchableOpacity style={baseStyles.headerRight} onPress={()=>console.log("hey")}>
                {props.rightComponent}
            </TouchableOpacity>
        </View>
    );
};

export default Header;