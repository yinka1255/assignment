import { POSTS, POST } from "../constants/posts";

const initialState = {
    posts: false,
    post: false,
};

function postsReducer(state = initialState, action) {
    switch (action.type) {
    case POSTS: {
        return Object.assign({}, state, {
            posts: action.payload
        })
    }
    case POST: {
        return Object.assign({}, state, {
            post: action.payload
        })
    }
    default:
        return state
    }
}

export default postsReducer;