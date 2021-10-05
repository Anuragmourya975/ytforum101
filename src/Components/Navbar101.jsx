import React from "react";
// import Button from "react-bootstrap/Button";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import "./Navbar.css";
import Form101 from "./Form101";
import SidebarData from "./SideBarData"
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
  const [sidebarShow, setSidebarShow] = React.useState(false);
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg= "dark" variant="dark" fixed="top">
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
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png"
            width="45"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Form101 show={modalShow} onHide={() => setModalShow(false)} />

        <Navbar.Brand 
          href = "#home"
          style={{ cursor: "pointer" }}
        >
          <FaIcons.FaBars className = "menu-bar" onClick={() => setSidebarShow(!sidebarShow)}/>
          <nav className = {sidebarShow ? 'drawer-menu active' : 'drawer-menu'}>
            <ul className = "drawer-menu-items" onClick={() => setSidebarShow(!sidebarShow)}>
               <li className = "drawer-toggle">
                   <AiIcons.AiOutlineClose />
               </li>
               {SidebarData.map((item,index) =>{
                   return(
                       
                            <li key = {index} className = {item.cName}>
                                <img
                                    src={item.icons}
                                    width="30"
                                    height="30"
                                    className = "drawer-item-div"
                                />
                                <span className = "drawer-item-div">{item.title}</span>
                            </li>
                        
                   );
               })}
            </ul>     
          </nav>
        </Navbar.Brand>
       
      </Container>
    </Navbar>
    <br/>
    <br/>
    
    </>
  );
}

export default Navbar101;
// bg="dark"