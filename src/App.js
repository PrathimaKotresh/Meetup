import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  state = { events: [], numberOfEvents: null };

  componentDidMount() {
    getEvents(null, null, this.state.numberOfEvents).then(
      events => this.setState({ events })
    );
  }

  updateEvents = (lat, lon, numberOfEvents) => {
    this.setState({ numberOfEvents })
    getEvents(lat, lon, numberOfEvents).then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;