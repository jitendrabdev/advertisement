export function listAdvertisements(url, callback) {
  cy.request("GET", url).then(function (response) {
    if (typeof callback === "function") {
      if (response.status === 200) {
        callback(response);
      } else {
        let err = new Error(
          "Got error from Advertisement server with status code " +
            response.status
        );
        callback(null, err);
      }
    }
  });
}

export function createAdvertisements(
  url,
  name,
  street,
  rooms,
  price,
  status,
  callback
) {
  cy.request("POST", url, {
    name: name,
    street: street,
    rooms: rooms,
    price: price,
    status: status,
  }).then(function (response) {
    if (typeof callback === "function") {
      console.log("aaaa...");
      if (response.status === 200) {
        callback(response);
        console.log(response);
      } else {
        let err = new Error(
          "Got error from Advertisement server with status code " +
            response.status
        );
        callback(null, err);
      }
    }
  });
}

export function editAdvertisements(
  url,
  name,
  street,
  rooms,
  price,
  status,
  id,
  callback
) {
  cy.request("PUT", url, {
    _id: id,
    name: name,
    street: street,
    rooms: rooms,
    price: price,
    status: status,
  }).then(function (response) {
    if (typeof callback === "function") {
      if (response.status === 200) {
        callback(response);
      } else {
        let err = new Error(
          "Got error from Advertisement server with status code " +
            response.status
        );
        callback(null, err);
      }
    }
  });
}
