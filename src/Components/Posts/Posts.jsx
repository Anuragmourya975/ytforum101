import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { Row, Container, Spinner } from "react-bootstrap";

function Posts({setCurrentId}) {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <Spinner animation="border" />
  ) : (
    <Container >
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map((post) => (
          <Post key={post._id} post={post} setCurrentId={setCurrentId}/>
        ))}
      </Row>
    </Container>
  );
}

export default Posts;
