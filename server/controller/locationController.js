import locationsModel from "../model/locationsModel.js";

export const getDataByCountry = async (req, res) => {
  const { country } = req.params;
  try {
    const countryData = await locationsModel.findOne({ country: country });

    if (!countryData)
      return res
        .status(404)
        .send(`Could not find country with name ${country} in database`);

    return res.status(200).json(countryData);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Some error occurred");
  }
};

export const getData = async (req, res) => {
  try {
    const countryData = await locationsModel.find();

    if (!countryData)
      return res.status(404).send(`Could not find any country in database`);

    return res.status(200).json(countryData);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Some error occurred");
  }
};
