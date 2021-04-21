/// <reference types="cypress" />

import {
  listAdvertisements,
  createAdvertisements,
  editAdvertisements,
} from "../../../APIObjects/APIObjects";

let url;
let id;

Given("API to create advertisement", () => {
  url = "/api/advertisements";
});

When(
  "I provide all attribute to new advertisement API and run API",
  (datatable) => {
    datatable.hashes().forEach((row) => {
      createAdvertisements(
        url,
        row.advertisementName,
        row.street,
        row.rooms,
        row.price,
        row.status,
        function (data, error) {
          if (error) {
            console.log(error);
          } else {
            id = data.body._id;
            expect(data.status).to.equal(200);
            expect(data.body.name).to.have.string(row.advertisementName);
            expect(data.body.street).to.have.string(row.street);
            expect(data.body.rooms).to.have.string(row.rooms);
            expect(data.body.price).to.have.string(row.price);
          }
        }
      );
    });
  }
);

Then("I see new advertisement created using API", (datatable) => {
  datatable.hashes().forEach((row) => {
    listAdvertisements(url, function (data, error) {
      if (error) {
        console.log(error);
      } else {
        expect(data.status).to.equal(200);
        for (let i = 0; i < data.body.length; i++) {
          if (data.body[i]._id == id) {
            expect(data.body[i].name).to.have.string(row.advertisementName);
          }
        }
      }
    });
  });
});

When("I modify any attribute using API and run API", (datatable) => {
  datatable.hashes().forEach((row) => {
    editAdvertisements(
      url + "/" + id,
      row.advertisementName,
      row.street,
      row.rooms,
      row.price,
      row.status,
      id,
      function (data, error) {
        if (error) {
          console.log(error);
        } else {
          expect(data.status).to.equal(200);
          expect(data.body).to.equal(1);
        }
      }
    );
  });
});
