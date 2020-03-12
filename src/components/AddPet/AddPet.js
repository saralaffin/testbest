import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Form/Input/Input";
import Dropdown from "../Form/Dropdown/Dropdown";
import Button from "../Button/Button";
import getAPI from "../../util/util";
import axios from "axios";
import "../../App.css";
import "./AddPet.css";

class AddPet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catBreeds: [0, 1, 2],
      dogBreeds: [0, 1, 2],
      type: "",
      petName: "",
      age: 0,
      breed: "",
      image: "",
      caption: "",
      numberOfLikes: 0,
      submitted: false
    };
  }
  // define call back function to capture input
  getInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  inputComponenets = [
    <Input
      key="Name"
      label="Name"
      name="petName"
      type="small"
      placeholder="Name"
      onChange={this.getInput}
    />,
    <Input
      key="Caption"
      label="Caption"
      type="small"
      placeholder="Be creative! And pawsitive!"
      onChange={this.getInput}
      name="caption"
    />,
    <Input
      key="Image"
      label="Image URL"
      type="small"
      placeholder="Checkout imgur.com for hosting image files"
      onChange={this.getInput}
      name="image"
    />
  ];
  dropdownComponents = () => {
    return [
      <Dropdown
        key="Type"
        label="Type"
        options={["cat", "dog"]}
        type="gray"
        onChange={this.getInput}
        name="type"
      />,
      <Dropdown
        key="Breed"
        label="Breed"
        options={[...this.state.catBreeds, ...this.state.dogBreeds]}
        type="gray"
        onChange={this.getInput}
        name="breed"
      />,
      <Dropdown
        key="Age"
        label="Age"
        options={[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ]}
        type="gray"
        onChange={this.getInput}
        name="age"
      />
    ];
  };
  buttonComponent = (<Button label="Submit" type="default" />);
  onSubmit = e => {
    e.preventDefault();
    axios.post(`${getAPI()}pets`, {
      type: this.state.type,
      petName: this.state.petName,
      age: parseInt(this.state.age),
      breed: this.state.breed,
      image: this.state.image,
      caption: this.state.caption
    });
    this.setState({ submitted: true });
  };
  componentDidMount() {
    if (!this.state.breeds) {
      let urlCats = `${getAPI()}cats/`;
      axios.get(urlCats).then(breedObj => {
        let breedNames = breedObj.data.map(breedObj => breedObj.breedName);
        this.setState({ catBreeds: breedNames });
      });
      let urlDogs = `${getAPI()}dogs/`;
      axios.get(urlDogs).then(breedObj => {
        let breedNames = breedObj.data.map(breedObj => breedObj.breedName);
        this.setState({ dogBreeds: breedNames });
      });
    }
  }
  render() {
    if (!this.state.submitted) {
      return (
        <div className="Form__container">
          <Form
            onSubmit={this.onSubmit}
            inputComponenets={this.inputComponenets}
            dropdownComponents={this.dropdownComponents()}
            buttonComponent={this.buttonComponent}
          />
        </div>
      );
    } else {
      return (
        <div>
          Thanks for sumitting your pet!
          <Link to="/">Click here to go back to feed</Link>
        </div>
      );
    }
  }
}

export default AddPet;
