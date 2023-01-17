import React, { Component } from "react";
import Cards from "./Cards";

export class Videocontent extends Component {
  render() {
    return (
      <>
        <div style={{ color: "#ee9715" }}>Featured video</div>

        <Cards />
      </>
    );
  }
}

export default Videocontent;
