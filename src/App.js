import React from "react";
import "./App.css";
// import Navbar from "./Components/Navbar101";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar101 from "./Components/Navbar101";
// import Cards101 from "./Components/Cards101";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { Route, Switch } from "react-router";
// import CardDetails from "./Components/CardDetails";

import Auth from "./Components/Auth/Auth";
import Home from "./Components/Home/Home";
// import Comment from "./Components/Comment Section/Comment";
import Comment from "./Components/Comment Section/Comment"
import PostDetails from "./Components/Posts/Post/PostDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar101 />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>

        <Switch>
          <Route path="/auth" exact component={Auth} />
        </Switch>
        <Switch>
          <Route path="/comment-section" exact component={Comment} />
        </Switch>
        <Switch>
          <Route path="/postdetails" exact component={PostDetails} />
        </Switch>

        {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
