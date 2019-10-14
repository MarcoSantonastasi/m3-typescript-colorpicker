import React, { Component } from "react";

export enum Dimension {
  width = "width",
  height = "height"
}

interface DimConfProps {
  dimension: Dimension;
}

export default class DimensionConfigurator extends Component<DimConfProps> {
  render() {
    return <p>I'm a {Dimension[this.props.dimension]} configurator</p>;
  }
}
