import axios from "axios";
//action types to get all posts
export const GET_ALL_POSTS_START = "GET_ALL_POSTS_START";
export const GET_ALL_POSTS_SUCCESS = "GET_ALL_POSTS_SUCCESS";
export const GET_ALL_POSTS_FAIL = "GET_ALL_POSTS_FAIL";
//action types to get user clicked post
export const GET_POST_START = "GET_POST_START";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAIL = "GET_POST_FAIL";
//actio types to set postsPerPage, sortOrder, currentPage
export const SET_POSTPERPAGE = "SET_POSTPERPAGE";
export const SET_SORTORDER = "SET_SORTORDER";
export const SET_CURRENTPAGE = "SET_CURRENTPAGE";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_POSTS_START });
      const responce = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: responce.data });
    } catch (error) {
      dispatch({ type: GET_ALL_POSTS_FAIL, payload: error });
    }
  };
};

export const getPost = (postId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_POST_START });
      const post = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const comments = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      dispatch({
        type: GET_POST_SUCCESS,
        payload: { post: post.data, comments: comments.data },
      });
    } catch (error) {
      dispatch({ type: GET_POST_FAIL, payload: error });
    }
  };
};
