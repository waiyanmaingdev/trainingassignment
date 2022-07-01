import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import EncryptedStorage from 'react-native-encrypted-storage';
//
import { ProviderContext } from "../context";

import AuthStack from "./stack/Auth/AuthStack";
import HomeStack from "./stack/Home/HomeStack";
import SplashScreen from '../pages/splash/SplashScreen'
import {retrieveUserSession}  from '../util'

const RootNavigator = () => {

    const [auth,setAuth] = useState(false);
    //const [reg , setReg] = useState(false);
    const [language, setLanguage] = useState('en');
    const [splashScreen, setSplashScreen] = useState(true);

    useEffect( () => {
        loadData();
    })
    
    const context = {
        language,
        auth,
        getAuth:value=>{
            setAuth(value);
        },
        getLanguage: value => {
            setLanguage(value);
        }
    }

    const loadData = async() =>{
        const appLang = await EncryptedStorage.getItem('useLanguage');
        const userData = await EncryptedStorage.getItem('userData');
        const authAccess = await EncryptedStorage.getItem('authKey');
        setTimeout(() => {
            setSplashScreen(false);
        }, 3000);
        if(userData && authAccess){
            setAuth(true);
            //setReg(true);
        }
        else if(userData && !authAccess){
            setAuth(false);
        }
        if(appLang){
            setLanguage(appLang);
        }else{ 
            setLanguage('en');
        }
        
    }

    if (splashScreen) {

        return (
            <SplashScreen />
        );

    }else if(auth){
        return (
            <ProviderContext.Provider value={context}>
                <NavigationContainer>
                    <HomeStack/>
                </NavigationContainer>
            </ProviderContext.Provider>
        )
    } else {
        return (
            <ProviderContext.Provider value={context}>
                <NavigationContainer>
                    <AuthStack />
                </NavigationContainer>
            </ProviderContext.Provider>
        )
    }


}

export default RootNavigator;