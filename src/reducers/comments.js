import { COMMENTS, COMMENT } from "../constants/comments";

const initialState = {
    comments: false,
    comment: false,
};

function commentsReducer(state = initialState, action) {
    switch (action.type) {
    case COMMENTS: {
        return Object.assign({}, state, {
            comments: action.payload
        })
    }
    case COMMENT: {
        return Object.assign({}, state, {
            comment: action.payload
        })
    }
    default:
        return state
    }
}

export default commentsReducer;