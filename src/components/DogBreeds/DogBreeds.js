import React, { Component } from "react";
import "../../App.css";
import "./DogBreeds.css";
import axios from "axios";
import getAPI from "../../util/util";

class DogBreeds extends Component {
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
          <div className="DogBreeds__info-title">
            {this.state.selectedBreed.breedName}
          </div>
          <div className="DogBreeds-grid">
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Adaptability: </span>
              {this.state.selectedBreed["Adaptability"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                All Around Friendliness:{" "}
              </span>
              {this.state.selectedBreed["All Around Friendliness"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Health Grooming: </span>
              {this.state.selectedBreed["Health Grooming"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Trainability: </span>
              {this.state.selectedBreed["Trainability"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Adapts Well to Apartment Living:{" "}
              </span>
              {this.state.selectedBreed["Adapts Well to Apartment Living"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Affectionate with Family:{" "}
              </span>
              {this.state.selectedBreed["Affectionate with Family"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Amount Of Shedding: </span>
              {this.state.selectedBreed["Amount Of Shedding"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Dog Friendly: </span>
              {this.state.selectedBreed["Dog Friendly"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Drooling Potential: </span>
              {this.state.selectedBreed["Drooling Potential"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Easy To Groom: </span>
              {this.state.selectedBreed["Easy To Groom"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Easy To Train: </span>
              {this.state.selectedBreed["Easy To Train"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Energy Level: </span>
              {this.state.selectedBreed["Energy Level"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Exercise Needs: </span>
              {this.state.selectedBreed["Exercise Needs"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Friendly Toward Strangers:{" "}
              </span>
              {this.state.selectedBreed["Friendly Toward Strangers"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">General Health: </span>
              {this.state.selectedBreed["General Health"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Good For Novice Owners:{" "}
              </span>
              {this.state.selectedBreed["Good For Novice Owners"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Incredibly Kid Friendly Dogs:{" "}
              </span>
              {this.state.selectedBreed["Incredibly Kid Friendly Dogs"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Intelligence: </span>
              {this.state.selectedBreed["Intelligence"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Intensity: </span>
              {this.state.selectedBreed["Intensity"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Potential For Mouthiness:{" "}
              </span>
              {this.state.selectedBreed["Potential For Mouthiness"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Potential For Playfulness:{" "}
              </span>
              {this.state.selectedBreed["Potential For Playfulness"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Potential For Weight Gain:{" "}
              </span>
              {this.state.selectedBreed["Potential For Weight Gain"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Prey Drive: </span>
              {this.state.selectedBreed["Prey Drive"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Sensitivity Level: </span>
              {this.state.selectedBreed["Sensitivity Level"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">Size: </span>
              {this.state.selectedBreed["Size"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Tendency To Bark Or Howl:{" "}
              </span>
              {this.state.selectedBreed["Tendency To Bark Or Howl"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Tolerates Being Alone:{" "}
              </span>
              {this.state.selectedBreed["Tolerates Being Alone"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Tolerates Cold Weather:{" "}
              </span>
              {this.state.selectedBreed["Tolerates Cold Weather"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Tolerates Hot Weather:{" "}
              </span>
              {this.state.selectedBreed["Tolerates Hot Weather"]}
            </div>
            <div className="DogBreeds__info-property">
              <span className="DogBreeds__info-key">
                Wanderlust Potential:{" "}
              </span>
              {this.state.selectedBreed["Wanderlust Potential"]}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="DogBreeds__container-loading">
          Please pick a breed on the list to the right to see info about that
          specific breed!
        </div>
      );
    }
  };

  clickHandle = e => {
    console.log(this.state.breeds);
    let DogObject = this.state.breeds.filter(el => {
      if (el.breedName === e.target.innerText) {
        return <div>HELLO</div>;
      }
    });
    this.setState({ selectedBreed: DogObject[0] });
    console.log(this.state.selectedBreed);
  };

  //method to populate cards
  populateBreeds = () => {
    return this.state.breeds.map(breedObject => (
      <div
        className="DogBreeds__breed"
        key={breedObject._id}
        onClick={this.clickHandle}
      >
        {breedObject.breedName}
      </div>
    ));
  };
  componentDidMount() {
    if (!this.state.breeds) {
      let url = `${getAPI()}dogs/`;
      axios.get(url).then(res => {
        this.setState({ breeds: res.data });
        console.log(res.data);
      });
    }
  }
  render() {
    if (this.state.breeds) {
      return (
        <div className="DogBreeds">
          <div className="DogBreeds___container">{this.populateBreeds()}</div>
          <div className="DogBreeds__info-container">{this.renderStats()}</div>
        </div>
      );
      // } else if (this.state.breeds && this.state.selectedBreed) {
      //   return (
      //     <div>
      //       <div className="DogBreeds___container">{this.populateBreeds()}</div>
      //       <div className="test">{this.state.selectedBreed[0].breedName}</div>
      //     </div>
      //   );
    } else {
      return <div>Loading!</div>;
    }
  }
}

export default DogBreeds;
