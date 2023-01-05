import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, KeyboardAvoidingView, Platform, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from '../../components/templates/Button';
import Header from '../../components/templates/Header';
import { Input } from '../../components/templates/Input';
import { Text } from '../../components/templates/Text';
import { Colors } from '../../themes';
import baseStyles from '../../themes/styles/base';
import { hp, wp } from '../../utils/screenResize';




const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading,setLoading]=useState<boolean>(false);
    const _onSubmitLoggin = async() => {

        console.log(username, password);
         navigation.navigate('HomeScreen');
    }


    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding', android: undefined })}>
            <SafeAreaView style={baseStyles.main}>
               <Header title={'Login'} />
                <View style={[baseStyles.content]}>

                    <View style={styles.cardContainer}>
                        <Text align='center' color='Blue' size={wp(5.5)} style={styles.cardTitle}>Login</Text>
                        <Input autoCapitalize={'none'} placeholder='Username' placeholderTextColor={Colors.Grey} containerStyle={{ width: '90%' }} value={username} onChangeText={setUsername} />
                        <Input  secure={true}  autoCapitalize={'none'}  placeholder='Password' placeholderTextColor={Colors.Grey} containerStyle={{ width: '90%' }} value={password} onChangeText={setPassword} />

                        <Button
                            title='Login'
                            color='Blue'
                            style={styles.loginButton}
                            textStyle={styles.loginButtonText}
                            disabled={username === '' || password === ''}
                            onPress={_onSubmitLoggin} />


                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
   

    cardContainer: { width: wp(90), alignSelf: 'center', backgroundColor: Colors.White, borderRadius: 20 },
    cardTitle: { fontWeight: '700', paddingVertical: hp(1.25) },
    loginButton: { borderRadius: 5, width: '80%', marginVertical: hp(3) },
    loginButtonText: { fontWeight: '700', fontSize: wp(5) },
})

export default LoginScreen;