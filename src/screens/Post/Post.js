import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, RefreshControl, ActivityIndicator } from 'react-native'
import FastImage from 'react-native-fast-image';
import FIcon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from 'react-redux';
import { Header, PostListItem, ListEmpty, PostFilterModal } from '../../components';
import FAB from 'react-native-fab'
import { colors, scale, money, showToast } from '../../util';
import { useToast } from "react-native-toast-notifications";
import { PostDetails } from '../../components';

// actions
import { getComments } from '../../actions/comments';
import styles from './Style';
import { ScrollView } from 'react-native-gesture-handler';


const Post = ({navigation}) => {
    const dispatch = useDispatch()
    const toast = useToast()
    const flatListRef = useRef();
    
    const [showLoading, setShowLoading] = useState()
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const [comments, setComments] = useState()
    const originalComments = useSelector(state => state.commentsReducer.comments)
    const [shouldConcat, setShouldConcat] = useState()
    const [userInit, setUserInit] = useState()
    const [refreshLoading, setRefreshLoading] = useState()
    const post = navigation?.state?.params?.post
    
    
    useEffect(()=>{
        if(post){
            let payload = {
                offset,
                limit,
                postId: post.id
            }
            getCommentsData(payload)
            const activeListener = navigation.addListener('willFocus', () => {
                let payload = {
                    offset,
                    limit,
                    postId: post.id
                }
                getCommentsData(payload)
                flatListRef.current && flatListRef.current.scrollToOffset({ offset: 0, animated: false });
            });
            return activeListener;
        }
    }, [post])
    
    // useEffect(() => {
    //     const activeListener = navigation.addListener('willFocus', () => {
    //         let payload = {
    //             offset,
    //             limit,
    //         }
    //         getCommentsData(payload)
    //     });
    //     return () => activeListener.remove();
    //   }, [post]);

    
    useEffect(()=> {
        if(originalComments){
            console.log(originalComments.length, 'originalComments.length')
            setUserInit(true) 
            if(shouldConcat){
                let _comments = comments.concat(originalComments)
                setComments([..._comments])
            }else
            {
                setComments(originalComments)
            }
            setShouldConcat(false)  
        }
    }, [originalComments])

    const getCommentsData = async (payload) => {
        try{
            setShowLoading(true)
            let res = await dispatch(getComments(payload));
            setShowLoading(false)
            setRefreshLoading(false)
        }
        catch(err){
            console.log(err, 'err')
            setShowLoading(false)
            setRefreshLoading(false)
            showToast(toast, err.message, "error", "top")
        }
    }

    const getMoreData = async () => {
        setShouldConcat(true)
        let _offset = parseFloat(offset) + limit
        setOffset(_offset)
        let payload = {
            offset: _offset,
            limit,
            postId: post.id
        }
        getCommentsData(payload)
    }

    const refreshData = () => {
        setRefreshLoading(true)
        let payload = {
            offset: 0,
            limit,
        }
        getCommentsData(payload)
    }

    

    return (
        <View  style={styles.body}>
            <Header title={"Post Details"} hasBackButton navigation={navigation} />
                <View style={styles.mt15}>
                    
                    
                    {showLoading && <ActivityIndicator style={styles.pageLoading} size="small" color={colors.mainColor}   />}
                    <FlatList
                        ListHeaderComponent={<PostDetails item={post}  />}
                        ref={(ref) => (flatListRef.current = ref)}
                        style={{  width: '100%', height: '100%' }}
                        data={comments}
                        refreshControl={<RefreshControl tintColor={colors.mainColor} refreshing={refreshLoading} onRefresh={()=> {refreshData()}} />}
                        keyExtractor={item => comments.indexOf(item).toString()}
                        ListEmptyComponent={!showLoading && <ListEmpty style={{marginTop: scale(-10), width: '100%', marginBottom: scale(50)}} title={"No comments"} description={"Your most recent comments will appear here once you start recording Comments."} />}
                        renderItem={({ item, index }) => (
                        <PostListItem item={item}  />
                        )}
                        onEndReached={({distanceFromEnd})=>{
                            if(distanceFromEnd > 0.5 && !showLoading){
                                comments.length % limit == 0 && getMoreData(limit, offset)
                            }
                        }}
                        onEndReachedThreshold={0.5}
                
                    showsVerticalScrollIndicator={false}
                />
                </View>
                <View style={styles.fab}>
                    <FAB buttonColor={colors.mainColor} iconTextColor={colors.white} onClickAction={() => {showToast(toast, "This is out of the scope of this application.", "error", "top")}} visible={true} iconTextComponent={<FIcon name="plus"/>} />
                </View>
        </View>
    );
}


export default Post;