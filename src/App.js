import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { InfoAlert } from './Alert';

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
        {!navigator.onLine && (
          <InfoAlert text="You are offline! Events list shown is loaded from cache. For up to date list connect to internet." />
        )}
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;