import axios from "axios";

export const GET_ALL_POSTS_START = "GET_ALL_POSTS_START";
export const GET_ALL_POSTS_SUCCESS = "GET_ALL_POSTS_SUCCESS";
export const GET_ALL_POSTS_FAIL = "GET_ALL_POSTS_FAIL";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_POSTS_START });
      const responce = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(responce.data);
      dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: responce.data });
    } catch (error) {
      dispatch({ type: GET_ALL_POSTS_FAIL, payload: error });
    }
  };
};
