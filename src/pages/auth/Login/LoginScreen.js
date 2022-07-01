import { View, Text, Switch, ToastAndroid } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import EncryptedStorage from 'react-native-encrypted-storage';
//
import { ProviderContext } from '../../../context';
import { switchLang } from '../../../hook';


import LoginForm from '../../../components/loginform/LoginForm'
import SignupForm from '../../../components/signupform/SignupForm'
import styles from './Style';
import { storeUserSession } from '../../../util'

const LoginScreen = () => {
  //switch
  const [isEnabled, setIsEnabled] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [sessionData, setSessionData] = useState('');

  const [swithReg, setSwitchRegScreen] = useState(true);

  const { auth, getAuth, getLanguage } = useContext(ProviderContext);

  const lang = switchLang();



  useEffect(() => {
    checkToggle();
  }, [])

  const checkToggle = async () => {
    const localLang = await EncryptedStorage.getItem('useLanguage')
    if (localLang) {
      //console.log(localLang);
      if (localLang == 'mm') {
        setIsEnabled(true)
        getLanguage('mm');
      }
      else {
        setIsEnabled(false)
        getLanguage('en');
      }
    } else {
      //console.log('en');
      getLanguage('en')
    };
  }
  const changeLanguage = async () => {
    setIsEnabled(previousState => !previousState);
    if (isEnabled) {
      storeUserSession('useLanguage', 'en')
      getLanguage('en');
    }
    else {
      storeUserSession('useLanguage', 'mm')
      getLanguage('mm');
    }

  }

  const detectAction = () => {
    if (swithReg) {
      setSwitchRegScreen(false);
    } else {
      setSwitchRegScreen(true);
    }
  };

  const showToastWithGravityAndOffset = (text) => {
    ToastAndroid.showWithGravityAndOffset(
      text,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const signupHandler = async () => {
    const data = {
      userName: name,
      userEmail: email,
      userPwd: password,
    };
    if (data.userName == '' || data.userEmail == '' || data.userPwd == '') {
      showToastWithGravityAndOffset('Please Fill All Information');
    }
    else {
      storeUserSession('userData', JSON.stringify(data));
      storeUserSession('authKey', 'success');
      getAuth(true);
      showToastWithGravityAndOffset('Successfully Registered!');
    }

    // storeUserSession('userData', JSON.stringify(data));
    // storeUserSession('authKey', 'success');
    // getAuth(true);
    // //getReg(true);
    // showToastWithGravityAndOffset('Successfully Registered!');
  };

  const loginHandler = async () => {
    const getData = await EncryptedStorage.getItem('userData');
    let userdata = JSON.parse(getData);
    //console.log(userdata);
    if (userdata && userdata.userEmail == email && userdata.userPwd == password) {
      getAuth(true);
      storeUserSession('authKey', 'success');
      showToastWithGravityAndOffset('Login Success');
    } else {
      // getAuth(false);
      showToastWithGravityAndOffset('Username or Password is incorrect');
    }

  };



  return (
    <View>
      <View style={styles.langContainer}>
        <Text style={styles.lanTextAlign}>Eng</Text>
        <Switch
          trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f5dd4b"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={changeLanguage}
          value={isEnabled}
          style={styles.lanTextAlign}
        />
        <Text style={styles.lanTextAlign}>မြန်မာ</Text>
      </View>
      <View style={styles.maincontainer}>
        {swithReg ? (
          <LoginForm
            titleLogin={lang.logintext}
            buttonLoginText={lang.btnloginText}
            emailValue={email}
            passValue={password}
            onChangeEmail={val => setEmail(val)}
            onChangePassword={val => setPassword(val)}
            action={loginHandler}
            loginactionText={lang.logintext}
            signinAction={detectAction}
          />
        ) : (
          <SignupForm
            nameValue={name}
            emailValue={email}
            passValue={password}
            onChangeName={val => setName(val)}
            onChangeEmail={val => setEmail(val)}
            onChangePassword={val => setPassword(val)}
            action={signupHandler}
            signinAction={detectAction}
          />
        )}


      </View>
      <Text style={styles.infoText}> Developed By Wai Yan Maing</Text>
    </View>
  )
}

export default LoginScreen