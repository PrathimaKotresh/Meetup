Feature: Specify the number of events to be shown

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given user hasn't specified the number of events to show
    When the user opens the app
    Then the user sees 32 upcoming events by default

  Scenario: User can change the number of events they want to see
    Given user opens the app
    When user changes the number of events to show
    Then the user sees the number of events specified