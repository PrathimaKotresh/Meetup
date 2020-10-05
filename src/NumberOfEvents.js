import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorMessage: null
  };

  handleOnChange = (event) => {
    const value = event.target.value;
    if (value < 1) {
      this.setState({
        errorMessage: "Please enter vaid number",
        numberOfEvents: null
      })
    }
    else {
      this.setState({
        errorMessage: null,
        numberOfEvents: value
      })
    }
    this.props.updateEvents(null, null, value);
  }

  render() {
    return (
      <div className="numberOfEvents">
        <label className="numberOfEvents-label">Show number of Events</label>
        <input value={this.state.numberOfEvents} className="numberOfEvents-number" onChange={this.handleOnChange} />
        {this.state.errorMessage && <p className="errorMessage">{this.state.errorMessage}</p>}
      </div>
    );
  }
}

export default NumberOfEvents;