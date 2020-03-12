import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import DogBreeds from "./components/DogBreeds/DogBreeds";
import CatBreeds from "./components/CatBreeds/CatBreeds";
import AddPet from "./components/AddPet/AddPet";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PetProfile from "./components/PetProfile/PetProfile";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main__container">
          <Route
            path="/"
            exact
            render={routerProps => <HomePage {...routerProps} />}
          />
          <Route
            path="/dogs"
            exact
            render={routerProps => <DogBreeds {...routerProps} />}
          />
          <Route
            path="/cats"
            exact
            render={routerProps => <CatBreeds {...routerProps} />}
          />
          <Route
            path="/addPet"
            exact
            render={routerProps => <AddPet {...routerProps} />}
          />
            <Route
            path="/pet/:id"
            exact
            render={routerProps => <PetProfile {...routerProps} />}
          />
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
