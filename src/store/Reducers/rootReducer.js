import {
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from "../Actions/actions";

const initialState = {
  loading: false,
  error: null,
  posts: [],
  post: {},
  comments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };
    case GET_ALL_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: [],
      };
    case GET_POST_START:
      return {
        ...state,
        loading: true,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    case GET_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
