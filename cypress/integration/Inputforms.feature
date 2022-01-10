Feature: Selemium Demo App

    Testing Input forms on the Selenium Demo Website

    Scenario: A user should be able to sum two numbers by inputting them into the fields
    Given I am on the Selenium Demo site
    When I click on the "popup close button"
    And I click on the "Start Practising button"
    And I click on the "Simple Form Demo button"
    And I insert value "a"
    And I insert value "b"
    And I click on the "Get Total button"
    Then I should get the total of the two numbers