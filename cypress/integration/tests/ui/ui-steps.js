/// <reference types="cypress" />
function generateRandom() {
  return Math.floor((Math.random() + 1) * 100);
}
let advertisement1 = "";

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
  cy.get('[ng-model="$ctrl.advertisement.name"]').should("be.visible");
  cy.get('[ng-model="$ctrl.advertisement.street"]').should("be.visible");
  cy.get('[ng-model="$ctrl.advertisement.rooms"]').should("be.visible");
  cy.get('[ng-model="$ctrl.advertisement.price"]').should("be.visible");
  cy.get(".md-container").should("be.visible");
  cy.get('[ng-click="$ctrl.cancel()"]').should("be.visible");
  //cy.get('[ng-disabled="$ctrl.disableSave"]').should("be.disabled");
});

And("I type all value of attributes", (datatable) => {
  datatable.hashes().forEach((row) => {
    cy.get('[ng-model="$ctrl.advertisement.name"]').type(row.advertisementName);
    advertisement1 = row.advertisementName;
    cy.get('[ng-model="$ctrl.advertisement.street"]').type(row.street);
    cy.get('[ng-model="$ctrl.advertisement.rooms"]').type(row.rooms);
    cy.get('[ng-model="$ctrl.advertisement.price"]').type(row.price);
  });
});

And("I click on Save button", () => {
  cy.get('[ng-disabled="$ctrl.disableSave"]').click();
});

Then("I see advertisement added message", () => {
  cy.get(".md-toast-text").should("be.visible").contains("Saved successful");
});

And("I verify that all attributes are correctly displayed", (datatable) => {
  cy.wait(2000);
  cy.contains(advertisement1).click();
  datatable.hashes().forEach((row) => {
    cy.get('[ng-model="$ctrl.advertisement.name"]').should(
      "contain.value",
      advertisement1
    );
    cy.get('[ng-model="$ctrl.advertisement.street"]').should(
      "contain.value",
      row.street
    );
    cy.get('[ng-model="$ctrl.advertisement.rooms"]').should(
      "contain.value",
      row.rooms
    );
    cy.get('[ng-model="$ctrl.advertisement.price"]').should(
      "contain.value",
      row.price
    );
  });
});

When("I click on existing advertisement", () => {
  cy.contains(advertisement1).click();
});

Then("I see edit advertisement page", () => {
  cy.url().should("include", "/edit");
});

When("I modify any attribute", (datatable) => {
  cy.get('[ng-model="$ctrl.advertisement.name"]').clear();
  cy.get('[ng-model="$ctrl.advertisement.street"').clear();
  cy.get('[ng-model="$ctrl.advertisement.rooms"]').clear();
  cy.get('[ng-model="$ctrl.advertisement.price"]').clear();
  datatable.hashes().forEach((row) => {
    cy.get('[ng-model="$ctrl.advertisement.name"]').type(row.advertisementName);
    advertisement1 = row.advertisementName;
    cy.get('[ng-model="$ctrl.advertisement.street"').type(row.street);
    cy.get('[ng-model="$ctrl.advertisement.rooms"]').type(row.rooms);
    cy.get('[ng-model="$ctrl.advertisement.price"]').type(row.price);
  });
});

Then("I see save button is enabled", () => {
  cy.get('[ng-disabled="$ctrl.disableSave"]').should("be.enabled");
});

When("I click on Save button", () => {
  cy.get('[ng-disabled="$ctrl.disableSave"]').click();
});

Then("I see advertisement added message", () => {
  cy.get(".md-toast-text").should("be.visible").contains("Saved successful");
});

When(
  "I provide {string}, {string}, {string}, {string}",
  (advertisementName, street, rooms, price) => {
    cy.get('[ng-model="$ctrl.advertisement.name"]').clear();
    cy.get('[ng-model="$ctrl.advertisement.street"').clear();
    cy.get('[ng-model="$ctrl.advertisement.rooms"]').clear();
    cy.get('[ng-model="$ctrl.advertisement.price"]').clear();
    if (advertisementName) {
      cy.get('[ng-model="$ctrl.advertisement.name"]').type(advertisementName);
    }
    cy.get('[ng-model="$ctrl.advertisement.street"').type(street);
    cy.get('[ng-model="$ctrl.advertisement.rooms"]').type(rooms);
    if (price) {
      cy.get('[ng-model="$ctrl.advertisement.price"]').type(price);
    }
  }
);

Then(
  "I see Error message for advertisement as {string} and for price as {string}",
  (advertisementError, priceError) => {
    if (advertisementError) {
      cy.get(
        ":nth-child(1) > .md-input-messages-animation > .md-input-message-animation"
      ).should("contain", advertisementError);
    }
    if (priceError) {
      cy.get(
        ":nth-child(4) > .md-input-messages-animation > .md-input-message-animation"
      ).should("contain", priceError);
    }
  }
);
And("I see Cancel button {string}", (cancelButton) => {
  cy.get('[ng-click="$ctrl.cancel()"]').should("be." + cancelButton);
});

And("I see Save button {string}", (saveButton) => {
  cy.get('[ng-disabled="$ctrl.disableSave"]').should("be." + saveButton);
  cy.get('[ng-click="$ctrl.cancel()"]').click();
  cy.get(".md-confirm-button").click();
});
