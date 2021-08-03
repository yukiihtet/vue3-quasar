import axios from "axios";
import { API_KEY, WEATHER_URL } from "../../const/Constants";

const weatherAPI = {
  getWeatherByCity,
};

function getWeatherByCity(city) {
  return axios.get(`${WEATHER_URL}?q=${city}&units=metric&appid=${API_KEY}`);
}
export default weatherAPI;
