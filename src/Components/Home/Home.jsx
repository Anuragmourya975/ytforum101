import React from "react";
import { getPosts } from "../../actions/posts";
import Posts from "../../Components/Posts/Posts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <br />
      <br />
      <br />
      <Posts />
    
    </div>
  );
}

export default Home;
