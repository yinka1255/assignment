import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, Pressable, ScrollView, ImageBackground } from 'react-native'
const {height, width} = Dimensions.get('window');
import Icon from "react-native-vector-icons/Ionicons";
import { colors, scale, } from '../util';
import { ReactNativeModal as Modal} from "react-native-modal";
import styles from "./Style";
import AutoHeightImage from "react-native-auto-height-image";

const AlertModal = ({
    visible,
    toggle,
    showInfoIcon,
    showErrorIcon,
    showSuccessIcon,
    title,
    body,
    onClickActionA,
    onClickActionB,
    onClickTextA,
    onClickTextB

}) =>  {

    
    return(
        <View>
            <Modal
                isVisible={visible}
                onBackdropPress={() => {
                    //toggle()
                }}
                height={'100%'}
                width={'100%'}
                style={styles.modal}
                // swipeDirection="down"
                // onSwipeComplete={()=> toggle()}
                animationIn={"fadeIn"}
                animationOut={"fadeOut"}
            >
                
                <View style={styles.alertBody}>
                    <Pressable onPress={()=> onClickAction()} style={styles.headerCol2}>
                        <Icon name={'close'} style={[styles.closeIcon, styles.mrt15]} size={30} onPress={toggle} />
                    </Pressable>
                    <ImageBackground  style={styles.bg} source={require('../assets/imgs/bg.png')} >
                        {showInfoIcon && <AutoHeightImage width={scale(55)} style={styles.alertIcon} source={require('../assets/imgs/info.png')} />}
                        {showErrorIcon && <AutoHeightImage width={scale(55)} style={styles.alertIcon} source={require('../assets/imgs/error.png')} />}
                        {showSuccessIcon && <AutoHeightImage width={scale(55)} style={styles.alertIcon} source={require('../assets/imgs/success.png')} />}
                        {title && <Text style={styles.alertText}>{title}</Text>}
                        {body && <Text style={styles.alertSubText}>{body}</Text>}
                    </ImageBackground>
                    <View style={styles.row}>
                            {onClickActionB && 
                                <Pressable onPress={()=> onClickActionB()}  style={[styles.alertButtonA, {width: "47%"}]}>
                                    <Text style={styles.alertButtonText}>{onClickTextB}</Text>
                                </Pressable>
                            }
                            <Pressable onPress={()=> onClickActionA()}  style={[styles.alertButton, {width: onClickActionB ? "47%" : "100%"} ]}>
                                <Text style={styles.alertButtonText}>{onClickTextA}</Text>
                            </Pressable>
                        </View>
                </View>
            </Modal>
        </View>
    )
}
export { AlertModal }