import axios from "axios";
import { COUNTRY_URL } from "../../const/Constants";
const countryAPI = {
  getCountryList,
  getCountryData,
};
function getCountryList(capital) {
  return axios.get(`${COUNTRY_URL}capital/${capital}`);
}
function getCountryData() {
  return axios.get(`${COUNTRY_URL}all`);
}

export default countryAPI;
