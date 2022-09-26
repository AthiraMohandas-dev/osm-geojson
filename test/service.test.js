const { expect } = require("chai");
require("dotenv").config();
const { fetchAndConvertData } = require("../src/service/index");

describe("Get OSM data and convert to GeoJSON format", () => {
  // A valid bbox value is provided to the function.
  it("Should return geoJSON data when valid bbox is provided", async () => {
    const bbox = "11,48,11,48";
    const response = await fetchAndConvertData(bbox);
    expect(response).to.be.ok;
    expect(response).to.be.an("object");
  });

  // An invalid bbox value is provided to the function. The function should throw an error.
  it("Should return 400 error when invalid bbox is provided", async () => {
    const bbox = "11,48.1,11,48";
    try {
      const response = await fetchAndConvertData(bbox);
    } catch (error) {
      expect(error.message).to.equal(
        "AxiosError: Request failed with status code 400"
      );
    }
  });
});
