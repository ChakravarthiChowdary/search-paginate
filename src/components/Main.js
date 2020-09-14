import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Posts from "../components/Posts";
import Navbar from "../components/Navbar";
import {
  getPosts,
  SET_CURRENTPAGE,
  SET_SORTORDER,
  SET_POSTPERPAGE,
  SET_SEARCH_TEXT,
} from "../store/Actions/actions";
import Paginate from "../components/Paginate";
import Footer from "../components/Footer";
import Error from "../components/Error";

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.root.posts);
  const sortOrder = useSelector((state) => state.root.sortOrder);
  const postsPerPage = useSelector((state) => state.root.postsPerPage);
  const currentPage = useSelector((state) => state.root.currentPage);
  const searchText = useSelector((state) => state.root.searchText);

  const error = useSelector((state) => state.root.error);

  const postsPerPageChangedHandler = (event) => {
    dispatch({ type: SET_POSTPERPAGE, payload: event.target.value });
    dispatch({ type: SET_CURRENTPAGE, payload: 1 });
  };
  const sortOrderChangedHandler = (event) => {
    dispatch({ type: SET_SORTORDER, payload: event.target.value });
    dispatch({ type: SET_CURRENTPAGE, payload: 1 });
  };

  if (sortOrder === 0) {
    posts.sort((a, b) => {
      return a.id > b.id ? 1 : -1;
    });
  } else {
    posts.sort((a, b) => {
      return a.id > b.id ? -1 : 1;
    });
  }

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchText.toLowerCase());
  });

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  //Search value changed handler
  const searchChangedHandler = (event) => {
    dispatch({ type: SET_SEARCH_TEXT, payload: event.target.value });
  };
  //Prev button clicked handler
  const prevClickedHandler = () => {
    dispatch({ type: SET_CURRENTPAGE, payload: currentPage - 1 });
  };
  //Next button clicked handler
  const nextClickedHandler = () => {
    dispatch({ type: SET_CURRENTPAGE, payload: currentPage + 1 });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  if (error) {
    return (
      <Error
        error={error}
        tryAgainClickedHandler={() => dispatch(getPosts())}
      />
    );
  }

  return (
    <Fragment>
      <Navbar
        searchChangedHandler={searchChangedHandler}
        sortOrderChangedHandler={sortOrderChangedHandler}
        postsPerPageChangedHandler={postsPerPageChangedHandler}
        postsPerPage={postsPerPage}
        sortOrder={sortOrder}
      />
      <Posts posts={currentPosts} />
      <Paginate
        totalPosts={filteredPosts.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        prevClickedHandler={prevClickedHandler}
        nextClickedHandler={nextClickedHandler}
      />
      <Footer />
    </Fragment>
  );
};

export default Main;
