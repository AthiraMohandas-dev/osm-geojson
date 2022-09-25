const { fetchAndConvertData } = require("../service/index");

const getGeographicData = async (req, res) => {
  try {
    const { bbox } = req.query;
    const geoData = await fetchAndConvertData(bbox);
    res.json(geoData);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = getGeographicData;
