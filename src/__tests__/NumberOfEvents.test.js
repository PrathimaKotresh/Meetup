import React from "react";
import { shallow } from "enzyme";
import NumberofEvents from "../NumberofEvents";

describe("<NumberofEvents /> component", () => {
  let NumberofEventsWrapper;
  beforeAll(() => {
    NumberofEventsWrapper = shallow(<NumberofEvents />);
  });

  test("render textbox element", () => {
    expect(NumberofEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("show input label", () => {
    expect(NumberofEventsWrapper.find(".numberOfEvents-label")).toHaveLength(1);
  });

  test("check default value of input", () => {
    expect(NumberofEventsWrapper.find(".numberOfEvents-number")).toHaveLength(1);
  });

  test("check changing the value of number of events", () => {
    NumberofEventsWrapper.find(".numberOfEvents-number").simulate("change", {
      target: { value: 20 },
    });

    expect(NumberofEventsWrapper.state("numberOfEvents")).toBe(20);
  });

  test("check no error message", () => {
    expect(NumberofEventsWrapper.find(".errorMessage")).toHaveLength(0);
  });

  test("check error message", () => {
    NumberofEventsWrapper.find(".numberOfEvents-number").simulate("change", {
      target: { value: 0 },
    });
    expect(NumberofEventsWrapper.find(".errorMessage")).toHaveLength(1);
  });

});