import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Navbar.css";
import Form101 from "./Form101";
import {
  Container,
  Navbar,
  OverlayTrigger,
  Tooltip,
  NavDropdown,
} from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
// import { Link } from "@mui/material";
import { useDispatch } from "react-redux";

function Navbar101() {
  const renderTooltip = (props) => <Tooltip {...props}>Add Channels</Tooltip>;
  const renderTooltip2 = (props) => <Tooltip {...props}>Profile</Tooltip>;
  const [modalShow, setModalShow] = React.useState(false);

  // authentication logic

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const Logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    //jwt...

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          {" "}
          <img
            alt=""
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          YoutubeForum
        </Navbar.Brand>
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search any channel..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary:hover"
              type="submit"
              style={{ color: "#55adee", borderColor: "#55adee" }}
            >
              Search
            </button>
          </form>
        </div>

        {user ? (
          <NavDropdown
            menuVariant="dark"
            title={
              <Navbar.Brand href="#home">
                <Avatar
                  sx={{ height: "35px", width: "35px" }}
                  alt={user.result.name}
                  src={user.result.imageUrl}
                >
                  {user.result.name.charAt(0)}
                </Avatar>
              </Navbar.Brand>
            }
          >
            <NavDropdown.Item>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "white" }}
                onClick={Logout}
              >
                Logout
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <NavDropdown
            menuVariant="dark"
            title={
              <Navbar.Brand href="#home">
                {" "}
                <img
                  alt=""
                  src="https://www.pngarts.com/files/3/Cool-Avatar-PNG-Image.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
              </Navbar.Brand>
            }
          >
            <NavDropdown.Item>
              <Link
                to="/auth"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        )}

        <OverlayTrigger
          placement="right"
          // delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Navbar.Brand
            onClick={() => setModalShow(true)}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
              width="45"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </OverlayTrigger>

        <Form101 show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Navbar>
  );
}

export default Navbar101;
