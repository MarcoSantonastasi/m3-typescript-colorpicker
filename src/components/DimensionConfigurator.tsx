import React, { Component } from "react";

export enum Dimension {
  width = "width",
  height = "height"
}

interface DimConfProps {
  dimension: Dimension;
  length: number;
}

interface DimConfState {}

export default class DimensionConfigurator extends Component<
  DimConfProps,
  DimConfState
> {
  render() {
    return (
      <div style={{ width: `${this.props.length}px`, backgroundColor: "blue" }}>
        <p>
          I'm a {Dimension[this.props.dimension]} configurator of length{" "}
          {this.props.length}
        </p>
      </div>
    );
  }
}
