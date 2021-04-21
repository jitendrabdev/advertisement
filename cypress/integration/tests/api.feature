Feature: Add and Edit advertisement using API

    Feature Description: User can add and edit advertisement using API

Scenario: User should create new advertisement with valid data using API
    Given API to create advertisement
    When I provide all attribute to new advertisement API and run API
    |advertisementName|street |rooms|price|status|
    | advertisement4  |Street1| 23  | 12  | true |
    Then I see new advertisement created using API
    |advertisementName|street |rooms|price|status|
    | advertisement4  |Street1| 23  | 12  | true |
    
Scenario: User should edit advertisement created using API
    Given API to create advertisement
    When I modify any attribute using API and run API
    |advertisementName|street  |rooms|price|status|
    | advertisement4  |Street23| 24  | 22  | true |
    Then I see new advertisement created using API
    |advertisementName|street  |rooms|price|status|
    | advertisement4  |Street23| 24  | 22  | true |