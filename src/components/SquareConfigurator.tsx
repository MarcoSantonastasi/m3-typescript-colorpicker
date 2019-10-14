import React, { Component } from "react";
import DimensionConfigurator, { Dimension } from "./DimensionConfigurator";
import { string } from "prop-types";

interface SqConfProps {}

interface SqConfState {
  width: number;
  height: number;
  [configuratorName: string]: number;
}

export default class SquareConfigurator extends Component<
  SqConfProps,
  SqConfState
> {
  state = { height: 100, width: 100 };

  handleOnChange(configuratorName: string, lengthValue: number): void {
    this.setState({ [configuratorName]: lengthValue });
  }

  render() {
    return (
      <div>
        <p>Hello I'm a square configurator</p>
        <DimensionConfigurator
          dimension={Dimension.width}
          length={this.state.width}
          onChangeCallback={this.handleOnChange.bind(this)}
        />
        <DimensionConfigurator
          dimension={Dimension.height}
          length={this.state.height}
          onChangeCallback={this.handleOnChange.bind(this)}
        />
        <div
          style={{
            height: `${this.state.height}px`,
            width: `${this.state.width}px`,
            backgroundColor: "red"
          }}
        >
          This is a square div
        </div>
      </div>
    );
  }
}
