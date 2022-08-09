
import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions } from 'react-native'
const {height, width} = Dimensions.get('window');
import AutoHeightImage from "react-native-auto-height-image";
import { scale } from "../util";
import styles from "./Style";

const ListEmpty = ({title, description, style}) =>  {

   return (
    <View style={[style ? style : styles.listEmptyFull, ]}>
         <AutoHeightImage width={scale(width*0.25)} style={styles.noDataImage} source={require('../assets/imgs/noData.png')} />
         <Text style={styles.noDataText}>{title} </Text>
         <Text style={styles.noDataText1}>{description} </Text>
    </View>
   )
}
export { ListEmpty }