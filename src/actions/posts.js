
import { doGet } from "../util/server";
import { POSTS } from "../constants/posts";


export function getPosts(payload) {
  return async function(dispatch) {
    try{
      const res = await doGet('api/posts/getAllPosts?offset='+payload.offset+'&limit='+payload.limit)
        dispatch({type: POSTS, payload: res.res.posts})
        return res.res;
    }
    catch(err){
      throw err;
    }
  }
}

