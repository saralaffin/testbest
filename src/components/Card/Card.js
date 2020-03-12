import React, { Component } from "react";
import "../../App.css";
import "./Card.css";
import Like from "../Like/Like";
import Axios from "axios";
import getAPI from "../../util/util";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLikes: this.props.numberOfLikes || 0,
      liked: false
    };
  }
  clickHandle = () => {
    if (!this.state.liked) {
      const currentLikes = this.state.numberOfLikes + 1;
      this.setState({
        liked: true,
        numberOfLikes: currentLikes
      });
      Axios.put(`${getAPI()}pet/${this.props._id}`, {
        numberOfLikes: currentLikes
      });
    }
  };
  render() {
    return (
      <div>
        <div className="card__feed">
          <div className="card__container">
            <div
              className="card__container-image"
              style={{ backgroundImage: `url(${this.props.image})` }}
            ></div>
            <div className="card__container-caption">
              <span className="card__container-username">
                @{this.props.petName}:
              </span>{" "}
              {this.props.caption}
            </div>
            <div className="card__container-links">
              <div>
                <div className="card__container-like">
                  <Like active={this.state.liked} onClick={this.clickHandle} />
                </div>
                <span>{this.state.numberOfLikes} Likes</span>
              </div>
              <Link to={`/pet/${this.props._id}`} >
              <div className="card__container-more">See More Info</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
