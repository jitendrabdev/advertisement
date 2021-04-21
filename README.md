# Advertisement
# The automations is for advertisement create and edit which has two components :-
  1.  Frontend - Consists of two functionalities 'add advertisement' and 'add advertisement'
  2.  Backend - Consists of two functionalities 'add advertisement' and 'add advertisement'

The automation scripts use cypress + cucumber approach. Follwoing dependencies have been used -
    "cypress": "^7.1.0"
    "cypress-cucumber-preprocessor": "^4.0.3"
    
The project consists of two feature files -
  1.  ui.feature :- Consists of Create new advertisement, Edit any existing advertisement and attribute validation using UI
  2.  api.feature :- Consists of Create new advertisement and Edit any existing advertisement using API

Global configurations are stored in the cypress.json file which dependencies are configured in package.json file.

TestCases.xlsx
The file consists of two sheets -
  TestCase - contains the manual test cases for the demo website.
  Defects_obervation - contains defects/obervation found in the website.
  
#**Execution**:
The project setup steps :- 
  1.  Clone the project using url :- https://github.com/jitendrabdev/advertisement.git
  2.  Navigate to advertisement folder and open the new terminal.
  3.  Run command as "npm install cypress"
  4.  Run command as "npm install cypress-cucumber-preprocessor"
  5.  To execute testcases using following commands:
      a.  "npm run test" (To run execution without cypress UI interface).
      b.  "npm run cypress"(To run execution with cypress UI interface)
