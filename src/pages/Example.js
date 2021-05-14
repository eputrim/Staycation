import React, { Component } from "react";

import InputNumber from "elements/Form/InputNumber";
import { render } from "@testing-library/react";

export default class Example extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div class="container">
        <div
          class="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div class="col-auto">
            <InputNumber
              max={30}
              isSuffixPlural
              suffix=" night"
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}
