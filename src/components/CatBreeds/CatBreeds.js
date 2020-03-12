import React, { Component } from "react";
import "../../App.css";
import "./CatBreeds.css";
import axios from "axios";
import getAPI from "../../util/util";

class CatBreeds extends Component {
  constructor() {
    super();

    this.state = {
      breeds: null,
      selectedBreed: null
    };
  }
  renderStats = () => {
    if (this.state.selectedBreed) {
      return (
        <div>
          <div className="CatBreeds__info-title">
            {this.state.selectedBreed.breedName}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">
              Affectionate with Family:{" "}
            </span>
            {this.state.selectedBreed["Affectionate with Family"]}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">Amount of Shedding: </span>
            {this.state.selectedBreed["Amount of Shedding"]}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">Easy to Groom: </span>
            {this.state.selectedBreed["Easy to Groom"]}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">
              Friendly Toward Strangers:
            </span>
            {this.state.selectedBreed["Friendly Toward Strangers"]}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">Intelligence: </span>
            {this.state.selectedBreed.Intelligence}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">General Health:</span>
            {this.state.selectedBreed["General Health"]}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">Kid Friendly: </span>
            {this.state.selectedBreed["Kid Friendly"]}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">Pet Friendly: </span>
            {this.state.selectedBreed["Pet Friendly"]}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">
              Potential for Playfulness:{" "}
            </span>
            {this.state.selectedBreed["Potential for Playfulness"]}
          </div>
          <div className="CatBreeds__info-property">
            <span className="CatBreeds__info-key">Tendency to Vocalize: </span>
            {this.state.selectedBreed["Tendency to Vocalize"]}
          </div>
        </div>
      );
    } else {
      return (
        <div className="CatBreeds__container-loading">
          Please pick a breed on the list to the right to see info about that
          specific breed!
        </div>
      );
    }
  };

  clickHandle = e => {
    console.log(this.state.breeds);
    let catObject = this.state.breeds.filter(el => {
      if (el.breedName === e.target.innerText) {
        return <div>HELLO</div>;
      }
    });
    this.setState({ selectedBreed: catObject[0] });
    console.log(this.state.selectedBreed);
  };

  //method to populate cards
  populateBreeds = () => {
    return this.state.breeds.map(breedObject => (
      <div
        className="CatBreeds__breed"
        key={breedObject._id}
        onClick={this.clickHandle}
      >
        {breedObject.breedName}
      </div>
    ));
  };
  componentDidMount() {
    if (!this.state.breeds) {
      let url = `${getAPI()}cats/`;
      axios.get(url).then(res => {
        this.setState({ breeds: res.data });
        console.log(res.data);
      });
    }
  }
  render() {
    if (this.state.breeds) {
      return (
        <div>
          <div className="CatBreeds___container">{this.populateBreeds()}</div>
          <div className="CatBreeds__info-container">{this.renderStats()}</div>
        </div>
      );
      // } else if (this.state.breeds && this.state.selectedBreed) {
      //   return (
      //     <div>
      //       <div className="CatBreeds___container">{this.populateBreeds()}</div>
      //       <div className="test">{this.state.selectedBreed[0].breedName}</div>
      //     </div>
      //   );
    } else {
      return <div>Loading!</div>;
    }
  }
}

export default CatBreeds;
