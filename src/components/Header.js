
import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native'
import FIcon from 'react-native-vector-icons/AntDesign'
import AutoHeightImage from "react-native-auto-height-image";
import { scale, colors } from "../util";
import styles from "./Style";

const Header = ({
    navigation,
    homeScreen,
    hasBackButton,
    RightComponent,
    submit,
    submitLoading,
    showFilter,
    onClickAction,
    showUserIcon,
    title,
    name,
    role
}) =>  {

   return (
        <View style={styles.header}>
            {hasBackButton &&
                <Pressable onPress={()=> navigation.goBack()} style={styles.headerCol0}>
                    <AutoHeightImage width={scale(5)} style={styles.backIcon} source={require('../assets/imgs/backChevron.png')} />
                    <Text style={styles.headerBackText}>Back</Text>
                </Pressable>
            }           
            {title &&
                <Pressable onPress={()=> submit ? submit() : null} disabled={submitLoading} style={styles._row}>
                    <Text style={styles.headerTitle}>{title}</Text>
                    {submitLoading && <ActivityIndicator style={styles.loading} size="small" color={colors.black}   /> }
                </Pressable>
            }
            {homeScreen &&
                <View style={styles.headerCol1}>
                    <Text style={styles.headerName}>{"Hi, "+name}</Text>
                    <Text style={styles.headerText}>{role}</Text>
                </View>
            }
            {showUserIcon ?
                <Pressable onPress={()=> navigation.navigate("Profile")} style={styles.headerCol2}>
                    <AutoHeightImage width={scale(35)} style={styles.avatar} source={require('../assets/imgs/avatar.png')} />
                </Pressable>
            :
                null
            }
            {showFilter &&
                <Pressable onPress={()=> onClickAction()} style={styles.headerCol0}>
                    <FIcon name={"filter"} color={colors.mainColor} size={scale(22)} style={styles.filterIcon} />
                </Pressable>
            }
         </View>
   )
}
export { Header }