import React, { Component } from "react";
import DimensionConfigurator from "./DimensionConfigurator";

export default class SquareConfigurator extends Component {
  render() {
    return (
      <div>
        <p>Hello I'm a square configurator</p>
        <DimensionConfigurator />
        <DimensionConfigurator />
      </div>
    );
  }
}
