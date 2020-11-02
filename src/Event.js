import React, { Component } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';
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
    const showDetails = this.state.showDetails;
    const event = this.props.event;
    const date = new Date(new Date(event.local_date).toDateString());

    const rsvpLimit = event.rsvp_limit;
    const freeSlots = rsvpLimit - event.yes_rsvp_count;
    const rsvpData = [{ name: 'people coming', value: event.yes_rsvp_count }, { name: 'free slots', value: freeSlots }];
    const colors = ['#ED1C40', '#0555BB'];
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
              <div className="rsvp-chart">
                {rsvpLimit > 0 &&
                  <ResponsiveContainer height={250} width={300}>
                    <PieChart width={400} height={250}>
                      <Pie dataKey="value" startAngle={360} endAngle={0} data={rsvpData} cx={150} cy={100} fill="#8884d8" label>
                        {
                          rsvpData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                          ))
                        }
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" align="center" />
                    </PieChart>
                  </ResponsiveContainer>
                }
              </div>
              <div className="no-rsvp">
                {!rsvpLimit &&
                  <p className="no-rsvp-container">{event.yes_rsvp_count} people have RSVPd</p>
                }
              </div>
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