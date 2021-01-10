import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { FooterContainer } from "./footer/container/footer";
import Navbar from "./Navbar";
import Home from "./Menu/Home";
import Series from "./Menu/Series";
import Films from "./Menu/Films";
import Trending from "./Menu/Trending";
import MyList from "./Menu/MyList";
import History from "./Menu/History";
import Row from "./components/Rows/Row";
import Banner from "./components/Banner/Banner";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Navbar />
          <Banner/>

          <Route path="/" exact component={Home} />
          <Route path="/" exact component={Series} />
          <Route path="/" exact component={Films} />
          <Route path="/" exact component={Trending} />
          <Route path="/" exact component={MyList} />
          <Route path="/" exact component={History} />
        </Switch>
      </Router>
      <Row title="NETFLIX ORIGINALS" />
      {/* plaats achter titel fetchUrl={request.fetchTrending} isLargeRow*/}
      <Row title="Trending Now" />
      <Row title="TopRated" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
      <Row title="Romance" />
      <Row title="Documantaries" />
      <FooterContainer />
    </div>
  );
}

export default App;
