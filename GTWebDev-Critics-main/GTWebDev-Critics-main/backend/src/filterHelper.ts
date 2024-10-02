const axios = require("axios");
const BASE_URL: string = "https://api.yelp.com/v3/businesses/search";
const MAP_BASE_URL: string =
  "https://www.googleapis.com/geolocation/v1/geolocate?key=";

const postFilterHelper = async function (req: any, res: any) {
  let response;
  try {
    await getLocation(req, res);
    let categories, radius, attributes, price;
    ({ categories, radius, attributes, price } = req.body);

    //ADDITIONAL FILTERING
    //req.body.sort_by = "distance";

    response = await getYelpData(req, res);
  } catch (error) {
    res.status(400).send("Bad Request");
  }

  res.status(200).send(response.data.businesses);
};
const updateFilterHelper = async function (req: any, res: any) {
  await postFilterHelper(req, res);
};

const deleteFilterHelper = async function (req: any, res: any) {
  let response;
  try {
    await getLocation(req, res);
    req.body.categories = "restaurants";
    req.body.radius = 10000;
    req.body.sort_by = "distance";
    response = await getYelpData(req, res);
  } catch (error) {
    res.status(400).send("Bad Request");
  }
  res.status(200).send(response.data.businesses);
};
async function getLocation(req: any, res: any) {
  let location: any;
  try {
    location = await axios.post(`${MAP_BASE_URL}${process.env.MAPS_API_KEY}`);
  } catch (error) {
    res.status(400).send("Bad Location Request");
  }
  let latitude: number = location.data.location.lat;
  let longitude: number = location.data.location.lng;

  req.body.latitude = latitude;
  req.body.longitude = longitude;
}
async function getYelpData(req: any, res: any) {
  let response;
  let config = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: req.body,
  };
  try {
    response = await axios.get(BASE_URL, config);
  } catch (error) {
    res.status(400).send("Bad Request");
  }
  return response;
}
module.exports = { postFilterHelper, updateFilterHelper, deleteFilterHelper };
