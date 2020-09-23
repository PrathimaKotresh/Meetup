import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    const event = {
      "created": 1598455112000,
      "duration": 3600000,
      "id": "272823360",
      "name": "Integration von Design & Tech: Wie man erfolgreich Produkte auf den Markt bringt",
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1600938000000,
      "local_date": "2020-09-24",
      "local_time": "11:00",
      "updated": 1598525710000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 41,
      "venue": {
        "id": 26906060,
        "name": "Online event",
        "repinned": false,
        "country": "",
        "localized_country_name": ""
      },
      "is_online_event": true,
      "group": {
        "created": 1413448074000,
        "name": "ThoughtWorks Munich",
        "id": 17658472,
        "join_mode": "open",
        "lat": 48.13999938964844,
        "lon": 11.579999923706055,
        "urlname": "ThoughtWorks-Muenchen",
        "who": "Mitglieder",
        "localized_location": "München, Germany",
        "state": "",
        "country": "de",
        "region": "en_US",
        "timezone": "Europe/Berlin"
      },
      "link": "https://www.meetup.com/ThoughtWorks-Muenchen/events/272823360/",
      "description": "description",
      "visibility": "public",
      "member_pay_fee": false
    }
    EventWrapper = shallow(<Event event={event} />);
  });

  test('render Event wrapping div', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event elements', () => {
    expect(EventWrapper.find('.event-localTimeAndDate')).toHaveLength(1);
    expect(EventWrapper.find('.event-name')).toHaveLength(1);
    expect(EventWrapper.find('.event-groupName')).toHaveLength(1);
    expect(EventWrapper.find('.event-expectedParticipants')).toHaveLength(1);
    expect(EventWrapper.find('.event-detailsButton')).toHaveLength(1);
  });

  test('extra info on clicking Detail button', () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find(".event-detailsButton").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
    expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
    expect(EventWrapper.find('.event-address')).toHaveLength(1);
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
    expect(EventWrapper.find('.event-visibility')).toHaveLength(1);
    expect(EventWrapper.find('.event-link')).toHaveLength(1);
  });

  test('render event details element', () => {
    EventWrapper.setState({
      showDetails: true,
    });
    expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
    expect(EventWrapper.find('.event-address')).toHaveLength(1);
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
    expect(EventWrapper.find('.event-visibility')).toHaveLength(1);
    expect(EventWrapper.find('.event-link')).toHaveLength(1);
  });

  test('overview only info on clicking Detail button', () => {
    EventWrapper.setState({
      showDetails: true,
    });
    EventWrapper.find(".event-detailsButton").simulate("click");
    expect(EventWrapper.find('.event-localTimeAndDate')).toHaveLength(1);
    expect(EventWrapper.find('.event-name')).toHaveLength(1);
    expect(EventWrapper.find('.event-groupName')).toHaveLength(1);
    expect(EventWrapper.find('.event-expectedParticipants')).toHaveLength(1);
    expect(EventWrapper.find('.event-detailsButton')).toHaveLength(1);
    expect(EventWrapper.find('.eventDetails')).toHaveLength(0);
    expect(EventWrapper.find('.event-address')).toHaveLength(0);
    expect(EventWrapper.find('.event-description')).toHaveLength(0);
    expect(EventWrapper.find('.event-visibility')).toHaveLength(0);
    expect(EventWrapper.find('.event-link')).toHaveLength(0);
  });

});