import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from "@react-navigation/native";

//

import { switchLang } from '../../hook';

const LoginForm = props => {

    const curLanguage = switchLang();

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                {props.titleLogin}
            </Text>

            <TextInput
                placeholder={curLanguage.namePlaceholer}
                keyboardType='default'
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
                <Text style={styles.btntextStyle}>{props.buttonLoginText}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.signinAction}>
                <Text style={styles.createTextStyle}>{curLanguage.noAccount}
                    <Text style={{ color: '#028fdd' }}> {curLanguage.registertext}</Text>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginForm