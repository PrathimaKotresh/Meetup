import React, { Component } from "react";
import './Event.css';


class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
    return (
      <div className="event">
        <div className="event-overview">
          <p className="event-localTimeAndDate">
            {this.props.event.local_time} - {this.props.event.local_date}
          </p>
          {this.props.event.name && (
            <h3 className="event-name">
              {this.props.event.name}
            </h3>
          )}
          {this.props.event.group && this.props.event.group.name && (
            <p className="event-groupName">
              Group: {this.props.event.group.name}
            </p>
          )}
          {this.props.event.yes_rsvp_count && (
            <p className="event-expectedParticipants">
              {this.props.event.yes_rsvp_count} people are going
            </p>
          )}
          {this.state.showDetails && (
            <div className="eventDetails">
              {this.props.event.venue && this.props.event.venue.name && (
                <p className="event-address">
                  Venue: {this.props.event.venue.name}
                </p>
              )}
              {this.props.event.visibility && (
                <p className="event-visibility">
                  Event type: {this.props.event.visibility}
                </p>
              )}
              {this.props.event.description && (
                <div>
                  <h4 className="event-description-headline">Event Description:</h4>
                  <p className="event-description" dangerouslySetInnerHTML={{ __html: this.props.event.description }} />
                </div>
              )}
              {this.props.event.link && (
                <a className="event-link" href={this.props.event.link}>Event link</a>
              )}
            </div>
          )}
        </div>
        <div className="event-detailsButton-wrapper">
          <button className="event-detailsButton" onClick={() => this.handleShowDetails()}>
            {!this.state.showDetails ? 'Show Details' : 'Hide Details'}
          </button>
        </div>
      </div>
    );
  }
}
export default Event;