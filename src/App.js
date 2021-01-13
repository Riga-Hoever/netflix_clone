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
import requests from "./components/requests/requests";




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
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}  isLargeRow={true} />
      <Row title="TopRated" fetchUrl={requests.fetchRomanceMovies} />,
      <Row title="Action Movies" fetchUrl ={requests.fetchActionMovies} />,
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />,
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true} />,
      <Row title="Documantaries" fetchUrl={requests.fetchDocumentaries} />,
      <FooterContainer />
    </div>
  );
}

export default App;
