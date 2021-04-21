/// <reference types="cypress" />

advertisement1 = "";

//generate a random number to create an advertisement,
//to be added with the initial String
function generateRandom() {
  return Math.floor((Math.random() + 1) * 10);
}

let advertisement1 = "ADD" + generateRandom();

Given("I navigate to advertisement page", () => {
  cy.visit("/");
});

And("I see advertisement page", () => {
  cy.get(".al-add__icon").should("exist");
});

When("I click on new advertisement button", () => {
  cy.get(".al-add__icon").click();
});

Then("I see new advertisement page", () => {
  cy.get(".md-subhead").should("be.visible").contains("Advertisement");
  cy.get("#input_0").should("be.visible");
  cy.get("#input_1").should("be.visible");
  cy.get("#input_2").should("be.visible");
  cy.get("#input_3").should("be.visible");
  cy.get(".md-container").should("be.visible");
  cy.get('[ng-click="$ctrl.cancel()"] > .ng-scope').should("be.visible");
  //cy.get('[ng-disabled="$ctrl.disableSave"] > .ng-scope').should("be.disabled");
});

And("I type all value of attributes", () => {
  cy.get("#input_0").type(advertisement1);
  cy.get("#input_1").type("test");
  cy.get("#input_2").type("12");
  cy.get("#input_3").type("1201");
});

And("I click on Save button", () => {
  cy.get('[ng-disabled="$ctrl.disableSave"] > .ng-scope').click();
});

Then("I see advertisement added message", () => {
  cy.get(".md-toast-text").should("be.visible").contains("Saved successful");
});

And("I verify that all attributes are correctly displayed", () => {
  cy.wait(2000);
  cy.contains(advertisement1).click();
  cy.get("#input_5").should("contain.value", advertisement1);
  cy.get("#input_6").should("contain.value", "test");
  cy.get("#input_7").should("contain.value", "12");
  cy.get("#input_8").should("contain.value", "1201");
});
