import React, { Component } from "react";
import DimensionConfigurator, { Dimension } from "./DimensionConfigurator";

export default class SquareConfigurator extends Component {
  render() {
    return (
      <div>
        <p>Hello I'm a square configurator</p>
        <DimensionConfigurator dimension={Dimension.width} length={350} />
        <DimensionConfigurator dimension={Dimension.height} length={490} />
      </div>
    );
  }
}
