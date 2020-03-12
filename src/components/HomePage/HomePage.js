import React, { Component } from "react";
import "../../App.css";
import "./HomePage.css";
import axios from "axios";
import getAPI from "../../util/util";
import Card from "../Card/Card";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      pets: null
    };
  }

  //method to populate cards
  populateCards = () => {
    return this.state.pets
      .reverse()
      .map(petObject => (
        <Card className="card" {...petObject} key={petObject._id} />
      ));
  };
  componentDidMount() {
    if (!this.state.pets) {
      let url = `${getAPI()}pets/`;

      axios.get(url).then(res => {
        this.setState({ pets: res.data });
      });
    }
  }
  render() {
    if (this.state.pets) {
      return <div className="homepage__container">{this.populateCards()}</div>;
    } else {
      return (
        <div>This is our home page :) please wait while our pets load</div>
      );
    }
  }
}

export default HomePage;
