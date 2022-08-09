
import { doGet } from "../util/server";
import { COMMENTS } from "../constants/comments";


export function getComments(payload) {
  return async function(dispatch) {
    try{
      const res = await doGet('api/comments/getAllComments?postId='+payload.postId+'&offset='+payload.offset+'&limit='+payload.limit)
      dispatch({type: COMMENTS, payload: res.res.comments})
      return res.res;
    }
    catch(err){
      throw err;
    }
  }
}

