import React from "react";
// import Button from "react-bootstrap/Button";
import "./Navbar.css";
import Form101 from "./Form101";
import {
  Container,
  NavDropdown,
  Nav,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";

function Navbar101() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
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
        <div class="container-fluid">
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
        <Navbar.Brand href="#home">
          {" "}
          <img
            alt=""
            src="https://images.vexels.com/media/users/3/193251/isolated/lists/b23a8130b03eff475be26b2275ebfc19-covid-19-man-character-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
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
        <Form101 show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Navbar>
  );
}

export default Navbar101;
