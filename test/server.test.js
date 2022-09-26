const { expect } = require("chai");
const http = require("http");
require("dotenv").config();

const PORT = process.env.PORT;

describe("HTTP handling", () => {
  // Call the api with valid bbox values. Response should be success.
  it("/api/osm?bbox=11.54,48.14,11.543,48.145 can be called", async () => {
    const reqOptions = {
      host: "localhost",
      port: PORT,
      path: "/api/osm?bbox=11.54,48.14,11.543,48.14",
    };
    const promise = new Promise((resolve, reject) => {
      http.get(reqOptions, (response) => {
        resolve(response);
      });
    });
    const response = await promise;
    expect(response.statusCode).to.equal(200);
  });

  // bbox query params are not passed. API should throw middleware error.
  it("/api/osm should reply with statuscode 500", async () => {
    const reqOptions = {
      host: "localhost",
      port: PORT,
      path: "/api/osm",
    };
    const promise = new Promise((resolve, reject) => {
      http.get(reqOptions, (response) => {
        resolve(response);
      });
    });
    const response = await promise;
    expect(response.statusCode).to.equal(500);
  });

  // bbox query params are passed with empty value. API should throw middleware error.
  it("/api/osm?bbox= should reply with statuscode 500", async () => {
    const reqOptions = {
      host: "localhost",
      port: PORT,
      path: "/api/osm?bbox=",
    };
    const promise = new Promise((resolve, reject) => {
      http.get(reqOptions, (response) => {
        resolve(response);
      });
    });
    const response = await promise;
    expect(response.statusCode).to.equal(500);
  });
});
