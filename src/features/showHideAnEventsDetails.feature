Feature: Show or hide an events details

  Scenario: An event element is collapsed by default
    Given the app has loaded
    When the user sees the list of events
    Then the event elements are collapsed by default

  Scenario: User can expand an event to see its details
    Given the app has loaded
    When the user clicks on the particular event Show Details button
    Then the event element expands to show event details

  Scenario: User can collapse an event to hide its details
    Given the app has loaded
    And the user has expanded an event details
    When the user clicks on the Show Details button
    Then the event description collapses and its details are hidden