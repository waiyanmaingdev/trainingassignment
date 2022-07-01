import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../../pages/home/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashboard" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack