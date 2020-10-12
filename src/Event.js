import React, { Component } from "react";


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
        <p className="event-localTimeAndDate">
          {this.props.event.local_time}{this.props.event.local_date}
        </p>
        {this.props.event.name && (
          <h3 className="event-name">
            {this.props.event.name}
          </h3>
        )}
        {this.props.event.group && this.props.event.group.name && (
          <p className="event-groupName">
            {this.props.event.group.name}
          </p>
        )}
        {this.props.event.yes_rsvp_count && (
          <p className="event-expectedParticipants">
            {this.props.event.yes_rsvp_count} 'people are going'
          </p>
        )}
        { this.state.showDetails && (
          <div className="eventDetails">
            {this.props.event.venue && this.props.event.venue.name && (
              <p className="event-address">
                {this.props.event.venue.name}
              </p>
            )}
            {this.props.event.description && (
              <p className="event-description">
                {this.props.event.description}
              </p>
            )}
            {this.props.event.visibility && (
              <p className="event-visibility">
                {this.props.event.visibility}
              </p>
            )}
            {this.props.event.link && (
              <a className="event-link" href={this.props.event.link} >Event link</a>
            )}
          </div>
        )}
        <button className="event-detailsButton" onClick={() => this.handleShowDetails()}>Details</button>
      </div>
    );
  }
}
export default Event;