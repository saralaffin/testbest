import React, { Component } from "react";
import "../../App.css";
import "./Card.css";
import "../Button/Button.css";
import Like from "../Like/Like";
import Button from "../Button/Button";
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
      <div className="card__background">
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
              <div className="card-likes">
                <div className="card__container-like">
                  <Like active={this.state.liked} onClick={this.clickHandle} />
                </div>
                <div>{this.state.numberOfLikes} Likes</div>
              </div>
              <Link
                to={{
                  pathname: `/pet/${this.props._id}`,
                  state: {
                    petDetails: this.props
                  }
                }}
              >
                <Button label="See Post" type="lprimshad" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
