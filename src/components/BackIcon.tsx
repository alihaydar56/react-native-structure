import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { wp } from './../utils/screenResize';
import { Back } from './Icons';
import { IconButton } from './templates/Button';

const BackIcon = ({ onPress }: { onPress?: (() => void) | null }) => {
    const navigation = useNavigation()
    return <IconButton onPress={onPress ? onPress : () => navigation.canGoBack() ? navigation.goBack() : null} icon={Back} size={wp(6)} />
}

export default React.memo(BackIcon)