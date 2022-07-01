import { View, Text , TouchableOpacity } from 'react-native'
import React, { useState, useEffect ,useContext  } from 'react'
import EncryptedStorage from 'react-native-encrypted-storage';
import { ProviderContext } from '../../context';

import styles from './Style';

const HomeScreen = () => {
    const [data, setData] = useState('');

    const { getAuth } = useContext(ProviderContext);
    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const userData = await EncryptedStorage.getItem('userData');
        setData(JSON.parse(userData))
    }

    const logoutHandler = async () => {
        await EncryptedStorage.removeItem('authKey');
        getAuth(false);
        //getReg(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.showInfo}>
                <Text style={styles.nameText}>{data.userName}</Text>
                <Text style={styles.emailText}>
                    <Text style={styles.emailText}>Email : </Text>
                    {data.userEmail}
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnStyle} onPress={logoutHandler}>
                    <Text style={styles.btnText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen