import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Menu/Home";
import Series from "./Menu/Series";
import Films from "./Menu/Films";
import Trending from "./Menu/Trending";
import MyList from "./Menu/MyList";
import History from "./Menu/History";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route path="/home" exact component={Home} />
          <Route path="/series" exact component={Series} />
          <Route path="/Films" exact component={Films} />
          <Route path="/Trending" exact component={Trending} />
          <Route path="/MyList" exact component={MyList} />
          <Route path="/History" exact component={History} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
