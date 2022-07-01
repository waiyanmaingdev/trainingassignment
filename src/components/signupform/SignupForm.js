import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/core'
//
import { switchLang } from '../../hook';

const SignupForm = props => {
    const navigation = useNavigation () ;
    const curLanguage = switchLang();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {curLanguage.registertext}
                </Text>
                <TextInput
                    placeholder={curLanguage.namePlaceholer}
                    keyboardType='default'
                    onChangeText={props.onChangeName}
                    style={styles.textboxStyle}
                />
                <TextInput
                    placeholder={curLanguage.emailPlaceholder}
                    keyboardType='email-address'
                    onChangeText={props.onChangeEmail}
                    style={styles.textboxStyle}
                />
                <TextInput
                    placeholder={curLanguage.pwdPlaceholder}
                    keyboardType='default'
                    onChangeText={props.onChangePassword}
                    secureTextEntry
                    style={styles.textboxStyle}
                />
                <TouchableOpacity style={styles.btnStyle} onPress={props.action}>
                    <Text style={styles.btntextStyle}>{curLanguage.btnregisterText}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.signinAction}>
                    <Text style={styles.createTextStyle}>{curLanguage.already}
                        <Text style={{ color: '#028fdd' }}> {curLanguage.logintext}</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignupForm