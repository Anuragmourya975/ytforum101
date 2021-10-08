import "./App.css";
import Navbar from "./Components/Navbar101";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar101 from "./Components/Navbar101";
import Cards101 from "./Components/Cards101";
import { Route, Switch, } from "react-router";
import CardDetails from "./Components/CardDetails";

function App() {
  return (
    <div className="App">
      <Navbar101 />
      <br />
      <br />
      <br />
      <Switch>
        <Route path="/" exact component={Cards101}/>
        <Route path = "/carddetails" component = {CardDetails}/>
      </Switch>
    
    </div>
  );
}

export default App;
