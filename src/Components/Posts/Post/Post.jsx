import React from "react";
import { Col, Card } from "react-bootstrap";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import "./Post.css";
import Vote from "./Vote";
import moment from "moment";
// import { MdOutlineMoreVert } from "react-icons";
import { BsThreeDotsVertical, BsFillTrashFill } from "react-icons/bs";

function Post({ post }) {
  const renderTooltip = (props) => (
    <Tooltip id="Card added" {...props}>
      <Card.Text
      // style={{
      //   color: "white",
      //   textAlign: "left",
      // }}
      >
        Channel added {moment(post.createdAt).fromNow()}
      </Card.Text>
    </Tooltip>
  );
  return (
    <Col>
      <Card>
        <Card.Header className="text-muted" style={{ display: "none" }}>
          {post.tags.map((tag) => `#${tag} `)}
        </Card.Header>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/postdetails"
        >
          <Card.Img variant="top" src={post.selectedFile} />

          <Card.ImgOverlay>
            <Card.Title style={{ color: "white", textAlign: "left" }}>
              <BsFillTrashFill
                style={{ cursor: "pointer" }}
                onClick={() => {}}
              />
            </Card.Title>
            <Card.Title
              style={{
                color: "white",
                position: "absolute",
                right: "16px",
                top: "14px",
              }}
            >
              <BsThreeDotsVertical
                style={{ cursor: "pointer" }}
                onClick={() => {}}
              />
            </Card.Title>
          </Card.ImgOverlay>
        </Link>
      </Card>

      <Card>
        <Card.Body>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/postdetails"
          >
            <Card.Title>{post.creator}</Card.Title>
            <Card.Text>{post.message}</Card.Text>
          </Link>
          <hr />
          <Vote />
        </Card.Body>
        <Card.Footer>
          <OverlayTrigger
            placement="right"
            // delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <small className="text-muted">
              Shoutout to <u>{post.title}</u>
            </small>
          </OverlayTrigger>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default Post;
