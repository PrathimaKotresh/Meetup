import React, { Component } from 'react';
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: null
  };

  handleOnChange = (event) => {
    const value = event.target.value;
    if (value < 1) this.setState({ errorText: "Please enter a valid number" });
    else this.setState({ errorText: "" });
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <label className="numberOfEvents-label">Show number of Events</label>
        <input value={this.state.numberOfEvents} className="numberOfEvents-number" onChange={this.handleOnChange} />
        {this.state.errorMessage && <p className="errorMessage">{this.state.errorMessage}</p>}
      </div>
    );
  }
}

export default NumberOfEvents;