import {
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  SET_POSTPERPAGE,
  SET_CURRENTPAGE,
  SET_SORTORDER,
  SET_SEARCH_TEXT,
} from "../Actions/actions";

const initialState = {
  loading: false,
  error: null,
  posts: [],
  post: {},
  comments: [],
  currentPage: 1,
  sortOrder: 0,
  postsPerPage: 8,
  searchText: "",
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
    case SET_POSTPERPAGE:
      return {
        ...state,
        postsPerPage: action.payload,
      };
    case SET_CURRENTPAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_SORTORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
