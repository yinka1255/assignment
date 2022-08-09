
import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, Pressable } from 'react-native'
const {height, width} = Dimensions.get('window');
import AutoHeightImage from "react-native-auto-height-image";
import { scale, money, colors} from "../util";
import styles from "./Style";
import moment from "moment";

const PostListItem = ({
   item,
   onClickAction
}) =>  {

   return (
    <Pressable onPress={()=> onClickAction ? onClickAction(item) : null} style={styles.postCard}>
        <View style={styles.postContentA}>
            <View style={styles._row}>
                <Text style={styles.postNameT} numberOfLines={1} ellipsizeMode={'middle'}>{item.title}</Text>
            </View>
            <Text style={[styles.postQuantityA]}>{item.user} </Text>
            <View style={styles.postCardBottom}>
                <Text style={styles.clientName} numberOfLines={1} ellipsizeMode={'tail'}>{item.description} </Text>
                <Text style={styles.date}>{moment(item.createdAt).format('MMMM, DD YYYY H:M')}</Text>
            </View>
        </View>
    </Pressable>
   )
}
export { PostListItem }