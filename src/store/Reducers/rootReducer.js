import {
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
} from "../Actions/actions";

const initialState = {
  loading: false,
  error: null,
  posts: [],
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
        posts: null,
      };
    default:
      return state;
  }
};

export default rootReducer;
