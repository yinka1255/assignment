import { Platform, Dimensions, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export * from './colors';
export * from './scale'
export let isNotch = Platform.OS === 'android' ? true : DeviceInfo.hasNotch();
export const PLATFORM_IOS = Platform.OS === 'ios' ? true : false;
export const money = (amount) => {
    return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

export const showToast = (toast, message, type, placement) => {
    try{
        toast.show(message, {
            type,
            placement,
            duration: 4000,
            animationType: "slide-in",
            swipeEnabled:true
        });
    }catch(err){
       
    }
}