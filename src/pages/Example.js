import React, { Component } from "react";

import { InputDate } from "elements/Form/index";
import { render } from "@testing-library/react";

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
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
            <InputDate
              max={30}
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
