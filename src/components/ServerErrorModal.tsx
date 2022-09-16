import React from "react";
import { Modal, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../themes";
import { hp, wp } from "../utils/screenResize";
import { endError } from '../redux/loading/actions';
import { GreyClose } from "./Icons";
import { Text } from "./templates/Text";
import { IconButton } from "./templates/Button";
import { RootState } from "../redux/store";

export const ServerErrorModal = () => {
    const error = useSelector((state: RootState) => state.loadingReducer.error)
    const dispatch = useDispatch()
    
    const onClose = () => {
        dispatch(endError())
    }

    return (
        <Modal
            animationType="fade"
            transparent
            visible={!!error}>
            <TouchableOpacity onPress={onClose} style={{backgroundColor: 'black', opacity: 0.1, position: 'absolute', width: wp(100), height: hp(100)}} />
            <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
                <View
                    style={{
                        width: wp(90),
                        height: 'auto',
                        maxHeight: hp(50),
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        marginTop: wp(5),
                        overflow: 'hidden',
                        shadowColor: Colors.Black,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 2.84,
                        elevation: 2,
                        zIndex: 2000
                    }}>
                        <IconButton onPress={onClose} icon={GreyClose} size={wp(6)} style={{position: 'absolute', zIndex: 5000, right: wp(5), top: wp(5)}} />
                        <View style={{ padding: wp(6), paddingHorizontal: wp(7)}}>
                            <Text type="SemiBold" size={wp(4.7)} style={{marginBottom: wp(3)}}>{'Sorry'}</Text>
                            <ScrollView style={{marginVertical: wp(1)}}>
                                <Text size={wp(3.6)} style={{color: Colors.MainText}}>{error}</Text>
                            </ScrollView>
                        </View>
                </View>
            </SafeAreaView>
        </Modal>
    )
};