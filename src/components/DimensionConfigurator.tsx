import React, { Component } from "react";

export enum Dimension {
  width = "width",
  height = "height"
}

interface IonChangeCallback {
  (configuratorName: string, lengthValue: number): void;
}

interface DimConfProps {
  dimension: Dimension;
  length: number;
  onChangeCallback: IonChangeCallback;
}

interface DimConfState {}

export default class DimensionConfigurator extends Component<
  DimConfProps,
  DimConfState
> {
  render() {
    return (
      <div>
        <label htmlFor="setLength">Set the leng of the div </label>
        <input
          type="number"
          name="setLength"
          id="setLength"
          min="0"
          max="500"
          step="25"
          value={this.props.length}
          onChange={e =>
            this.props.onChangeCallback(
              this.props.dimension,
              parseInt(e.target.value)
            )
          }
        />
        <br />

        <div
          style={{ width: `${this.props.length}px`, backgroundColor: "blue" }}
        >
          <p>
            I'm a {Dimension[this.props.dimension]} configurator of length{" "}
            {this.props.length}
          </p>{" "}
        </div>
      </div>
    );
  }
}
