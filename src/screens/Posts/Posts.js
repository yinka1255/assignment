import React, { useState, useEffect, useRef } from 'react';
import { POST } from '../../constants/posts';
import { View, Text, FlatList, RefreshControl, ActivityIndicator, Pressable, Dimensions, Alert } from 'react-native'

import FIcon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from 'react-redux';
import { Header, PostListItem, ListEmpty, PostFilterModal } from '../../components';
import FAB from 'react-native-fab'
import { colors, scale, money, showToast } from '../../util';
import { useToast } from "react-native-toast-notifications";

// actions
import { getPosts } from '../../actions/posts';
import styles from './Style';


const Posts = ({navigation}) => {
    const dispatch = useDispatch()
    const toast = useToast()
    const flatListRef = useRef();
    
    const [showLoading, setShowLoading] = useState()
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(15)
    const [posts, setPosts] = useState()
    const originalPosts = useSelector(state => state.postsReducer.posts)
    const [shouldConcat, setShouldConcat] = useState()
    const [userInit, setUserInit] = useState()
    const [refreshLoading, setRefreshLoading] = useState()
    
    
    useEffect(()=>{
        let payload = {
            offset,
            limit,
        }
        getPostsData(payload)
    }, [])
    
    useEffect(() => {
        const activeListener = navigation.addListener('willFocus', () => {
            let payload = {
                offset,
                limit,
            }
            getPostsData(payload)
            flatListRef.current && flatListRef.current.scrollToOffset({ offset: 0, animated: false });
        });
        return activeListener;
      }, []);

    
    useEffect(()=> {
        if(originalPosts){
            setUserInit(true)   
        }
    }, [originalPosts])

   
    useEffect(()=> {
        if(originalPosts){
            console.log(originalPosts.length, 'originalPosts.length')
            if(shouldConcat){
                let _posts = posts.concat(originalPosts)
                setPosts([..._posts])
            }else
            {
                setPosts(originalPosts)
            }
            setShouldConcat(false)
        }
    }, [originalPosts])


    const getPostsData = async (payload) => {
        try{
            setShowLoading(true)
            let res = await dispatch(getPosts(payload));
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
        }
        getPostsData(payload)
    }

    const refreshData = () => {
        setRefreshLoading(true)
        let payload = {
            offset: 0,
            limit,
        }
        getPostsData(payload)
    }

    const goToPostDetails = (_post) => {
        navigation.navigate("Post", {
            post: _post
        })
    }

    return (
        <View  style={styles.body}>
            <Header title={"Posts"} navigation={navigation} />
            <View style={styles.mt15}>
                {showLoading && <ActivityIndicator style={styles.pageLoading} size="small" color={colors.mainColor}   />}
                <FlatList
                    ref={(ref) => (flatListRef.current = ref)}
                    style={{  width: '100%', height: '100%' }}
                    data={posts}
                    refreshControl={<RefreshControl tintColor={colors.mainColor} refreshing={refreshLoading} onRefresh={()=> {refreshData()}} />}
                    keyExtractor={item => posts.indexOf(item).toString()}
                    ListEmptyComponent={!showLoading && <ListEmpty title={"No posts record"} description={"Your most recent posts will appear here once you start recording posts."} />}
                    renderItem={({ item, index }) => (
                    <PostListItem item={item} onClickAction={goToPostDetails} />
                    )}
                    onEndReached={({distanceFromEnd})=>{
                        if(distanceFromEnd > 1.5 && !showLoading){
                            posts.length % limit == 0 && getMoreData(limit, offset)
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


export default Posts;