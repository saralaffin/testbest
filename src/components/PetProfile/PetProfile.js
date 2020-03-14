import React, { Link, Component } from "react";
import PropTypes from "prop-types";
import getAPI from "../../util/util";
import Like from "../Like/Like";
import "./PetProfile.css";
import axios from "axios";
import Card from "../Card/Card";
import HomePage from "../HomePage/HomePage";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

let petUrl = `${getAPI()}pet/`;

class PetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petDetails: null,
      deleted: false,
      numberOfLikes: 0,
      liked: false
    };
    console.log(props);
  }
  clickHandle = () => {
    if (!this.state.liked) {
      const currentLikes = this.state.petDetails.numberOfLikes + 1;
      this.setState({
        liked: true,
        numberOfLikes: currentLikes
      });
      axios.put(`${getAPI()}pet/${this.state.petDetails._id}`, {
        numberOfLikes: currentLikes
      });
    }
  };
  deleteClickHandle = () => {
    axios.delete(`${petUrl}${this.props.match.params.id}`);
    this.setState({
      deleted: true
    });
  };
  componentDidMount() {
    if (!this.state.petDetails) {
      let url = `${petUrl}${this.props.match.params.id}`;
      axios.get(url).then(res => {
        this.setState({
          petDetails: res.data,
          numberOfLikes: res.data.numberOfLikes
        });
      });
    }
  }

  render() {
    if (this.state.petDetails && !this.state.deleted) {
      return (
        <div>
          <div className="pet__container">
            <div
              className="pet__container-image"
              style={{ backgroundImage: `url(${this.state.petDetails.image})` }}
            ></div>
            <div className="pet__container-caption">
              <span className="pet__container-username">
                @{this.state.petDetails.petName}:
              </span>{" "}
              {this.state.petDetails.caption}
            </div>
            <div className="pet__container-more-stats">
              <div className="pet__container-titles">Breed:</div>
              <div>{this.state.petDetails.breed}</div>
              <div className="pet__container-titles">Age: </div>
              <div>{this.state.petDetails.age}</div>
            </div>
            <div className="pet__container-links">
              <div className="pet-likes">
                <div className="pet__container-like">
                  <Like active={this.state.liked} onClick={this.clickHandle} />
                </div>
                <div>{this.state.numberOfLikes} Likes</div>
              </div>
              <div onClick={this.deleteClickHandle}>
                <DeleteForeverIcon />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Can't find this pet anymore :(</div>;
    }
  }
}

export default PetProfile;
