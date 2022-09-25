const axios = require("axios");
const osmtogeojson = require("osmtogeojson");
require("dotenv").config();

const apiUri = process.env.API_URI;

exports.fetchAndConvertData = async (bbox) => {
    try {
    const osmData = await axios.get(`${apiUri}?bbox=${bbox}`);
    const geoJsonData = osmtogeojson(osmData.data);
    return geoJsonData;
  } catch (error) {
    throw new Error(error);
  }
};
