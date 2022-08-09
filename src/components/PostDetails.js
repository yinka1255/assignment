
import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, Pressable } from 'react-native'
import FastImage from "react-native-fast-image";
const {height, width} = Dimensions.get('window');
import AutoHeightImage from "react-native-auto-height-image";
import { scale, money, colors} from "../util";
import styles from "./Style";
import moment from "moment";

const PostDetails = ({
   item
}) =>  {

   return (
    <Pressable  style={styles.postCardNoBorder}>
        <View style={styles.postContentA}>
            <View style={styles._row}>
                <Text style={styles.postNameFull}>{item.title}</Text>
            </View>
            <FastImage
                    style={[styles.postImage]}
                    source={{
                        uri: `${item.image}`,
                        priority: FastImage.priority.high,
                    }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            <Text style={styles.description}>{item.description} </Text>
            
            <View style={styles.postCardBottom}>
                <Text style={[styles.postQuantityA]}>{item.user} </Text>
                <Text style={styles.date}>{moment(item.createdAt).format('MMMM, DD YYYY H:M')}</Text>
            </View>
            
        </View>
    </Pressable>
   )
}
export { PostDetails }