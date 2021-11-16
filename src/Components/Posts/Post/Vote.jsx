import React from "react";
import { useReducer } from "react";
// import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
// import { FiLink } from "react-icons/bs";

import {
  ChevronDoubleDown,
  ChevronDoubleUp,
  // ArrowDown,
  ChatRightDots,
  // Capslock,
  Link45deg,
} from "react-bootstrap-icons";

import { Tooltip, OverlayTrigger } from "react-bootstrap";

// up vote down-vote functionality

const HANDLE_LIKE = Symbol("HANDLE_LIKE");
const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");

const initialState = {
  likes: 0,
  dislikes: 0,
  active: null,
};

const reducer = (state, action) => {
  const { likes, dislikes, active } = state;

  switch (action.type) {
    case HANDLE_LIKE:
      return {
        ...state,
        likes: state.likes + 1,
        dislikes: active === "dislike" ? dislikes - 1 : dislikes,
        active: "like",
      };

    case HANDLE_DISLIKE:
      return {
        ...state,
        likes: active === "like" ? likes - 1 : likes,
        active: "dislike",
        dislikes: dislikes + 1,
      };

    default:
      return state;
  }
};

function Vote() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { likes, dislikes, active } = state;

  const renderTooltip = (props) => (
    <Tooltip id="Upvote " {...props}>
      {likes} UpVotes
    </Tooltip>
  );
  const renderTooltip2 = (props) => (
    <Tooltip id="Downvote " {...props}>
      {dislikes} DownVotes
    </Tooltip>
  );

  const renderTooltip3 = (props) => (
    <Tooltip id="Comments" {...props}>
      Comments Section
    </Tooltip>
  );

  const renderTooltip4 = (props) => (
    <Tooltip id="Watch Now" {...props}>
      Watch Now
    </Tooltip>
  );

  return (
    <div className="d-flex justify-content-evenly">
      <OverlayTrigger
        placement="top"
        // delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <ChevronDoubleUp
          className="Icons"
          onClick={() =>
            active !== "like" ? dispatch({ type: HANDLE_LIKE }) : null
          }
        />
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        // delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip2}
      >
        <ChevronDoubleDown
          className="Icons"
          onClick={() =>
            active !== "dislike" ? dispatch({ type: HANDLE_DISLIKE }) : null
          }
        />
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        // delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip3}
      >
        <Link
          to="/comment-section"
          style={{ textDecoration: "none", color: "#43464a", display: "flex" }}
        >
          <ChatRightDots className="Icons" />
        </Link>
      </OverlayTrigger>

      <OverlayTrigger
        placement="top"
        // delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip4}
      >
        <Link45deg className="Icons" />
      </OverlayTrigger>
    </div>
  );
}

export default Vote;
