import EncryptedStorage from 'react-native-encrypted-storage';

export const storeUserSession = async (key, value) => {
    try {
        await EncryptedStorage.setItem(key, value)
        //console.log('success');
    } catch (error) {
        // There was an error on the native side
    }
}

export const retrieveUserSession = async (key) => {
    try {
        const session = await EncryptedStorage.getItem(key);

        if (session !== undefined) {
            
        }
    } catch (error) {
        // There was an error on the native side
    }
}

export const removeUserSession = async (key) => {
    try {
        await EncryptedStorage.removeItem(key);
        // Congrats! You've just removed your first value!
    } catch (error) {
        // There was an error on the native side
    }
}

