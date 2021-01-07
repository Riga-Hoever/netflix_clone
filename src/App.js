import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FooterContainer } from "./components/container/footer_c";

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
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Series} />
          <Route path="/" exact component={Films} />
          <Route path="/" exact component={Trending} />
          <Route path="/" exact component={MyList} />
          <Route path="/" exact component={History} />
          <FooterContainer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
