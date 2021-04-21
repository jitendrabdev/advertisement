Feature: Add and Edit advertisement

    Feature Description: User can add and edit advertisement
Background: Background name
    Given I navigate to advertisement page
    And I see advertisement page

Scenario: User should create new advertisement with valid data
    When I click on new advertisement button
    Then I see new advertisement page
    And I type all value of attributes
    And I click on Save button
    Then I see advertisement added message
    And I verify that all attributes are correctly displayed

