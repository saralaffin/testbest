import React, { Component } from "react";
import "../../App.css";
import "./HomePage.css";
import axios from "axios";
import getAPI from "../../util/util";
import Card from "../Card/Card";
import UpdateIcon from "@material-ui/icons/Update";
import HistoryIcon from "@material-ui/icons/History";
import StarsIcon from "@material-ui/icons/Stars";

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      pets: null,
      petsSorted: null,
      sortMethod: null
    };
  }

  //method to populate cards
  populateCards = () => {
    let returnedCards;
    switch (this.state.sortMethod) {
      case "oldestToNewest":
        returnedCards = this.state.pets
          .slice()
          .reverse()
          .map(petObject => (
            <Card className="card" {...petObject} key={petObject._id} />
          ));
        break;
      case "mostLikes":
        let url = `${getAPI()}pets/`;

        axios
          .get(url)
          .then(res => {
            this.setState({
              pets: res.data.reverse()
            });
          })
          .then(
            (returnedCards = this.state.pets
              .slice()
              .sort((objA, objB) => objB.numberOfLikes - objA.numberOfLikes)
              .map(petObject => (
                <Card className="card" {...petObject} key={petObject._id} />
              )))
          );
        break;
      default:
        returnedCards = this.state.pets.map(petObject => (
          <Card className="card" {...petObject} key={petObject._id} />
        ));
    }
    return returnedCards;
  };
  clickHandleNewest = () => {
    this.setState({
      sortMethod: "default"
    });
  };
  clickHandleOldest = () => {
    this.setState({
      sortMethod: "oldestToNewest"
    });
  };
  clickHandleLiked = () => {
    this.setState({
      sortMethod: "mostLikes"
    });
  };
  componentDidMount() {
    if (!this.state.pets) {
      let url = `${getAPI()}pets/`;

      axios.get(url).then(res => {
        this.setState({
          pets: res.data.reverse()
        });
      });
    }
  }
  render() {
    if (this.state.pets) {
      return (
        <div className="homepage__container">
          <div className="homepage__sort-icons">
            <div onClick={this.clickHandleNewest}>
              <UpdateIcon />
              <span>Newest posts</span>
            </div>
            <div onClick={this.clickHandleOldest}>
              <HistoryIcon />
              <span>Oldest posts</span>
            </div>
            <div onClick={this.clickHandleLiked}>
              <StarsIcon />
              <span>Most liked posts</span>
            </div>
          </div>
          {this.populateCards()}
        </div>
      );
    } else {
      return (
        <div>This is our home page :) please wait while our pets load</div>
      );
    }
  }
}

export default HomePage;
