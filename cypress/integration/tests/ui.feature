Feature: Add and Edit advertisement

    Feature Description: User can add and edit advertisement
Background: Background name
    Given I navigate to advertisement page
    And I see advertisement page

Scenario: User should create new advertisement with valid data
    When I click on new advertisement button
    Then I see new advertisement page
    And I type all value of attributes
    |advertisementName|street |rooms|price|status|
    | advertisement1  |Street1| 23  | 12  | true |
    And I click on Save button
    Then I see advertisement added message
    And I verify that all attributes are correctly displayed
    |advertisementName|street |rooms|price|status|
    | advertisement1  |Street1| 23  | 12  | true |

  Scenario: User should edit advertisement created
    When I click on existing advertisement
    Then I see edit advertisement page
    When I modify any attribute
    |advertisementName|street |rooms|price|status|
    | advertisement2  |Street2| 24  | 13  | true |
    Then I see save button is enabled
    When I click on Save button
    Then I see advertisement added message
    And  I verify that all attributes are correctly displayed
    |advertisementName|street |rooms|price|status|
    | advertisement2  |Street2| 24  | 13  | true |


