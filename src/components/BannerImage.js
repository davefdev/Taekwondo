import React, { Component } from "react";
import "./BannerImageStyles.css";

export class BannerImage extends Component {
  render() {
    return (
      <div className="banner-img">
        <div className="heading">
          <h1>{this.props.banner}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default BannerImage;
