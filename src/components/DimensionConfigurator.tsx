import React, { Component } from "react";

class DimensionConfigurator extends Component<{
  dimension: "width" | "heigth";
}> {
  render() {
    return <p>I'm a {this.props.dimension} configurator</p>;
  }
}

export default DimensionConfigurator;
