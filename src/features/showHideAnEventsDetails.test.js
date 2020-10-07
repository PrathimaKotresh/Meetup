import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the app has loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user sees the list of events', () => {
      AppWrapper.update();
    });

    then('the event elements are collapsed by default', () => {
      expect(AppWrapper.find(".event .eventDetails")).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('the app has loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user clicks on the particular event Show Details button', () => {
      AppWrapper.update();
      AppWrapper.find(".event .event-detailsButton").at(0).simulate("click");
    });

    then('the event element expands to show event details', () => {
      expect(AppWrapper.find(".event .eventDetails")).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    given('the app has loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the user has expanded an event details', () => {
      AppWrapper.update();
      AppWrapper.find(".event .event-detailsButton").at(0).simulate("click");
      expect(AppWrapper.find(".event .eventDetails")).toHaveLength(1);
    });

    when('the user clicks on the Show Details button', () => {
      AppWrapper.update();
      AppWrapper.find(".event .event-detailsButton").at(0).simulate("click");
    });

    then('the event description collapses and its details are hidden', () => {
      expect(AppWrapper.find(".event .eventDetails")).toHaveLength(0);
    });
  });
});