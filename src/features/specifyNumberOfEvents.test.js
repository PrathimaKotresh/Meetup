import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('user hasn\'t specified the number of events to show', () => {

    });

    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user sees 32 upcoming events by default', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    when('user changes the number of events to show', () => {
      AppWrapper.find(".numberOfEvents-number").simulate("change", {
        target: { value: 30 },
      });
    });

    then('the user sees the number of events specified', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(30);
    });
  });
});