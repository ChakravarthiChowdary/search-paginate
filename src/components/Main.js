import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Posts from "../components/Posts";
import Navbar from "../components/Navbar";
import { getPosts } from "../store/Actions/actions";
import Paginate from "../components/Paginate";
import Footer from "../components/Footer";
import Error from "../components/Error";

const Main = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const posts = useSelector((state) => state.root.posts);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [sortOrder, setSortOrder] = useState(0);

  const error = useSelector((state) => state.root.error);

  const postsPerPageChangedHandler = (event) => {
    setPostsPerPage(event.target.value);
    setCurrentPage(1);
  };
  const sortOrderChangedHandler = (event) => {
    setSortOrder(event.target.value);
    setCurrentPage(1);
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
    setSearchText(event.target.value);
  };
  //Prev button clicked handler
  const prevClickedHandler = () => {
    setCurrentPage(currentPage - 1);
  };
  //Next button clicked handler
  const nextClickedHandler = () => {
    setCurrentPage(currentPage + 1);
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
