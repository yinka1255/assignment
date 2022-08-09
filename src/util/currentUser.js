
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUser = async () => {
    try {
        let data = await AsyncStorage.getItem("loggedInUser");
        return JSON.parse(data);
    } catch (error) {
        return error;
    }
};
export const getSafeUserData = async () => {
    try {
        let data = await AsyncStorage.getItem("safeUserData");
        return JSON.parse(data);
    } catch (error) {
        return error;
    }
};
export const getAuthStatus = async () => {
    try {
        let data = await AsyncStorage.getItem("authStatus");
        return data;
    } catch (error) {
        return error;
    }
};

//export default {getUser, getFirstTime} 