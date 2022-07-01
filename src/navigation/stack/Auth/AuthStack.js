import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../../pages/auth/Login/LoginScreen'
import RegisterScreen from '../../../pages/auth/Register/RegisterScreen'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        </Stack.Navigator>
    )
}

export default AuthStack